import React, { useState } from "react";
import { Button, Divider, Flex, Radio, Space, Typography } from "antd";

const RadioComponent = () =>{
    const [radioDisabled, setRadioDisabled] = useState(true);
    const [radioDirection, setRadioDirection] = useState('horizontal')

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Radio </Typography.Title>                
            </Flex>
            <Space gap={15} align="start" wrap >
                <Space direction='vertical' gap={15}>                
                    <Divider orientation="left" orientationMargin={0}> Basic Radio </Divider>
                    <Radio>Check Here..</Radio>
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Disabled Radio </Divider>
                    <Button type='primary' onClick={()=> setRadioDisabled(!radioDisabled)}>Toggle Disable</Button>
                    <Radio defaultChecked={false} disabled={radioDisabled} >Check Here.. (disabled)</Radio>
                    <Radio defaultChecked disabled={radioDisabled} >Check Here.. (disabled)</Radio>
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Radio Group </Divider>
                    <Radio.Group
                        onChange={(e)=>{setRadioDirection(e.target.value); }}
                        value={radioDirection}
                        style={{
                            marginBottom: 8,
                        }}
                    >
                        <Radio.Button value="horizotal">Horizotal</Radio.Button>
                        <Radio.Button value="vertical">Vertical</Radio.Button>
                    </Radio.Group>
                    <Radio.Group
                        onChange={()=>{}}
                        style={{
                            marginBottom: 8,
                        }}
                    >
                        <Space direction={radioDirection}>
                            <Radio value="Option A">Option A</Radio>
                            <Radio value="Option B">Option B</Radio>
                            <Radio value="Option C">Option C</Radio>
                            <Radio value="Option D">Option D</Radio>
                        </Space>
                    </Radio.Group>    
                </Space>  
            </Space>            
        </Flex>
    )
}

export default RadioComponent;