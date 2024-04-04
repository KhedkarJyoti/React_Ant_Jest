import { Collapse, Divider, Flex, Radio, Space, Typography } from "antd";
import React, { useState } from "react";

const CollapseComponent = ()=>{
    const [sizeValue, setSizeValue] = useState('');

    const text = `Collapse is a content area which can be collapsed and expanded. 
                It can be used to group or hide complex regions to keep the page clean. 
                Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.`;
    const items = [
        {
            key: '1',
            label: 'This is panel header: 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header: 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header: 3',
            children: <p>{text}</p>,
        },
    ];

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Collapse </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Default Collapse </Divider>
                <Collapse items={items} defaultActiveKey={[]} onChange={()=>{}} />
            </Space> 
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Collapse size : Default | Small | Large  </Divider>
                <Radio.Group value={sizeValue} onChange={(e) =>{
                        setSizeValue(e.target.value)
                }}>
                    <Radio value="">Default</Radio>
                    <Radio value="small">Small</Radio>
                    <Radio value="middle">Middle</Radio>
                    <Radio value="large">Large</Radio>
                </Radio.Group>
                <Collapse size={sizeValue} items={[items[0]]} defaultActiveKey={[]} onChange={()=>{}} />
            </Space>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Collapse Accordion Mode : Only one panel open at a time  </Divider>            
                <Collapse accordion items={items} defaultActiveKey={[]} onChange={()=>{}} />
            </Space> 
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Collapse : default open panel  </Divider>            
                <Collapse items={items} defaultActiveKey={['1']} onChange={()=>{}} />
            </Space> 
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Collapse : borderless panel  </Divider>            
                <Collapse items={items} bordered={false} defaultActiveKey={[]} onChange={()=>{}} />
            </Space> 
        </Flex>
    )
}

export default CollapseComponent;