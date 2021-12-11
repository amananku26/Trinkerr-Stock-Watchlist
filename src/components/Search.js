import React from 'react'
import { Data } from '../data'
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import MyChip from './MyChip';
import { shadows } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {DeleteIcon} from '@mui/icons-material';

function Search() {
    const [showList, setShowList] = React.useState('')
    const [valueToWatchList, setValuetoWatchList] = React.useState([])
    
    
    const handleClick = (stockName, index, data1, data2, change) => {
        if (stockName !== null || stockName !== 'undefined') {
            const checkiteminlist = valueToWatchList.filter((item) => item.stockName === stockName)
            if (checkiteminlist.length > 0) {
                const newData = valueToWatchList.filter(item => item.stockName !== stockName)
                setValuetoWatchList(newData)
            } else {
                const makeData = {
                    stockName: stockName,
                    index: index,
                    data1: data1,
                    data2, data2,
                    change: change
                }
                setValuetoWatchList([...valueToWatchList, makeData])
            }


        }

    }
    console.log('2222', valueToWatchList)
    return (
        <>
            <div style={{ margin: '10px' }}>
                <Autocomplete
                    style={{ width: 500 }}
                    freeSolo
                    autoComplete
                    disableCloseOnSelect
                    options={Data}
                    getOptionLabel={(option) => option}
                    // onInputChange={(option)=>handleInputChange(option)}
                    renderOption={(option) => {
                        
                        const parent = option.key.split(",")
                        const stockNameandIndex = parent[0].split("::")
                        const stockName = stockNameandIndex[0]
                        const index = stockNameandIndex[1]
                        const data1 = parent[1]
                        const data2 = parent[2]
                        const change = ((data1 - data2) / data2).toFixed(2)
                        const checkitemisthere =  valueToWatchList.filter((item) => item.stockName === stockName)
                        const check = checkitemisthere.length>0 && checkitemisthere[0].stockName
                        return (
                            <Box sx={{ boxShadow: 3, padding: 2 }} onClick={() => handleClick(stockName, index, data1, data2, change)} >
                                <div style={{ display: "flex" }}
                                >
                                    <div style={{ color: `${change < 0 ? 'red' : 'green'}` }}>
                                        {stockName}
                                    </div>
                                    <div style={{ marginLeft: 'auto', marginRight: '0', color: `${change < 0 ? 'red' : 'green'}` }}>
                                        {data1}
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div >
                                        {index}
                                    </div>
                                    <div style={{ marginLeft: 'auto', marginRight: '0', color: `${change < 0 ? 'red' : 'green'}` }}>
                                        {stockName === check? <Button style={{backgroundColor:'#B4B6B9',color:'white'}}>Delete</Button> : change}
                                    </div>
                                </div>
                                <br />
                            </Box>
                        );
                    }}
                    renderInput={(params) => {
                        return (
                            <TextField {...params}
                                onChange={Data}
                                variant="outlined"
                                label="Search Stocks"
                            />
                        )
                    }}
                />
            </div>
            <div>
           
                {valueToWatchList.length > 0 && valueToWatchList.map(function (nested) {
                    // return nested.map(function (element) {
                    return (
                     <MyChip  nested={nested}/>
                    )
                    // })
                })}
            </div>
        </>
    )
}

export default Search
