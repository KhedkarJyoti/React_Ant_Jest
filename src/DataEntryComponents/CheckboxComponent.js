import React, { useState } from "react";
import { Checkbox, Divider, Flex, Space, Typography } from "antd";

const CheckboxComponent = () =>{
    const data = ['One', 'Two', 'Three'];
    const [checkedList, setCheckedList] = useState(data);

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> CheckBox </Typography.Title>                
            </Flex>
            <Space gap={15} align="start" wrap >
                <Space direction='vertical' gap={15}>                
                    <Divider orientation="left" orientationMargin={0}> Basic CheckBox </Divider>
                    <Checkbox>Check Here..</Checkbox>
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Disabled CheckBox </Divider>
                    <Checkbox defaultChecked={false} disabled >Check Here.. (disabled)</Checkbox>
                    <Checkbox indeterminate disabled >Check Here.. (disabled)</Checkbox>
                    <Checkbox defaultChecked disabled >Check Here.. (disabled)</Checkbox>
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> CheckBox Group </Divider>
                    <Checkbox.Group 
                        vertical
                        options={[
                            {
                                label: 'One',
                                value: 'One',
                            },
                            {
                                label: 'Two',
                                value: 'Two',
                            },
                            {
                                label: 'Three',
                                value: 'Three',
                                disabled:true
                            },
                        ]} 
                        defaultValue={['One']}               
                    />
    
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Check All </Divider>
                    <Checkbox indeterminate={checkedList.length > 0 && checkedList.length < data.length} 
                        onChange={(e)=>{
                            console.log("e.target.checked =>",e.target.checked)
                            setCheckedList(e.target.checked ? data : [])
                        }} 
                        checked={data.length === checkedList.length}
                    >
                        Check all
                    </Checkbox>
                    <Checkbox.Group options={data} value={checkedList} onChange={(list)=>{setCheckedList(list)}} />
                </Space>      
            </Space>            
        </Flex>
    )
}

export default CheckboxComponent;