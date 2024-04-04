import { CarryOutOutlined } from "@ant-design/icons";
import { Divider, Flex, Space, Tree, Typography } from "antd";
import ForwardDirectoryTree from "antd/es/tree/DirectoryTree";

const TreeComponent = ()=>{
    const data = [
        {
            title: 'Component',
            key: '0-0',
            children: [
                {
                    title: 'General',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                        {
                            title: 'Button',
                            key: '0-0-0-0',
                            disableCheckbox: true,
                        },
                        {
                            title: 'FloatButton',
                            key: '0-0-0-1',
                        },
                    ],
                },
                {
                    title: 'Data Display',
                    key: '0-0-1',
                    children: [
                        {
                            title: (<span> Card</span>),
                            key: '0-0-1-0',
                        },
                        {
                            title: (<span> List</span>),
                            key: '0-0-1-1',
                        },
                        {
                            title: (<span> Tooltip</span>),
                            key: '0-0-1-2',
                        },
                    ],
                },
            ],
        },
    ];
    
    const treeData = [
        {
            title: 'Common Components',
            key: '0-0',
            children: [
                {
                    title: 'Layout.js',
                    key: '0-0-0',
                    isLeaf: true,
                },
                {
                    title: 'Header.js',
                    key: '0-0-1',
                    isLeaf: true,
                },
                {
                    title: 'Footer.js',
                    key: '0-0-2',
                    isLeaf: true,
                },
                {
                    title: 'Content.js',
                    key: '0-0-3',
                    isLeaf: true,
                },
            ],
        },
        {
            title: 'General Components',
            key: '0-1',
            children: [
                {
                    title: 'Button.js',
                    key: '0-1-0',
                    isLeaf: true,
                },
                {
                    title: 'FloatButton.js',
                    key: '0-1-1',
                    isLeaf: true,
                },
            ],
        },
    ];

    const lineTreeData = [
        {
            title: 'Components',
            key: '0-0',
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: 'General',
                    key: '0-0-0',
                    icon: <CarryOutOutlined />,
                    children: [
                        {
                            title: 'Button',
                            key: '0-0-0-0',
                            icon: <CarryOutOutlined />,
                        },
                        {
                            title: 'Typography',
                            key: '0-0-0-1',
                            icon: <CarryOutOutlined />,
                        },
                        {
                            title: 'Float Button',
                            key: '0-0-0-2',
                            icon: <CarryOutOutlined />,
                        },
                    ],
                },
                {
                    title: 'Display',
                    key: '0-0-1',
                    icon: <CarryOutOutlined />,
                    children: [
                        {
                            title: 'Card',
                            key: '0-0-1-0',
                            icon: <CarryOutOutlined />,
                        },
                    ],
                },
                {
                    title: 'Data Entry',
                    key: '0-0-2',
                    icon: <CarryOutOutlined />,
                    children: [
                        {
                            title: 'InputBox',
                            key: '0-0-2-0',
                            icon: <CarryOutOutlined />,
                        },
                        {
                            title: 'CheckBox',
                            key: '0-0-2-1',
                            icon: <CarryOutOutlined />,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Jest',
            key: '0-1',
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: 'Functions',
                    key: '0-1-0',
                    icon: <CarryOutOutlined />,
                    children: [
                        {
                            title: 'GetByRole',
                            key: '0-1-0-0',
                            icon: <CarryOutOutlined />,
                        },
                        {
                            title: 'GetByLabel',
                            key: '0-1-0-1',
                            icon: <CarryOutOutlined />,
                        },
                    ],
                },
            ],
        },
    ];

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Tree </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Basic Tree </Divider>
                <Space wrap size={16}>
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={()=>{}}
                    onCheck={()=>{}}
                    treeData={data}
                />
                </Space>
                <Divider orientation="left" orientationMargin={0}>Directory Tree </Divider>
                <Space wrap size={16}>
                    <ForwardDirectoryTree
                        multiple
                        defaultExpandAll
                        onSelect={()=>{}}
                        onExpand={()=>{}}
                        treeData={treeData}
                    />
                </Space> 
                <Divider orientation="left" orientationMargin={0}>Line Tree </Divider>
                <Space wrap size={16}>
                    <Tree
                        showLine={{showLeafIcon:true}}
                        showIcon={false}
                        defaultExpandedKeys={['0-0-0']}
                        onSelect={()=>{}}
                        treeData={lineTreeData}
                    />
                </Space>               
            </Space>              
        </Flex>
    )
}

export default TreeComponent;