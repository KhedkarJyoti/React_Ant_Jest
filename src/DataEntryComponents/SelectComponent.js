import React from "react";
import {Divider, Flex, Select, Space, Typography } from "antd";

const SelectComponent = () =>{

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Select </Typography.Title>                
            </Flex>
            <Space gap='30px' align="start" wrap >
                <Space direction='vertical' gap={30}>                
                    <Divider orientation="left" orientationMargin={0}> Basic Select </Divider>

                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}
                        onChange={()=>{}}
                        options={[
                            { value: 'Priya', label: 'Priya' },
                            { value: 'Sonal', label: 'Sonal' },
                            { value: 'Sneha', label: 'Sneha' },
                            { value: 'Sana', label: 'Sana', disabled: true },
                        ]}
                    />
                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}
                        disabled
                        options={[{ value: 'Jyoti', label: 'Jyoti' }]}
                    />
                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}
                        loading
                        options={[{ value: 'Jyoti', label: 'Jyoti' }]}
                    />
                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}
                        allowClear
                        options={[{ value: 'Jyoti', label: 'Jyoti' }]}
                    />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Select with Search </Divider>
                    <Select
                        showSearch
                        placeholder="Select"
                        optionFilterProp="children"
                        onChange={()=>{}}
                        onSearch={()=>{}}
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        options={[
                            { value: 'Priya', label: 'Priya' },
                            { value: 'Sonal', label: 'Sonal' },
                            { value: 'Sneha', label: 'Sneha' },
                            { value: 'Sana', label: 'Sana', disabled: true },
                        ]}
                        style={{ width: 200 }}
                    />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> MultiSelect with Remove Option </Divider>
                    {/* <Radio.Group
                        onChange={(e)=>{setRadioDirection(e.target.value); }}
                        value={radioDirection}
                        style={{
                            marginBottom: 8,
                        }}
                    >
                        <Radio.Button value="horizotal">Horizotal</Radio.Button>
                        <Radio.Button value="vertical">Vertical</Radio.Button>
                    </Radio.Group> */}
                    <Select
                        mode='multiple'
                        placeholder="Select"
                        onChange={()=>{}}
                        onSearch={()=>{}}
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        options={[
                            { value: 'Priya', label: 'Priya' },
                            { value: 'Sonal', label: 'Sonal' },
                            { value: 'Sneha', label: 'Sneha' },
                            { value: 'Sana', label: 'Sana', disabled: true },
                        ]}
                        style={{ width: 200 }}
                    />  
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}>Select option group </Divider>
                    <Select
                        placeholder="Select"
                        onChange={()=>{}}
                        onSearch={()=>{}}
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        options={[
                            {
                                label : <span> Developers </span>,
                                title : 'Developers',
                                options:[
                                    { value: 'Priya', label: 'Priya' },
                                    { value: 'Sonal', label: 'Sonal' },
                                ]
                            },
                            {
                                label : <span> Managers </span>,
                                title : 'Managers',
                                options:[
                                    { value: 'Sneha', label: 'Sneha' },
                                    { value: 'Sana', label: 'Sana', disabled: true },
                                ]
                            },
                        ]}
                        style={{ width: 200 }}
                    />  
                </Space>                  
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}>Select Size: Small | Middle | Large</Divider> 
                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}
                        size='small'
                        options={[{ value: 'Jyoti', label: 'Jyoti' }]}
                    />
                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}
                        size='middle'
                        options={[{ value: 'Jyoti', label: 'Jyoti' }]}
                    />
                    <Select
                        defaultValue="Jyoti"
                        style={{ width: 200 }}                        
                        size='large'
                        options={[{ value: 'Jyoti', label: 'Jyoti' }]}
                    />
                </Space>    
            </Space>            
        </Flex>
    )
}

export default SelectComponent;