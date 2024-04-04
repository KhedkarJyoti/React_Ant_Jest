import { BorderBottomOutlined, BorderTopOutlined, LoadingOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, SmileOutlined } from "@ant-design/icons";
import { Alert, Button, Divider, Flex, Space, Spin, Typography, message, notification } from "antd";

const SpinComponent = ()=>{
    const [notificationApi, contextHolder] = notification.useNotification();
    
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Spin </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}> Basic Spin </Divider>
                <Spin />
                <Divider orientation="left" orientationMargin={0}> Spin Size : Small | Middle | Large </Divider>
                <Space gap={60} direction='horizontal'>
                    <Spin size="small" />
                    <Spin size="middle" />
                    <Spin size="large" />
                </Space>  
                <Divider orientation="left" orientationMargin={0}> Spin Inside Container </Divider>
                <div style={{
                    margin: '20px 0',
                    marginBottom: '20px',
                    padding: '30px 50px',
                    textAlign: 'center',
                    background: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '4px'
                }}>
                    <Spin />
                </div> 
                <Divider orientation="left" orientationMargin={0}> Spin with Embedded Message </Divider>                
                <Spin spinning={true}>
                    <Alert
                    type="info"
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    />
                </Spin>
                <Divider orientation="left" orientationMargin={0}> Custom Spin Indicator </Divider>                
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
            </Space> 
        </Flex>
    )
}

export default SpinComponent;