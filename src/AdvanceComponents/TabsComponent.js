
import { useState } from "react";
import { Divider, Flex, Radio, Space, Tabs, Typography } from "antd";
import { DesktopOutlined, MobileOutlined, TabletTwoTone } from "@ant-design/icons";

const TabsComponent = ()=>{ 
    const [tabPosition, setTabPosition] = useState('top');
    const [tabSize, setTabSize] = useState('small');
    const [centered, setCentered] = useState(false);
    const [scroll, setScroll] = useState('top');

    const tabStyle = {
        // width: 300,
        height: 300,
        background: 'floralwhite',
        padding: 15,
        border: '1px solid #ccc'
    } 
    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1...',
            icon:<MobileOutlined />
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2...',
            icon:<TabletTwoTone />
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3...',
            icon:<DesktopOutlined />,
            disabled:true
        },
    ];

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Tabs </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Basic Tabs with disable property & custom icons </Divider>                
                <Tabs 
                    style={tabStyle}             
                    defaultActiveKey="1" 
                    items={items} 
                    onChange={()=>{}}  
                />
                <Divider orientation="left" orientationMargin={0}>Tabs position : Left | Right | Top | Bottom </Divider>
                <Radio.Group
                    onChange={(e)=>{
                        if(e.target.value === 'center-top'){
                            setTabPosition('top');                             
                            setCentered(true)
                        }
                        else if(e.target.value === 'center-bottom'){
                            setTabPosition('bottom');
                            setCentered(true)
                        }
                        else{
                            setTabPosition(e.target.value);
                            setCentered(false)
                        }
                    }}
                    value={tabPosition}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="top">Top</Radio.Button>
                    <Radio.Button value="center-top">Center-Top</Radio.Button>
                    <Radio.Button value="bottom">Bottom</Radio.Button>
                    <Radio.Button value="center-bottom">Center-Bottom</Radio.Button>
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>
                </Radio.Group>
                <Tabs 
                    style={tabStyle}             
                    defaultActiveKey="1" 
                    items={items} 
                    onChange={()=>{}}  
                    tabPosition={tabPosition}
                    centered={centered}
                />
                <Divider orientation="left" orientationMargin={0}>Tabs Size : Small | Middle | Large </Divider>
                <Radio.Group
                    onChange={(e)=>{setTabSize(e.target.value); }}
                    value={tabSize}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="middle">Middle</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
                <Tabs 
                    style={tabStyle}             
                    defaultActiveKey="1" 
                    items={items} 
                    onChange={()=>{}} 
                    size={tabSize} 
                />  
                <Divider orientation="left" orientationMargin={0}>Scrolling Tabs : Horizontal | Vertical</Divider>
                <Radio.Group
                    onChange={(e)=>{setScroll(e.target.value); }}
                    value={scroll}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="top">Horizotal</Radio.Button>
                    <Radio.Button value="left">vertical</Radio.Button>
                </Radio.Group>
                <Tabs 
                    tabPosition={scroll}
                    style={tabStyle}             
                    defaultActiveKey="1" 
                    items={new Array(18).fill(null).map((_, i) => {
                        const id = String(i+1);
                        return {
                            label: `Tab-${id}`,
                            key: id,
                            disabled: i === 17,
                            children: `Content of tab ${id}`,
                        };
                    })} 
                    onChange={()=>{}}
                /> 
            </Space>              
        </Flex>
    )
}

export default TabsComponent;