
import React from 'react';
import { Breadcrumb, Layout, Select, theme} from 'antd';
// import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sidebar from './Components/Sidebar';
import Headerbar from './Components/Headerbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import ButtonComponent from './GeneralComponents/ButtonComponent';
import DashBoard from './Components/DashBoard';
import FloatButtonComponent from './GeneralComponents/FloatButtonComponent';
import TypographyComponent from './GeneralComponents/TypographyComponent';
import DividerComponent from './LayoutComponents/DividerComponent';
import FlexComponent from './LayoutComponents/FlexComponent';
import GridComponent from './LayoutComponents/GridComponent';
import LayoutComponent from './LayoutComponents/LayoutComponent';
import SpaceComponent from './LayoutComponents/SpaceComponent';
import AnchorComponent from './NavigationComponents/AnchorComponent';
import BreadcrumbComponent from './NavigationComponents/BreadcrumbComponent';
import DropdownComponent from './NavigationComponents/DropdownComponent';
import MenuComponent from './NavigationComponents/MenuComponent';
import StepsComponent from './NavigationComponents/StepsComponent';
import CardComponent from './DataDisplayComponents/CardComponent';
import ListComponent from './DataDisplayComponents/ListComponent';
import TableComponent from './DataDisplayComponents/TableComponent';
import TooltipComponent from './DataDisplayComponents/TooltipComponent';
import PopoverComponent from './DataDisplayComponents/PopoverComponent';
import ModalComponent from './DataDisplayComponents/ModalComponent';
import DrawerComponent from './DataDisplayComponents/DrawerComponent';
import CollapseComponent from './DataDisplayComponents/CollapseComponent';
import AvatarComponent from './DataDisplayComponents/AvatarComponent';
import MessageComponent from './FeedbackComponents/MessageComponent';
import NotificationComponent from './FeedbackComponents/NotificaionComponent';
import SpinComponent from './FeedbackComponents/SpinComponent';
import ProgressComponent from './FeedbackComponents/ProgressComponent';
import SkeletonComponent from './FeedbackComponents/SkeletonComponent';
import Dummy from './JestExamples/Dummy';
import DomElement from './JestExamples/DomElements';
import Snapshot from './JestExamples/Snapshot';
import TestEvents from './JestExamples/TestEvents';
import TestAsync from './JestExamples/TestAsync';
import './App.css';
import TreeComponent from './AdvanceComponents/TreeComponent';
import CarouselComponent from './AdvanceComponents/CarouselComponent';
import TabsComponent from './AdvanceComponents/TabsComponent';
import TimelineComponent from './AdvanceComponents/TimelineComponent';
import InputComponent from './DataEntryComponents/InputComponent';
import CheckboxComponent from './DataEntryComponents/CheckboxComponent';
import RadioComponent from './DataEntryComponents/RadioComponent';
import SelectComponent from './DataEntryComponents/SelectComponent';
import DatePickerComponent from './DataEntryComponents/DatePickerComponent';
import FormComponent from './DataEntryComponents/FormComponent';
import { HomeOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;


function App() {

	const { token : { colorBgContainer } } = theme.useToken(); 
	const location = useLocation();
	const { pathname } = location;
	const segments = pathname.split('/');
	console.log("segments => ",segments);
	let link = '';
	const breadCrumbLink = segments?.map((segment, i)=>{
		if(segment === ''){
			link += 'Dashboard';
		}else{
			link += `/${segment.replace(/^./, segment[0].toUpperCase())}`;
		}
		return link;
	})
	console.log("link => ",link)
	
	return (
		
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sidebar/>
			<Layout>
				<Header
					style={{
						padding: '15px',
						background: colorBgContainer,
					}} 
				>
					<Headerbar />
				</Header>
			
				<Content
					style={{
					margin: '0 16px',
					}}
				>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
						{segments?.map((segment, i )=>(
							<Breadcrumb.Item>{(segment === '' ) ? 'Dashboard' : segment.replace(/^./, segment[0].toUpperCase())}</Breadcrumb.Item>
						))}
						{/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: '90%',
							background: colorBgContainer,
							borderRadius: 10,
						}}
					>
						<Routes>
							{/* Dashboard Routes */}
							<Route exact path='/' Component={DashBoard}></Route>
							
							{/* General Component Routes */}
							<Route exact path='/general/button' Component={ButtonComponent}></Route>
							<Route exact path='/general/float-button' Component={FloatButtonComponent}></Route>
							<Route exact path='/general/typography' Component={TypographyComponent}></Route>
							
							{/* Layout Component Routes */}
							<Route exact path='/layout/divider' Component={DividerComponent}></Route>
							<Route exact path='/layout/flex' Component={FlexComponent}></Route>
							<Route exact path='/layout/grid' Component={GridComponent}></Route>
							<Route exact path='/layout/layout' Component={LayoutComponent}></Route>
							<Route exact path='/layout/space' Component={SpaceComponent}></Route>
							
							{/* Navigation Components Routes */}
							<Route exact path='/navigation/anchor' Component={AnchorComponent}></Route>
							<Route exact path='/navigation/breadcrumb' Component={BreadcrumbComponent}></Route>
							<Route exact path='/navigation/dropdown' Component={DropdownComponent}></Route>
							<Route exact path='/navigation/menu' Component={MenuComponent}></Route>
							
							{/* Data Entry Components Routes */}
							<Route exact path='/dataentry/input' Component={InputComponent}></Route>														
							<Route exact path='/dataentry/checkbox' Component={CheckboxComponent}></Route>														
							<Route exact path='/dataentry/radio' Component={RadioComponent}></Route>														
							<Route exact path='/dataentry/select' Component={SelectComponent}></Route>													
							<Route exact path='/dataentry/datepicker' Component={DatePickerComponent}></Route>		  																	
							<Route exact path='/dataentry/form' Component={FormComponent}></Route>

							{/* Data Display Components Routes */}
							<Route exact path='/datadisplay/card' Component={CardComponent}></Route>
							<Route exact path='/datadisplay/list' Component={ListComponent}></Route>
							<Route exact path='/datadisplay/table' Component={TableComponent}></Route>
							<Route exact path='/datadisplay/tooltip' Component={TooltipComponent}></Route>
							<Route exact path='/datadisplay/popover' Component={PopoverComponent}></Route>
							<Route exact path='/datadisplay/modal' Component={ModalComponent}></Route>
							<Route exact path='/datadisplay/drawer' Component={DrawerComponent}></Route>
							<Route exact path='/datadisplay/collapse' Component={CollapseComponent}></Route>
							<Route exact path='/datadisplay/avatar' Component={AvatarComponent}></Route>

							{/* Data Feedback Components Routes */}
							<Route exact path='/feedback/message' Component={MessageComponent}></Route>
							<Route exact path='/feedback/notification' Component={NotificationComponent}></Route>
							<Route exact path='/feedback/spin' Component={SpinComponent}></Route>
							<Route exact path='/feedback/progress' Component={ProgressComponent}></Route>
							<Route exact path='/feedback/skeleton' Component={SkeletonComponent}></Route>	

							{/* Advance Components Routes */}
							<Route exact path='/advance/tree' Component={TreeComponent}></Route>			
							<Route exact path='/advance/carousel' Component={CarouselComponent}></Route>									
							<Route exact path='/advance/steps' Component={StepsComponent}></Route>
							<Route exact path='/advance/tabs' Component={TabsComponent}></Route>								
							<Route exact path='/advance/timeline' Component={TimelineComponent}></Route>	

							{/* Jest Routes */}
							<Route exact path='/jest/dummy' Component={Dummy}></Route>
							<Route exact path='/jest/dom-element' Component={DomElement}></Route>						
							<Route exact path='/jest/snapshot' Component={Snapshot}></Route>							
							<Route exact path='/jest/async-test' Component={TestAsync}></Route>					
							<Route exact path='/jest/event-test' Component={TestEvents}></Route>					
						</Routes>
				
				</div>
			</Content>
			<Footer
				style={{
				textAlign: 'center',
				padding:'15px'
				}}
			>
				Ant Design & React Pro ©{new Date().getFullYear()} Created by Jyoti
			</Footer>
			</Layout>
		</Layout>
		
	);
}

export default App;
