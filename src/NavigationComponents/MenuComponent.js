import { DashboardOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, OrderedListOutlined, RightCircleOutlined, RightSquareOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Menu, Typography } from "antd";
import React, { useState } from "react";

const items = [
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
                children: [
                    {
                        key : '/anchor',
                        icon: <RightCircleOutlined />,
                        label: 'Anchor'
                    },
                    {
                        key : '/breadcrumb',
                        icon: <RightCircleOutlined />,
                        label: 'Breadcrumb',
                    },
                    {
                        key : '/dropdown',
                        icon: <RightCircleOutlined />,
                        label: 'Dropdown',
                    },
                    {
                        key : '/menu',
                        icon: <RightCircleOutlined />,
                        label: 'Menu',
                    },
                    {
                        key : '/pagination',
                        icon: <RightCircleOutlined />,
                        label: 'Pagination',
                    },
                    {
                        key : '/steps',
                        icon: <RightCircleOutlined />,
                        label: 'Steps',
                    }
                ]
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
];

const MenuComponent = () =>{
    const [current, setCurrent] = useState('/dashboard')
    const [collapsed, setCollapsed] = useState(true);
    const [openKeys, setOpenKeys] = useState(['/general']);

    const rootSubmenuKeys = ['/general', '/layout', '/navigation'];

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Menu</Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Horizotal Menu </Divider>
            <Menu 
                mode="horizontal"
                items={items}
                selectedKeys={[current]}
                onClick={(e)=>{
                    console.log("e => ",e)
                    setCurrent(e.key);
                }}
            />
            <Divider orientation="left" orientationMargin={0}> Collapsed Inline Menu </Divider>
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={()=> setCollapsed(!collapsed)} style={{ marginBottom: 16, width:'80px' }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['component']}
                    defaultOpenKeys={['/general']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
            <Divider orientation="left" orientationMargin={0}> Open Only SubMenu </Divider>
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={()=> setCollapsed(!collapsed)} style={{ marginBottom: 16, width:'80px' }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['component']}
                    openKeys={openKeys}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    onOpenChange={(keys)=>{
                        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
                        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                            setOpenKeys(keys);
                        } else {
                            setOpenKeys(latestOpenKey ? ['component', latestOpenKey] : []);
                        }
                    }}
                    items={items}
                />
            </div>
            <Divider orientation="left" orientationMargin={0}> SubMenu open as a pop-up</Divider>
            <div style={{ width: 256 }}>
                <Menu
                    mode="vertical"
                    items={items}
                />
            </div>
        </Flex>
    )
}

export default MenuComponent;