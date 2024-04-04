import { Button, Divider, Drawer, Flex, Modal, Radio, Space, Typography } from "antd";
import React, { useState } from "react";

const DrawerComponent = ()=>{
    const [drawerValue, setDrawerValue] = useState('');
    const [open, setOpen] = useState(false);

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Drawer </Typography.Title>                
            </Flex>
            <Space gap='large' direction='horizontal'>
                <Radio.Group value={drawerValue} onChange={(e) =>{
                        // if(e.target.value === "custom"){
                        //     setShowSlider(true)
                        // }else{
                        //     setShowSlider(false)
                            setDrawerValue(e.target.value);
                            setOpen(true)
                        // }
                    }}>
                    <Radio value="left">Left</Radio>
                    <Radio value="top">Top</Radio>
                    <Radio value="right">Right</Radio>
                    <Radio value="bottom">Bottom</Radio>
                </Radio.Group>
                <Drawer
                    title="Basic Drawer with differnt direction"
                    placement={drawerValue}
                    closable={false}
                    onClose={()=>setOpen(false)}
                    open={open}
                    key={drawerValue}
                >
                    <p>Drawer contents...</p>
                </Drawer>
            </Space> 

        </Flex>
    )
}

export default DrawerComponent;