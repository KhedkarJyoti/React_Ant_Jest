import { Button, Divider, Flex, Space, Typography, message } from "antd";

const MessageComponent = ()=>{
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.info('Hello, This is normal message...!');
    };

    const key = 'updatable'
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Message </Typography.Title>                
            </Flex>
            <Space gap='large' direction='horizontal' wrap>
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Normal Message </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={info}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Success Message </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        messageApi.open({
                            type: 'success',
                            content: 'This is a success message',
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Error Message </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        messageApi.open({
                            type: 'error',
                            content: 'This is a error message',
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Warning Message </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        messageApi.open({
                            type: 'warning',
                            content: 'This is a warning message',
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Success Message with Duration </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        messageApi.open({
                            type: 'success',
                            content: 'This is a success message with customize duration 10 s',
                            duration: 10
                        });
                    }}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Loading Message </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        messageApi.open({
                            type: 'loading',
                            content: 'Action in progress...',
                            duration: 0
                        });
                        setTimeout(messageApi.destroy, 2500);
                    }}>
                        Click Here..
                    </Button>
                </Space> 
                <Space gap='large' direction='vertical'>
                    <Divider orientation="left" orientationMargin={0}> Update Message Content </Divider>
                    {contextHolder}
                    <Button type="primary" onClick={()=>{
                        messageApi.open({
                            key,
                            type: 'loading',
                            content: 'Loading...',
                        });
                        setTimeout(() => {
                            messageApi.open({
                                key,
                                type: 'success',
                                content: 'Loaded!',
                                duration: 2,
                            });
                        }, 1000);
                    }}>
                        Click Here..
                    </Button>
                </Space> 
            </Space>              
        </Flex>
    )
}

export default MessageComponent;