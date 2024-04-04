import { Button, ConfigProvider, Divider, Flex, Popover, Radio, Space, Typography } from "antd";
import React, { useState } from "react";

const PopoverComponent = () =>{
    const [arrowValue, setArrowValue] = useState('show');
    const [arrow, setArrow] = useState(true);
    const [open, setOpen] = useState(false);
    const [openClick, setOpenClick] = useState(false);

    const popoverTitle = <div>Popover...</div>;
    const content = <div><p>Popover Content</p><p>Popover Content</p></div>;
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
                <Typography.Title level={3}> Popover </Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Popover </Divider> 
            <Space gap='medium'>           
                <Popover title='Basic Popover...' content={content}>
                    <Button type='primary'>Hover Here...</Button>
                </Popover>
            </Space>
            <Divider orientation="left" orientationMargin={0}> Triggered Popover </Divider>
            <Space gap='large'>
                <Popover title='Triggered Popover...' content={content} trigger='hover'>
                    <Button type='primary'>Hover Here</Button>
                </Popover>
                <Popover title='Triggered Popover...' content={content} trigger='focus'>
                    <Button type='primary'>Focus Here</Button>
                </Popover>
                <Popover title='Triggered Popover...' content={content} trigger='click'>
                    <Button type='primary'>Click Here</Button>
                </Popover>
            </Space>
            <Divider orientation="left" orientationMargin={0}> Popover Placement </Divider>
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
                        <Popover title={popoverTitle} placement='topLeft' content={content} >
                            <Button>Top Left</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='top' content={content} >
                            <Button>Top</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='topRight' content={content} >
                            <Button>Top Right</Button>
                        </Popover>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        float:'inline-start'
                    }}>
                        <Popover title={popoverTitle} placement='leftTop' content={content} >
                            <Button>Left Top </Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='left' content={content} >
                            <Button>Left</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='leftBottom' content={content} >
                            <Button>Left Bottom</Button>
                        </Popover>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        marginInlineStart: buttonWidth * 4 + 24
                    }}>
                        <Popover title={popoverTitle} placement='rightTop' content={content} >
                            <Button>Right Top</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='right' content={content} >
                            <Button>Right</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='rightBottom' content={content} >
                            <Button>Right Bottom</Button>
                        </Popover>
                    </div>
                    <div style={{
                        marginInlineStart : buttonWidth,
                        clear:'both',
                        whiteSpace:'nowrap'
                    }}>
                        <Popover title={popoverTitle} placement='bottomLeft' content={content} >
                            <Button>Bottom Left</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='bottom' content={content} >
                            <Button>Bottom</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='bottomRight' content={content} >
                            <Button>Bottom Right</Button>
                        </Popover>
                    </div>
                </div>
            </ConfigProvider>
            <Divider orientation="left" orientationMargin={0}> Popover Placement with Arrow Properties : Show / Hide / Center </Divider>
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
                        <Popover title={popoverTitle} placement='topLeft' arrow={arrow}  content={content}>
                            <Button>Top Left</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='top' arrow={arrow}  content={content}>
                            <Button>Top</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='topRight' arrow={arrow} content={content} >
                            <Button>Top Right</Button>
                        </Popover>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        float:'inline-start'
                    }}>
                        <Popover title={popoverTitle} placement='leftTop' arrow={arrow} content={content} >
                            <Button>Left Top </Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='left' arrow={arrow} content={content} >
                            <Button>Left</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='leftBottom' arrow={arrow} content={content} >
                            <Button>Left Bottom</Button>
                        </Popover>
                    </div>
                    <div style={{
                        width : buttonWidth,
                        marginInlineStart: buttonWidth * 4 + 24
                    }}>
                        <Popover title={popoverTitle} placement='rightTop' arrow={arrow} content={content} >
                            <Button>Right Top</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='right' arrow={arrow} content={content} >
                            <Button>Right</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='rightBottom' arrow={arrow} content={content} >
                            <Button>Right Bottom</Button>
                        </Popover>
                    </div>
                    <div style={{
                        marginInlineStart : buttonWidth,
                        clear:'both',
                        whiteSpace:'nowrap'
                    }}>
                        <Popover title={popoverTitle} placement='bottomLeft' arrow={arrow} content={content} >
                            <Button>Bottom Left</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='bottom' arrow={arrow} content={content} >
                            <Button>Bottom</Button>
                        </Popover>
                        <Popover title={popoverTitle} placement='bottomRight' arrow={arrow} content={content} >
                            <Button>Bottom Right</Button>
                        </Popover>
                    </div>
                </div>
            </ConfigProvider>
            <Divider orientation="left" orientationMargin={0}> Colored Popovers </Divider>
            <Space gap='medium' wrap>
                {colors.map((color) => (
                    <Popover title={popoverTitle} color={color} key={color} content={content}>
                        <Button>{color}</Button>
                    </Popover>
                ))}
            </Space>
            <Divider orientation="left" orientationMargin={0}> Popovers with Dialog Controls </Divider>
            <Space gap='medium' wrap>
                <Popover 
                    title={popoverTitle} 
                    content={<div><p>Popover Content</p><p>Popover Content</p><p><Button danger onClick={()=>setOpen(false)}>Close</Button></p></div>}
                    open={open}
                    onOpenChange={()=>setOpen(true)}
                >
                    <Button>Hover & Click</Button>
                </Popover> 
                <Popover 
                    title={popoverTitle} 
                    content={<div><p>Popover Content</p><p>Popover Content</p><p><Button danger onClick={()=>setOpenClick(false)}>Close</Button></p></div>}                    
                    trigger='click' open={openClick} 
                    onOpenChange={()=>setOpenClick(true)}
                >
                    <Button>Click</Button>
                </Popover>                
            </Space>
        </Flex>
    )
}

export default PopoverComponent;