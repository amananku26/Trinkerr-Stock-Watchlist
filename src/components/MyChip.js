import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
function MyChip({nested}) {
    const [showText, setShowText] = React.useState(false)
    const handleMouseEnter = e => {
        setShowText(true)
    }
    const handleMouseLeave = e => {
        setShowText(false)
    }
    return (
        <div>
            <Box sx={{ boxShadow: 1, width: "50%" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="button">
                <div style={{ display: "flex" }}
              >
                    <div style={{ color: `${nested.change < 0 ? 'red' : 'green'}` }}>
                        {nested.stockName}
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: '0', color: `${nested.change < 0 ? 'red' : 'green'}` }}>
                        {nested.data1}
                    </div>
                </div>
                    <div style={{ display: "flex" }}>
                        <div >
                            {showText ? '' : nested.index}
                        </div>
                        <div style={{ marginLeft: 'auto', marginRight: '0', color: `${nested.change < 0 ? 'red' : 'green'}` }}>
                            {showText ? <Button style={{backgroundColor:'#158EFA',color:'white'}}>B</Button>
                            :nested.change}
                        </div>
                    </div>
                {/* } */}

                <br />
            </Box>
        </div>
    )
}

export default MyChip
