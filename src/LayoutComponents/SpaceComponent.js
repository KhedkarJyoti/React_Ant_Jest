import { Button, Divider, Flex, Radio, Slider, Space, Typography } from "antd";
import React, { useState } from "react";

const SpaceComponent = ()=>{
    const [showSlider, setShowSlider]   = useState(false);
    const [sizeValue, setSizeValue]     = useState('small');

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Space</Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Horizontal Space </Divider>
            <Space>
                <Button type="primary"> Primary Button</Button>
                <Button> Default Button</Button>
                <Button danger> Danger Button</Button>
            </Space>
            <Divider orientation="left" orientationMargin={0}> Vertical Space </Divider>
            <Space 
                direction="vertical"
                style={{ display:'flex'}}
            >
                <Button type="primary"> Primary Button</Button>
                <Button> Default Button</Button>
                <Button danger> Danger Button</Button>
            </Space>
            <Divider orientation="left" orientationMargin={0}>Space Size </Divider>
            <Radio.Group value={sizeValue} onChange={(e) =>{
                    if(e.target.value === "custom"){
                        setShowSlider(true)
                    }else{
                        setShowSlider(false)
                        setSizeValue(e.target.value)
                    }
                }}>
                <Radio value="small">Small</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="large">Large</Radio>
                <Radio value="custom">Custom</Radio>
            </Radio.Group>
            {showSlider && <Slider value={sizeValue} onChange={setSizeValue} />}
            <Space size={sizeValue}>
                <Button type="primary"> Primary Button</Button>
                <Button> Default Button</Button>
                <Button danger> Danger Button</Button>
            </Space>
            <Divider orientation="left" orientationMargin={0}>Space Align </Divider>
            <Flex gap='middle'>
                <div className="space-align-block">
                    <Space align='start'>
                        Start 
                        <Button type="primary">Button</Button>
                        <span className="space-align-block-item">Span Block</span>
                    </Space>
                </div>
                <div className="space-align-block">
                    <Space align='center'>
                        Center 
                        <Button type="primary">Button</Button>
                        <span className="space-align-block-item">Span Block</span>
                    </Space>
                </div>
                <div className="space-align-block">
                    <Space align='end'>
                        End 
                        <Button type="primary">Button</Button>
                        <span className="space-align-block-item">Span Block</span>
                    </Space>
                </div>
                <div className="space-align-block">
                    <Space align='baseline'>
                        Baseline 
                        <Button type="primary">Button</Button>
                        <span className="space-align-block-item">Span Block</span>
                    </Space>
                </div>
            </Flex>
            <Divider orientation="left" orientationMargin={0}>Space Wrap </Divider>
            <Space wrap>
                {Array(20).fill(null).map((_, i)=>(
                    <Button type="primary">Button</Button>
                ))

                }
            </Space>
            <Divider orientation="left" orientationMargin={0}>Space Split </Divider>
            <Flex gap='middle' > 
                <Space split={<Divider type="vertical" />}>
                    <Typography.Link>Link</Typography.Link>
                    <Typography.Link>Link</Typography.Link>
                    <Typography.Link>Link</Typography.Link>
                </Space>
                <Space split={'||'}>                    
                    <Typography.Link>Link</Typography.Link>
                    <Typography.Link>Link</Typography.Link>
                    <Typography.Link>Link</Typography.Link>
                </Space>
            </Flex>
        </Flex>
    )
}

export default SpaceComponent; 