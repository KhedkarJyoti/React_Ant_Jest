import React from "react";
import { DashboardOutlined, LogoutOutlined, OrderedListOutlined, RightCircleOutlined, RightSquareOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Divider, Flex, Layout, Menu, Typography } from "antd";
// import { Content, Footer, Header } from "antd/es/layout/layout";
const { Header, Content, Footer } = Layout;
const layoutItems = [
    {
        key : '/dashboard',
        icon: <DashboardOutlined />,
        label: 'Dashboard',             
    },
    {
        key : 'component',
        icon: <OrderedListOutlined />,
        label: 'Components',
        children: [
            {
                key : '/general',
                icon: <RightSquareOutlined />,
                label: 'General',
                children: [
                    {
                        key : '/button',
                        icon: <RightCircleOutlined />,
                        label: 'Button'
                    },
                    {
                        key : '/float-button',
                        icon: <RightCircleOutlined />,
                        label: 'FloatButton',
                    },
                    {
                        key : '/typography',
                        icon: <RightCircleOutlined />,
                        label: 'Typography',
                    }
                ]
            },
            {
                key : '/layout',
                icon: <RightSquareOutlined />,
                label: 'Layout',
                children: [
                    {
                        key : '/divider',
                        icon: <RightCircleOutlined />,
                        label: 'Divider'
                    },
                    {
                        key : '/flex',
                        icon: <RightCircleOutlined />,
                        label: 'Flex',
                    },
                    {
                        key : '/grid',
                        icon: <RightCircleOutlined />,
                        label: 'Grid',
                    },
                    {
                        key : '/layout',
                        icon: <RightCircleOutlined />,
                        label: 'Layout',
                    },
                    {
                        key : '/space',
                        icon: <RightCircleOutlined />,
                        label: 'Space',
                    }
                ]
            },
            {
                key : '/navigation',
                icon: <RightSquareOutlined />,
                label: 'Navigation',
            }
        ]
    },
    {
        key : '/profile',
        icon: <UserOutlined />,
        label: 'Profile'
    },
    {
        key : '/settings',
        icon: <SettingOutlined />,
        label: 'Settings'
    },
    {
        key : '/logout',
        icon: <LogoutOutlined />,
        label: 'Logout'
    },
]

const LayoutComponent = () =>{
    const logoURL = '../dummy.png';

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Layout</Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Header-Content-Footer Layout </Divider>
            <div style={{height:'600px', border:'1px solid #999'}}>
                <Layout>
                    <Header style={{display:'flex', alignItems:'center'}}>
                        <div className="layout-logo"><Avatar src={logoURL} 
                            style={{   
                                position:'absolute',
                                width:'inherit',
                                // width:'115px',
                                height:'30px',
                                borderRadius:'unset'
                        }}/></div>
                        <Menu
                            theme="dark"
                            mode='horizontal'
                            items={layoutItems}
                        ></Menu>
                    </Header>
                    <Content style={{margin:'0 48px'}}>
                        <Breadcrumb style={{margin:'16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Layout</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{height:'415px', background:'#fff', borderRadius:'10px'}}>                            
                            <Flex align='center' justify='center' vertical gap='middle' style={{height:'-webkit-fill-available'}}>
                                <Typography.Title level={5}>Content....</Typography.Title>
                            </Flex>
                        
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant D Layout @2024 created by Jyoti</Footer>
                </Layout>
            </div>
        </Flex>
    )
}

export default LayoutComponent;