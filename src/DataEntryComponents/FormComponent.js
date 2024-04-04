import React, { useState } from "react";
import { Button, Checkbox, Divider, Flex, Form, Input, Space, Typography } from "antd";
const { Password } = Input;
const { Item } = Form;

const FormComponent = () =>{

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Form </Typography.Title>                
            </Flex>
            <Space align='center'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={()=>{}}
                    onFinishFailed={()=>{}}
                    autoComplete="off"
                >
                    <Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Item>

                    <Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter your password!',
                            },
                        ]}
                    >
                        <Password />
                    </Item>
                    <Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Item>

                    <Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit"> Submit </Button>
                    </Item>
                </Form>
            </Space>            
        </Flex>
    )
}

export default FormComponent;