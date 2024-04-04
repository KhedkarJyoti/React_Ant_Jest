import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Divider, Dropdown, Flex, Space, Typography} from "antd";
import React from "react";

const DropdownComponent = () =>{
    const items = [
        {
            key:'1',
            label: 'Menu Item-1'
        },
        {
            key:'2',
            label: 'Menu Item-2',
            disabled:true
        },
        {
            key:'3',
            label: 'Menu Item-3',
            danger:true
        },
        {
            key: '4',
            label: 'sub menu',
            children: [
                {
                    key: '2-1',
                    label: '3rd menu item',
                },
                {
                    key: '2-2',
                    label: '4th menu item',
                },
            ],
        }
    ];

    

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Dropdown Menu</Typography.Title>                
            </Flex>
            <Flex gap={'large'} wrap >
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Basic Hover Dropdown Menu </Divider>
                    <Flex gap={'middle'}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e)=>e.preventDefault()}>
                                <Space>
                                    Hover Dropdown
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Flex>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Dropdown Placement </Divider>
                    <Flex gap={'middle'} vertical>
                        <Dropdown
                            menu={{ items }}
                            placement='topLeft'
                        >
                            <Button block>Top-Left</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='top'
                        >
                            <Button block>Top</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='topRight'
                        >
                            <Button block>Top-Right</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottomLeft'
                        >
                            <Button block>Bottom-Left</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottom'
                        >
                            <Button block>Bottom</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottomRight'
                        >
                            <Button block>Bottom-Right</Button>
                        </Dropdown>
                    </Flex>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Dropdown Placement with Arrow </Divider>
                    <Flex gap={'middle'} vertical>
                        <Dropdown
                            menu={{ items }}
                            placement='topLeft'
                            arrow
                        >
                            <Button block>Top-Left</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='top'
                            arrow
                        >
                            <Button block>Top</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='topRight'
                            arrow
                        >
                            <Button block>Top-Right</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottomLeft'
                            arrow
                        >
                            <Button block>Bottom-Left</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottom'
                            arrow
                        >
                            <Button block>Bottom</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottomRight'
                            arrow
                        >
                            <Button block>Bottom-Right</Button>
                        </Dropdown>
                    </Flex>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Dropdown Placement with Center Arrow</Divider>
                    <Flex gap={'middle'} vertical>
                        <Dropdown
                            menu={{ items }}
                            placement='topLeft'
                            arrow={{pointAtCenter:true}}
                        >
                            <Button block>Top-Left</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='top'
                            arrow={{pointAtCenter:true}}
                        >
                            <Button block>Top</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='topRight'
                            arrow={{pointAtCenter:true}}
                        >
                            <Button block>Top-Right</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottomLeft'
                            arrow={{pointAtCenter:true}}
                        >
                            <Button block>Bottom-Left</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottom'
                            arrow={{pointAtCenter:true}}
                        >
                            <Button block>Bottom</Button>
                        </Dropdown>
                        <Dropdown
                            menu={{ items }}
                            placement='bottomRight'
                            arrow={{pointAtCenter:true}}
                        >
                            <Button block>Bottom-Right</Button>
                        </Dropdown>
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap={'large'} wrap >
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Disabled Menu Item</Divider>
                    <Dropdown
                            menu={{
                                items
                            }}
                        >
                            <a onClick={(e)=>e.preventDefault()}>
                                <Space>
                                    Hover Dropdown
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Dropdown Buttons</Divider>
                    <Flex gap={'middle'} vertical>
                        <Dropdown.Button
                            menu={{ items }}                            
                        >
                            Dropdown Button
                        </Dropdown.Button>
                        <Dropdown.Button
                            menu={{ items }}
                            placement='top'
                            primary
                        >
                            Dropdown Button
                        </Dropdown.Button>
                        <Dropdown.Button
                            menu={{ items }}
                            disabled
                        >
                            Dropdown Button
                        </Dropdown.Button>
                        <Dropdown.Button
                            menu={{ items }}
                            danger
                        >
                            Dropdown Button
                        </Dropdown.Button>
                        <Dropdown.Button
                            menu={{ items }}
                            icon={<DownOutlined />}
                        >
                            Dropdown Button
                        </Dropdown.Button>
                        <Dropdown.Button
                            menu={{ items }}
                            icon={<LoadingOutlined />}
                        >
                            Dropdown Button
                        </Dropdown.Button>
                    </Flex>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Cascading Menu</Divider>
                    <Dropdown
                            menu={{
                                items : items
                            }}
                        >
                            <a onClick={(e)=>e.preventDefault()}>
                                <Space>
                                    Cascading Dropdown
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Context Menu</Divider>
                    <Dropdown
                            menu={{
                                items
                            }}
                            trigger={['contextMenu']}
                        >
                            <div style={{
                                    color: '#fff',
                                    background: '#000',
                                    width:300,
                                    height: 150,
                                    textAlign: 'center',
                                    lineHeight: '150px',
                                }}
                            >
                                Right Click on box
                            </div>
                        </Dropdown>
                </Flex>
            </Flex>
            <Flex gap={'large'} wrap >
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Selectable Menu</Divider>
                    <Dropdown
                            menu={{
                                items,
                                selectable:true,
                                defaultSelectedKeys:['1']
                            }}
                            
                        >
                            <a onClick={(e)=>e.preventDefault()}>
                                <Space>
                                    Selectable Dropdown
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DropdownComponent;