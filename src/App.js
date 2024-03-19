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
					<>
						<FloatButton.Group
							trigger="click"
							type="primary"
							style={{ right: 24 }}
							icon={open ? <UpOutlined /> : <DownOutlined />}
						>
							<FloatButton />
							<FloatButton icon={<CommentOutlined />} />
						</FloatButton.Group>
						{/* <FloatButton.Group
							trigger="hover"
							type="primary"
							style={{ right: 94 }}
							icon={<CustomerServiceOutlined />}
						>
							<FloatButton />
							<FloatButton icon={<CommentOutlined />} />
						</FloatButton.Group> */}
					</>

				</Content>           
			 </Layout>
		  </Layout>
  );
}

export default App;
