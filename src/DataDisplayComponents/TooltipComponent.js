import { Button, ConfigProvider, Divider, Flex, Radio, Space, Tooltip, Typography } from "antd";
import React, { useState } from "react";

const TooltipComponent = () =>{
    const [arrowValue, setArrowValue] = useState('show');
    const [arrow, setArrow] = useState(true);

    const tooltip = <span>This is Tooltip...</span>;
    const buttonWidth = 108;

    const colors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',
      ];

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Tooltip </Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Tooltip </Divider>
            <Tooltip title="This is tooltip....">
                <span style={{padding:'10px', background:'aliceblue'}}>Tooltip will show on mouse hover</span>
            </Tooltip>
            <Divider orientation="left" orientationMargin={0}> Tooltip Placement </Divider>
            <ConfigProvider style={{
                    background:'aliceblue'
                }}
                button={{
                    style: {
                        width: buttonWidth,
                        margin: 4,
                    },
                }}
            >
                <div style={{
                    background: 'aliceblue',
                    width:600,
                    padding:15
                }}>
                    <div style={{
                        marginInlineStart : buttonWidth,
                        whiteSpace:'nowrap'
                    }}>
                        <Tooltip title={tooltip} placement='topLeft' >
                            <Button>Top Left</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='top' >
                            <Button>Top</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='topRight' >
                            <Button>Top Right</Button>
                        </Tooltip>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        float:'inline-start'
                    }}>
                        <Tooltip title={tooltip} placement='leftTop' >
                            <Button>Left Top </Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='left' >
                            <Button>Left</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='leftBottom' >
                            <Button>Left Bottom</Button>
                        </Tooltip>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        marginInlineStart: buttonWidth * 4 + 24
                    }}>
                        <Tooltip title={tooltip} placement='rightTop' >
                            <Button>Right Top</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='right' >
                            <Button>Right</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='rightBottom' >
                            <Button>Right Bottom</Button>
                        </Tooltip>
                    </div>
                    <div style={{
                        marginInlineStart : buttonWidth,
                        clear:'both',
                        whiteSpace:'nowrap'
                    }}>
                        <Tooltip title={tooltip} placement='bottomLeft' >
                            <Button>Bottom Left</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='bottom' >
                            <Button>Bottom</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='bottomRight' >
                            <Button>Bottom Right</Button>
                        </Tooltip>
                    </div>
                </div>
            </ConfigProvider>
            <Divider orientation="left" orientationMargin={0}> Tooltip Placement with Arrow Properties : Show / Hide / Center </Divider>
            <Radio.Group value={arrowValue} onChange={(e) =>{
                    setArrowValue(e.target.value)
                    if(e.target.value === 'hide'){
                        setArrow(false)
                    }else if(e.target.value === 'show'){
                        setArrow(true)
                    }else{
                        setArrow({pointAtCenter: true});
                    }
                }}>
                <Radio value="show">Show</Radio>
                <Radio value="hide">Hide</Radio>
                <Radio value="center">Center</Radio>
            </Radio.Group>
            <ConfigProvider style={{
                    background:'aliceblue'
                }}
                button={{
                    style: {
                        width: buttonWidth,
                        margin: 4,
                    },
                }}
            >
                <div style={{
                    background: 'aliceblue',
                    width:600,
                    padding:15
                }}>
                    <div style={{
                        marginInlineStart : buttonWidth,
                        whiteSpace:'nowrap'
                    }}>
                        <Tooltip title={tooltip} placement='topLeft' arrow={arrow}>
                            <Button>Top Left</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='top' arrow={arrow} >
                            <Button>Top</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='topRight' arrow={arrow} >
                            <Button>Top Right</Button>
                        </Tooltip>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        float:'inline-start'
                    }}>
                        <Tooltip title={tooltip} placement='leftTop' arrow={arrow} >
                            <Button>Left Top </Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='left' arrow={arrow} >
                            <Button>Left</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='leftBottom' arrow={arrow} >
                            <Button>Left Bottom</Button>
                        </Tooltip>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        marginInlineStart: buttonWidth * 4 + 24
                    }}>
                        <Tooltip title={tooltip} placement='rightTop' arrow={arrow} >
                            <Button>Right Top</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='right' arrow={arrow} >
                            <Button>Right</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='rightBottom' arrow={arrow} >
                            <Button>Right Bottom</Button>
                        </Tooltip>
                    </div>
                    <div style={{
                        marginInlineStart : buttonWidth,
                        clear:'both',
                        whiteSpace:'nowrap'
                    }}>
                        <Tooltip title={tooltip} placement='bottomLeft' arrow={arrow} >
                            <Button>Bottom Left</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='bottom' arrow={arrow} >
                            <Button>Bottom</Button>
                        </Tooltip>
                        <Tooltip title={tooltip} placement='bottomRight' arrow={arrow} >
                            <Button>Bottom Right</Button>
                        </Tooltip>
                    </div>
                </div>
            </ConfigProvider>
            <Divider orientation="left" orientationMargin={0}> Colored Tooltips </Divider>
            <Space gap='medium' wrap>
                {colors.map((color) => (
                    <Tooltip title={color} color={color} key={color}>
                        <Button>{color}</Button>
                    </Tooltip>
                ))}
            </Space>
        </Flex>
    )
}

export default TooltipComponent;