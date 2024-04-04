import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Divider, Flex, Space, Table, Tag, Typography } from "antd";
import React from "react";

const TableComponent = () =>{

    const users = [
        {
            id: 1,
            name: 'Kevin Peter',
            age: 20,
            address: 'London Streets',
            tags: ['SuperUser','Developer']
        },
        {
            id: 2,
            name: 'Mike Doole',
            age: 22,
            address: 'New York, Lake Park',
            tags: ['Developer']
        },
        {
            id: 3,
            name: 'Noah Harari',
            age: 30,
            address: 'Sydney, Park Streets',
            tags: ['TL','Developer']
        },
        {
            id: 4,
            name: 'David Backhum',
            age: 25,
            address: 'London Streets',
            tags: ['Manager','Developer']
        },
        {
            id: 5,
            name: 'Ron Peter',
            age: 23,
            address: 'London Streets',
            tags: ['Senior Developer']
        },
        {
            id: 6,
            name: 'Kevin Newport',
            age: 40,
            address: 'London Streets',
            tags: ['SuperUser','HR']
        },
        {
            id: 7,
            name: 'Yuval Hill',
            age: 28,
            address: 'London Streets',
            tags: ['HR','Developer']
        },
        {
            id: 8,
            name: 'John Peter',
            age: 26,
            address: 'London Streets',
            tags: ['SuperUser','Business Analyst']
        },
        {
            id: 9,
            name: 'Brayn Peter',
            age: 20,
            address: 'London Streets',
            tags: ['Admin','BA']
        }        
    ]

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          dataIndex: 'tags',
          key: 'tags',
          render: (_, {tags})=>(
            <>
                {tags.map((tag)=>{
                    let tagcolor = tag.length > 5 ? 'geekblue' : 'green';

                    return(
                        <Tag color={tagcolor} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })

                }
            </>
          )
        },
        {
          title: 'Tags',
          dataIndex: 'tags',
          key: 'tags',
          render: (_, {record})=>(
            <Space size='middle'>
                <a><EditOutlined /></a>
                <a><DeleteOutlined style={{color:'red'}} /></a>
            </Space>
          )
        },
    ];

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Table </Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Table </Divider>
            <Table 
                dataSource={users} 
                columns={columns} 
                pagination={{
                    pageSize:5
                }}
            />;
        </Flex>
    )
}

export default TableComponent;