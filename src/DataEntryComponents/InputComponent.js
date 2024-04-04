import React from "react";
import { AudioOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Divider, Flex, Input, Select, Space, Typography } from "antd";
const {Search, TextArea, Password} = Input;

const InputComponent = () =>{
    const selectBefore = (
        <Select defaultValue="http://">
            <Select.Option value="http://">http://</Select.Option>
            <Select.Option value="https://">https://</Select.Option>
        </Select>
    );
    const selectAfter = (
        <Select defaultValue=".com">
            <Select.Option value=".com">.com</Select.Option>
            <Select.Option value=".net">.net</Select.Option>
            <Select.Option value=".org">.org</Select.Option>
        </Select>
    );

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Input </Typography.Title>                
            </Flex>
            <Space gap={15} align="start" wrap >
                <Space direction='vertical'>                
                    <Divider orientation="left" orientationMargin={0}> Basic Input </Divider>
                    <Input placeholder="User Name" />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Variant </Divider>
                    <Input placeholder="Outlined input box.." />
                    <Input placeholder="Filled input box.." variant="filled" />
                    <Input placeholder="Borderless input box.." variant="borderless" />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Size </Divider>
                    <Input placeholder="Small input box.." size='small' />
                    <Input placeholder="Medium input box.." size='middle' />
                    <Input placeholder="Large input box.." size='large' />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Pre & Post </Divider>
                    <Input addonBefore="http://" addonAfter=".com" defaultValue="www.google" />
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="www.google" />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Compact Input + Button </Divider>
                    <Space.Compact
                        style={{
                            width: '100%',
                        }}
                        >
                        <Input defaultValue="User Name" />
                        <Button type="primary">Submit</Button>
                    </Space.Compact>
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Search Input </Divider>
                    <Search placeholder="Search here..." />
                    <Search placeholder="Search here..." allowClear />
                    <Search placeholder="Search here..." enterButton />
                    <Search
                        placeholder="Search here..."
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                    <Search
                        placeholder="Search here..."
                        enterButton="Search"
                        size="large"
                        suffix={
                            <AudioOutlined
                                style={{
                                fontSize: 16,
                                color: '#1677ff',
                                }}
                            />
                        }
                    />
                    <Search placeholder="Search here..." enterButton="Search" size="middle" loading />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> TextArea Input </Divider>
                    <TextArea rows={2} />
                    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
                </Space>
                <Space  direction='vertical' gap={15}>
                    <Divider orientation="left" orientationMargin={0}> Password Input </Divider>
                    <Password
                        placeholder="Password..."
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>
      
            </Space>
            
        </Flex>
    )
}

export default InputComponent;