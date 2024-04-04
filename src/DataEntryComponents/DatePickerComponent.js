import React, { useState } from "react";
import dayjs from 'dayjs';
import { Button, DatePicker, Divider, Flex, Radio, Select, Space, Typography } from "antd";
const { RangePicker } = DatePicker;
const DatePickerComponent = () =>{
    const [size, setSize] = useState('small')

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Datepicker </Typography.Title>                
            </Flex>
            <Space gap='30px' align="start" wrap >
                <Space direction='vertical' gap={30}>                
                    <Divider orientation="left" orientationMargin={0}> Basic DatePicker </Divider>
                    <DatePicker onChange={()=>{}} />
                    <DatePicker onChange={()=>{}} picker="week" />
                    <DatePicker onChange={()=>{}} picker="month" />
                    <DatePicker onChange={()=>{}} picker="quarter" />
                    <DatePicker onChange={()=>{}} picker="year" />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> RangePicker </Divider>
                    <RangePicker />
                    <RangePicker showTime />
                    <RangePicker picker="week" />
                    <RangePicker picker="month" />
                    <RangePicker picker="quarter" />
                    <RangePicker picker="year" />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Different Date formats </Divider>
                    <DatePicker defaultValue={dayjs('2024/01/01', 'YYYY/MM/DD')} format={'YYYY/MM/DD'} />
                    <DatePicker defaultValue={dayjs('01/01/2024', 'DD/MM/YYYY')} format={'DD/MM/YYYY'} />
                    <DatePicker defaultValue={dayjs('2024/01', 'YYYY/MM')} format={'YYYY/MM'} picker="month" />
                    <RangePicker
                        defaultValue={[dayjs('2024/01/01', 'YYYY/MM/DD'), dayjs('2024/01/01', 'YYYY/MM/DD')]}
                        format={'YYYY/MM/DD'}
                    />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}>DatePicker Size : Small | Middle | Large </Divider>
                    <Radio.Group value={size} onChange={(e)=> setSize(e.target.value)}>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="middle">Middle</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                    <DatePicker size={size} />
                    <DatePicker size={size} picker="month" />
                    <RangePicker size={size} />
                    <DatePicker size={size} picker="week" />
                </Space>                  
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}>DatePicker & RangePicker variant</Divider> 
                    <Flex gap={8}>
                        <DatePicker placeholder="Outlined" />
                        <RangePicker placeholder={['Outlined', '']} />
                    </Flex>
                    <Flex gap={8}>
                        <DatePicker placeholder="Filled" variant="filled" />
                        <RangePicker placeholder={['Filled', '']} variant="filled" />
                    </Flex>
                    <Flex gap={8}>
                        <DatePicker placeholder="Borderless" variant="borderless" />
                        <RangePicker placeholder={['Borderless', '']} variant="borderless" />
                    </Flex>
                </Space>    
            </Space>            
        </Flex>
    )
}

export default DatePickerComponent;