import { BorderBottomOutlined, BorderTopOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Space, Typography, message, notification } from "antd";

const NotificationComponent = ()=>{
    const [notificationApi, contextHolder] = notification.useNotification();
    
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Notification </Typography.Title>                
            </Flex>
            <Space gap='large' direction='horizontal' wrap>
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Basic Notification </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        notificationApi.open({
                            message: 'Basic Notification',
                            description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                            duration: 0,
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Notification with Custom close Buttons </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        const key = `open${Date.now()}`;
                        const btn = (
                            <Space>
                                <Button type="link" size="small" onClick={() => notificationApi.destroy()}>
                                    Destroy All
                                </Button>
                                <Button type="primary" size="small" onClick={() => notificationApi.destroy(key)}>
                                    Confirm
                                </Button>
                            </Space>
                        );
                        notificationApi.open({
                            message: 'Custom Notification with Close Buttons',
                            description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                            btn,
                            key,
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space>
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Notification with Custom Icon  </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        notificationApi.open({
                            message: 'Notification with Smiley',
                            description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space>  
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Top Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Top Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'top'
                            });
                        }}
                        icon={<BorderTopOutlined />}
                    >
                        Click Here..
                    </Button>
                </Space>   
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Bottom Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Bottom Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'bottom'
                            });
                        }}
                        icon={<BorderBottomOutlined />}
                    >
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Top Left Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Top Left Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'topLeft'
                            });
                        }}
                        icon={<RadiusUpleftOutlined />}
                    >
                        Click Here..
                    </Button>
                </Space>   
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Top Right Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Top Right Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'topRight'
                            });
                        }}
                        icon={<RadiusUprightOutlined />}
                    >
                        Click Here..
                    </Button>
                </Space>  
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Bottom Left Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Bottom Left Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'bottomLeft'
                            });
                        }}
                        icon={<RadiusBottomleftOutlined />}
                    >
                        Click Here..
                    </Button>
                </Space>  
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Bottom Right Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Bottom Right Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'bottomRight'
                            });
                        }}
                        icon={<RadiusBottomrightOutlined />}
                    >
                        Click Here..
                    </Button>
                </Space>  
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Info Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.info({
                                message: 'Info Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'top'
                            });
                        }}
                    >
                        Click Here..
                    </Button>
                </Space>  
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Success Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.success({
                                message: 'Success Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'top'
                            });
                        }}
                    >
                        Click Here..
                    </Button>
                </Space>  
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Warning Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.warning({
                                message: 'Warning Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'top'
                            });
                        }}
                    >
                        Click Here..
                    </Button>
                </Space>   
                <Space gap='large' direction='vertical' align='center'>
                    <Divider orientation="left" orientationMargin={0}> Error Notification  </Divider>
                    {contextHolder}
                    <Button type="primary" 
                        onClick={()=>{
                            notificationApi.error({
                                message: 'Error Notification',
                                description: 'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
                                placement:'top'
                            });
                        }}
                    >
                        Click Here..
                    </Button>
                </Space>       
            </Space>              
        </Flex>
    )
}

export default NotificationComponent;