import React, { useState } from "react";
import { BorderBottomOutlined, BorderTopOutlined, LoadingOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, SmileOutlined } from "@ant-design/icons";
import { Alert, Button, Divider, Flex, Form, Progress, Radio, Skeleton, Slider, Space, Spin, Switch, Typography, message, notification } from "antd";
import { green, red } from '@ant-design/colors';

const SkeletonComponent = ()=>{
    const [active, setActive] = useState(true);
    const [sizeValue, setSizeValue] = useState('small');
    const [shapeValue, setShapeValue] = useState('circle');
    
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Skeleton </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}> Basic Skeleton </Divider>
                <Skeleton />
                <Divider orientation="left" orientationMargin={0}> Skeleton with Avatar </Divider>
                <Skeleton
                    avatar
                    paragraph={{
                    rows: 4,
                    }}
                />
                <Divider orientation="left" orientationMargin={0}> Animation Skeleton </Divider>
                <Form.Item label="Active">
                    <Switch checked={active} onChange={()=>setActive(!active)} />
                </Form.Item>
                <Skeleton active={active} />
                <Divider orientation="left" orientationMargin={0}> Skeleton Size : Small |Middle | Large </Divider>
                <Radio.Group value={sizeValue} onChange={(e) =>{
                        setSizeValue(e.target.value)
                }}>
                    <Radio value="small">Small</Radio>
                    <Radio value="middle">Middle</Radio>
                    <Radio value="large">Large</Radio>
                </Radio.Group>
                <Skeleton.Button size={sizeValue} />
                <Skeleton.Input size={sizeValue} />
                <Skeleton.Avatar size={sizeValue} />
                <Divider orientation="left" orientationMargin={0}> Skeleton Avatar Shapes : Circle | Square </Divider>
                <Radio.Group value={shapeValue} onChange={(e) =>{
                        setShapeValue(e.target.value)
                }}>
                    <Radio value="circle">Circle</Radio>
                    <Radio value="square">Square</Radio>
                </Radio.Group> 
                <Skeleton.Avatar shape={shapeValue} />               
            </Space> 
        </Flex>
    )
}

export default SkeletonComponent;