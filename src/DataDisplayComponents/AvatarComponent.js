import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Divider, Flex, Space, Tooltip, Typography } from "antd";

const AvatarComponent = ()=>{
    const url = '../logo192.png';

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Avatar </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Avatar Size : Default | Large | Small & Shape : Circle |Square </Divider>
                <Space wrap size={16}>
                    <Avatar size={64} icon={<UserOutlined />} />
                    <Avatar size='large' icon={<UserOutlined />} />
                    <Avatar icon={<UserOutlined />} />
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Avatar size={14} icon={<UserOutlined />} />
                </Space>
                <Space wrap size={16}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                    <Avatar shape="square" icon={<UserOutlined />} />
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                    <Avatar shape="square" size={14} icon={<UserOutlined />} />
                </Space>
                <Divider orientation="left" orientationMargin={0}>Avatar Type : Image | Icon | Letter  </Divider>
                <Space size={16} wrap>
                    <Avatar icon={<UserOutlined />} />
                    <Avatar>U</Avatar>
                    <Avatar size={40} style={{
                            backgroundColor: '#fde3cf',
                            color: 'purple',
                        }}>JYOTI</Avatar>
                    <Avatar src={url} />
                    <Avatar src={<img src={url} alt="avatar" />} />
                    <Avatar
                        style={{
                            backgroundColor: '#fde3cf',
                            color: '#f56a00',
                        }}
                    > U </Avatar>
                    <Avatar
                        style={{
                            backgroundColor: '#87d068',
                        }}
                        icon={<UserOutlined />}
                    />
                </Space>
                <Divider orientation="left" orientationMargin={0}>Avatar with Badge  </Divider>
                <Space size={24}>
                    <Badge count={1}>
                        <Avatar shape="square" style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
                    </Badge>
                    <Badge dot>
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </Space>\
                <Divider orientation="left" orientationMargin={0}>Avatar Group  </Divider>
                <Avatar.Group>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <a href="https://ant.design">
                        <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                        >
                        K
                        </Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                            backgroundColor: '#1677ff',
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
                <Divider />
                <Avatar.Group 
                    maxCount={2}
                    maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                >
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <a href="https://ant.design">
                        <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                        >
                        K
                        </Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                            backgroundColor: '#1677ff',
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
                <Divider />
                <Avatar.Group size='large'>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <a href="https://ant.design">
                        <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                        >
                        K
                        </Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                            backgroundColor: '#1677ff',
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
            </Space> 
             
        </Flex>
    )
}

export default AvatarComponent;