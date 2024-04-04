
import { useState } from "react";
import { Button, Divider, Flex, Radio, Space, Timeline, Typography } from "antd";
import { ClockCircleOutlined, DesktopOutlined, FileDoneOutlined, PlayCircleOutlined, RightCircleOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

const TimelineComponent = ()=>{   
    const [reverse, setReverse] = useState(false);
    const [mode, setMode] = useState('left');
    const [labelMode, setLabelMode] = useState('left');

    const timelineData1 = [
        {
            color:'green',
            children: 'Solicitation of Project Ideas 01-01-2024',
        },
        {
            color:'blue',
            children: 'Submission of Project Ideas 15-01-2024',
        },
        {
            color:'blue',
            children: 'Presentation of Project Proposal 30-01-2024',
        },
        {
            color:'blue',
            children: 'Project Assignment 01-02-2024',
        },        
        {
            color:'blue',
            children: 'Project Research 15-02-2024',
        },      
        {
            color:'blue',
            children: 'Project Deadline 15-03-2024',
        },      
        {
            color:'red',
            children: 'Project Final Submission 31-03-2024',
        },
    ] 

    const timelineData2 = [
        {
            color:'green',
            label:'01-01-2024',
            children: 'Solicitation of Project Ideas',
        },
        {
            color:'blue',
            label:'15-01-2024',
            children: 'Submission of Project Ideas ',
        },
        {
            color:'blue',
            label:'30-01-2024',
            children: 'Presentation of Project Proposal ',
        },
        {
            color:'blue',
            label:'01-02-2024',
            children: 'Project Assignment ',
        },        
        {
            color:'blue',
            label:'15-02-2024',
            children: 'Project Research ',
        },      
        {
            color:'blue',
            label:'15-03-2024',
            children: 'Project Deadline ',
        },      
        {
            color:'red',
            label:'31-03-2024',
            children: 'Project Final Submission ',
        },
    ] 

    const timelineData3 = [
        {
            color:'Yellow',
            dot:<RightCircleOutlined />,
            children: 'Solicitation of Project Ideas 01-01-2024',
        },
        {
            color:'blue',
            dot:<FileDoneOutlined />,
            children: 'Submission of Project Ideas 15-01-2024',
        },
        {
            color:'purple',
            dot:<DesktopOutlined />,
            children: 'Presentation of Project Proposal 30-01-2024',
        },
        {
            color:'orange',
            dot:<PlayCircleOutlined />,
            children: 'Project Assignment 01-02-2024',
        },        
        {
            color:'magenta',
            dot:<UserOutlined />,
            children: 'Project Research 15-02-2024',
        },      
        {
            color:'red',
            dot:<ClockCircleOutlined />,
            children: 'Project Deadline 15-03-2024',
        },      
        {
            color:'Green',
            dot:<SmileOutlined />,
            children: 'Project Final Submission 31-03-2024',
        },
    ] 

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Timeline </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Basic Timeline with color property </Divider>                
                <Button type='primary' onClick={()=> setReverse(!reverse)} style={{marginBottom:15}}>Resverse Timeline...</Button>
                <Timeline
                    pending="Recording..."
                    reverse={reverse}
                    items={timelineData1} 
                />
                <Divider orientation="left" orientationMargin={0}>Timeline Modes : Left | Right | Alternate </Divider>
                <Radio.Group
                    onChange={(e)=>{setMode(e.target.value); }}
                    value={mode}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>                    
                    <Radio.Button value="alternate">Alternate</Radio.Button>
                </Radio.Group>
                <Timeline
                    mode={mode}
                    items={timelineData1} 
                />                
                <Divider orientation="left" orientationMargin={0}>Timeline Modes with label : Left | Right | Alternate </Divider>
                <Radio.Group
                    onChange={(e)=>{setLabelMode(e.target.value); }}
                    value={labelMode}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>                    
                    <Radio.Button value="alternate">Alternate</Radio.Button>
                </Radio.Group>
                <Timeline
                    mode={labelMode}
                    items={timelineData2} 
                />  
                <Divider orientation="left" orientationMargin={0}>Timeline with custom Icons </Divider>
                <Timeline
                    mode={'alternate'}
                    items={timelineData3} 
                />            
            </Space>              
        </Flex>
    )
}

export default TimelineComponent;