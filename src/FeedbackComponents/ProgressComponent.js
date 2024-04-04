import React, { useState } from "react";
import { BorderBottomOutlined, BorderTopOutlined, LoadingOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, SmileOutlined } from "@ant-design/icons";
import { Alert, Button, Divider, Flex, Progress, Slider, Space, Spin, Typography, message, notification } from "antd";
import { green, red } from '@ant-design/colors';

const ProgressComponent = ()=>{
    const [stepsCount, setStepsCount] = useState(5);
    const [stepsGap, setStepsGap] = useState(7);
    
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Progress </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}> Progress Bar </Divider>
                <Flex gap="small" vertical>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </Flex>
                <Divider orientation="left" orientationMargin={0}> Mini Progress Bar </Divider>
                <Flex vertical gap="small" style={{ width: 180 }}>
                    <Progress percent={30} size="small" />
                    <Progress percent={50} size="small" status="active" />
                    <Progress percent={70} size="small" status="exception" />
                    <Progress percent={100} size="small" />
                </Flex>
                <Divider orientation="left" orientationMargin={0}> Circular Progress Bar </Divider>
                <Flex gap="small" wrap="wrap">
                    <Progress type="circle" percent={75} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                </Flex> 
                <Divider orientation="left" orientationMargin={0}> Mini Circular Progress Bar </Divider>
                <Flex wrap="wrap" gap="small">
                    <Progress type="circle" percent={30} size={80} />
                    <Progress type="circle" percent={70} size={80} status="exception" />
                    <Progress type="circle" percent={100} size={80} />
                </Flex>
                <Divider orientation="left" orientationMargin={0}> Progress Bar with Steps </Divider>
                <Flex gap="small" vertical>
                    <Progress percent={50} steps={3} />
                    <Progress percent={30} steps={5} />
                    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
                    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
                </Flex>
                <Divider orientation="left" orientationMargin={0}> Circular Progress Bar with steps </Divider>                
                <Space direction='horizontal' style={{width:'100%'}}>
                    <Space direction='vertical' style={{width:300}}>
                        <Typography.Title level={5}>Steps count:</Typography.Title>
                        <Slider min={2} max={10} value={stepsCount} onChange={(e)=>setStepsCount(e)} />
                    </Space>                
                    <Space direction='vertical' style={{width:300}}>
                        <Typography.Title level={5}>Steps gap:</Typography.Title>
                        <Slider step={4} min={0} max={40} value={stepsGap} onChange={(e)=>setStepsGap(e)} />
                    </Space>
                </Space>
                <Flex
                    wrap="wrap"
                    gap="middle"
                    style={{
                        marginTop: 16,
                    }}
                >
                    <Progress
                        type="circle"
                        percent={100}
                        steps={{
                            count: stepsCount,
                            gap: stepsGap,
                        }}
                        trailColor="rgba(0, 0, 0, 0.06)"
                        strokeWidth={6}
                    />
                </Flex>
            </Space> 
        </Flex>
    )
}

export default ProgressComponent;