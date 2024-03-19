import { Button, Flex, Menu } from "antd";
import { AntDesignOutlined, CarryOutOutlined, DashboardOutlined, IeSquareFilled, LogoutOutlined, OpenAIOutlined, OrderedListOutlined, ProfileOutlined, RightCircleOutlined, RightSquareOutlined, SettingOutlined, UpSquareFilled, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
const Sidebar = ()=>{
    const [collapsed, setCollapsed] = useState(false)
    return(
        <>
            {/* <Flex>
                <div className="logo">
                    <OpenAIOutlined />
                    <span className="logo-text"> Ant&React  
                        <Button 
                            type='text' 
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className='collapse-btn'
                        />
                    </span>
                </div>                
            </Flex> */}
            <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
			 	{/* <Button 
					 type='text' 					 
					 onClick={() => setCollapsed(!collapsed)}
					 className='collapse-btn '
				>
				{collapsed ? <MenuUnfoldOutlined /> : <><span className="logo-text"> Ant&React </span> <MenuFoldOutlined /></>}
				</Button> */}
				
                <Menu 
                        mode="inline" 
                        defaultSelectedKeys={['Logo','1']}  
                        className='menu-bar'
                        items={[
                            {
                                key : 'Logo',
                                icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
                                label: 'Ant&React',
                                onClick: () => setCollapsed(!collapsed)
                            },
                            {
                                key : '1',
                                icon: <DashboardOutlined />,
                                label: 'Dashboard'                                
                            },
                            {
                                key : '2',
                                icon: <OrderedListOutlined />,
                                label: 'Components',
                                children: [
                                    {
                                        key : '21',
                                        icon: <RightSquareOutlined />,
                                        label: 'General',
                                        children: [
                                            {
                                                key : '211',
                                                icon: <RightCircleOutlined />,
                                                label: 'Button',
                                            },
                                            {
                                                key : '212',
                                                icon: <RightCircleOutlined />,
                                                label: 'FloatButton',
                                            }
                                        ]
                                    },
                                    {
                                        key : '22',
                                        icon: <RightSquareOutlined />,
                                        label: 'Navigation',
                                    }
                                ]
                            },
                            // {
                            //     key : '3',
                            //     icon: <OrderedListOutlined />,
                            //     label: 'ToDo'
                            // },
                            {
                                key : '4',
                                icon: <UserOutlined />,
                                label: 'Profile'
                            },
                            {
                                key : '5',
                                icon: <SettingOutlined />,
                                label: 'Settings'
                            },
                            {
                                key : '6',
                                icon: <LogoutOutlined />,
                                label: 'Logout'
                            },
                        ]}
                    >
                </Menu>
			</Sider>
        </>
    )
}

export default Sidebar;