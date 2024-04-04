import { Button, Divider, Flex, Radio, Slider, Typography } from "antd";
import React, { useState } from "react";

const FlexComponent = () =>{
    const [typeValue, setTypeValue]         = useState('horizontal');
    const [alignValue, setAlignValue]       = useState('flex-start');
    const [justifyValue, setJustifyValue]   = useState('flex-start');
    const [gapValue, setGapValue]           = useState('small');
    const [showSlider, setShowSlider]       = useState(false);

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Flex</Typography.Title>
            </Flex>
            <Divider orientation="left" orientationMargin={0}>Direction of Flex Items : Horizontal / Vertical </Divider>
            <Radio.Group value={typeValue} onChange={(e) => setTypeValue(e.target.value)}>
                <Radio value="horizontal">horizontal</Radio>
                <Radio value="vertical">vertical</Radio>
            </Radio.Group>
            <Flex gap={'small'} vertical = {typeValue === 'vertical'}>
                {Array.from({
                    length : 4
                }).map((_,i) =>(
                    <div key={i}
                        style={{
                            width:'25%',
                            background: '#4096ff',
                            height: '90px'
                        }}
                    >

                    </div>
                ))}
            </Flex>
            <Divider orientation="left" orientationMargin={0}>Flex Items Alignment / Justify </Divider>
            <Radio.Group value={alignValue} onChange={(e) => setAlignValue(e.target.value)}>
                <Radio value="flex-start">flex-start</Radio>
                <Radio value="center">center</Radio>
                <Radio value="flex-end">flex-end</Radio>
            </Radio.Group>
            <Radio.Group value={justifyValue} onChange={(e) => setJustifyValue(e.target.value)}>
                <Radio value="flex-start">flex-start</Radio>
                <Radio value="center">center</Radio>
                <Radio value="flex-end">flex-end</Radio>
                <Radio value="space-around">space-around</Radio>
                <Radio value="space-between">space-between</Radio>
                <Radio value="space-evenly">space-evenly</Radio>
            </Radio.Group>
            <Flex gap='small' align={alignValue} justify={justifyValue}
                style={{
                    height:'150px',
                    border:'1px solid #000',
                    padding:'15px'
                }}
            >
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
            </Flex>
            <Divider orientation="left" orientationMargin={0}>Gap Between Flex Items </Divider>
            <Radio.Group value={gapValue} onChange={(e) =>{
                    if(e.target.value === "custom"){
                        setShowSlider(true)
                    }else{
                        setShowSlider(false)
                        setGapValue(e.target.value)
                    }
                }}>
                <Radio value="small">Small</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="large">Large</Radio>
                <Radio value="custom">Custom</Radio>
            </Radio.Group>
            {showSlider && <Slider value={gapValue} onChange={setGapValue} />}
            <Flex gap={gapValue} align='flex-start' justify='flex-start'
                // style={{
                //     height:'150px',
                //     border:'1px solid #000',
                //     padding:'15px'
                // }}
            >
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
            </Flex>
            <Divider orientation="left" orientationMargin={0}>Wrap Flex Items </Divider>
            <Flex gap='small' wrap="wrap"
                // style={{
                //     height:'150px',
                //     border:'1px solid #000',
                //     padding:'15px'
                // }}
            >
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
                <Button type="primary">Item</Button>
            </Flex>
        </Flex>
    )
}

export default FlexComponent;