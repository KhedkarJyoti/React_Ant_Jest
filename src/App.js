import logo from './logo.svg';
import { Button, Flex, FloatButton, Layout, Switch } from 'antd';
import './App.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { CommentOutlined, CustomerServiceOutlined, DownCircleOutlined, DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UpCircleOutlined, UpOutlined } from '@ant-design/icons';
import Headerbar from './Components/Headerbar';
import { Route, Router, Routes } from 'react-router-dom';
import ButtonComponent from './General/ButtonComponent';
import DashBoard from './Components/DashBoard';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] 		  = useState(true);

  const onChange = (checked) => {
    setOpen(checked);
  };

  return (
	
		<Layout>
			{/* <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
			<Button 
					type='text' 					 
					onClick={() => setCollapsed(!collapsed)}
					className='collapse-btn '
			>
			{collapsed ? <MenuUnfoldOutlined /> : <><span className="logo-text"> Ant&React </span> <MenuFoldOutlined /></>}
			</Button>
			<Sidebar />
			
			</Sider> */}
			<Sidebar />
			<Layout>
			<Header className='header'>
			

				
				<Headerbar />
			
			</Header>
			<Content className='content'>
				<Flex >
					<Routes>
					
						<Route exact path='/' Component={DashBoard}></Route>
						<Route exact path='/button' Component={ButtonComponent}></Route>
						
					</Routes>
					<FloatButton.Group
						trigger="click"
						type="primary"
						style={{ right: 24 }}
						icon={open ? <UpOutlined /> : <DownOutlined />}
					>
						<FloatButton />
						<FloatButton icon={<CommentOutlined />} />
					</FloatButton.Group>
				</Flex>	
			</Content>           
			</Layout>
		</Layout>
	
  );
}

export default App;
