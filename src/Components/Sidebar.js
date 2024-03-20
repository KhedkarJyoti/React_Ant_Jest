import { Button, Flex, Menu } from "antd";
import { AntDesignOutlined, CarryOutOutlined, DashboardOutlined, IeSquareFilled, LogoutOutlined, OpenAIOutlined, OrderedListOutlined, ProfileOutlined, RightCircleOutlined, RightSquareOutlined, SettingOutlined, UpSquareFilled, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  };
  
  const User = () => {
    return (
      <div>
        <h1>User Page</h1>
      </div>
    );
  };
  
  const Settings = () => {
    return (
      <div>
        <h1>Settings Page</h1>
      </div>
    );
  };

const Sidebar = ()=>{
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
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
                        onClick={({key})=>{
                            console.log("key => ",key);
                            navigate(key);

                        }}
                        items={[
                            {
                                key : 'Logo',
                                icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
                                label: 'Ant&React',
                                onClick: () => setCollapsed(!collapsed)
                            },
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
                            // {
                            //     key : '3',
                            //     icon: <OrderedListOutlined />,
                            //     label: 'ToDo'
                            // },
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
                        ]}
                    >
                </Menu>
			</Sider>
        </>
    )
}

export default Sidebar;