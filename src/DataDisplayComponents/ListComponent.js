import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Divider, Flex, List, Space, Typography } from "antd";
import React from "react";

const ListComponent = () =>{

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );

    const data = Array.from({
        length: 18,
      }).map((_, i) => ({
        href: 'https://ant.design',
        title: `List Property ${i+1}`,
        img:'../listItem.png',
        description:
          'Basic list display, which can carry text, lists, pictures, paragraphs.',
        content:
          'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.',
      }));

    // const data = [
    //     {
    //         title : 'List Property : 1',
    //         description : 'Basic list display, which can carry text, lists, pictures, paragraphs.',
    //         img:'../listItem.png'
    //     },
    //     {
    //         title : 'List Property : 2',
    //         description : 'A list can be used to display content related to a single subject.',
    //         img:'../listItem.png'
    //     },
    //     {
    //         title : 'List Property : 3',
    //         description : 'The content can consist of multiple elements of varying type and size.',
    //         img:'../listItem.png'
    //     }        
    // ]

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Lists </Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Lists : Default / Small / Large </Divider>
            <List
                dataSource={data.slice(1,4)}
                renderItem={(item)=><List.Item>{item.description}</List.Item>}
                header={<Typography.Title level={5}>This is Default List (Header)...</Typography.Title>}
                footer={<div>This is Default List (footer)...</div>}
                bordered
            />
            <List
                dataSource={data.slice(1,4)}
                renderItem={(item)=><List.Item>{item.description}</List.Item>}
                header={<Typography.Title level={5}>This is Small List (Header)...</Typography.Title>}
                footer={<div>This is Small List (footer)...</div>}
                size="small"
                bordered
            />
            <List
                dataSource={data.slice(1,4)}
                renderItem={(item)=><List.Item>{item.description}</List.Item>}
                header={<Typography.Title level={5}>This is Large List (Header)...</Typography.Title>}
                footer={<div>This is Large List (footer)...</div>}
                size="large"
                bordered
            />            
            <Divider orientation="left" orientationMargin={0}> Customized List Items </Divider>
            <List
                dataSource={data.slice(0,3)}
                renderItem={(item)=>(
                    <List.Item>
                        <List.Item.Meta 
                            title = {<div style={{fontWeight:'bold'}}>{item.title}</div>}
                            description = {<div>{item.description}</div>}
                            avatar = {<Avatar src={item.img}></Avatar>}
                        />                    
                    </List.Item>
                )}
                header={<Typography.Title level={5}>Default List with Customization (Header)...</Typography.Title>}
                footer={<div>Default List with Customization (footer)...</div>}
                bordered
            />
            <Divider orientation="left" orientationMargin={0}> Customized List with Pagination </Divider>
            <List
                dataSource={data}
                renderItem={(item)=>(
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined } text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined } text="2" key="list-vertical-message" />,
                        ]} 
                        extra={
                            <img
                                height={150}
                                width={250}
                                alt="logo"
                                src="../london.jpg"
                            />
                        }
                    >
                        <List.Item.Meta 
                            title = {<div style={{fontWeight:'bold'}}>{item.title}</div>}
                            description = {<div>{item.description}</div>}
                            avatar = {<Avatar src={item.img}></Avatar>}
                        /> 
                        {item.content}                   
                    </List.Item>
                )}
                header={<Typography.Title level={5}>Default List with Customization (Header)...</Typography.Title>}
                footer={<div>Default List with Customization (footer)...</div>}
                itemLayout="vertical"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                bordered
            />
        </Flex>
    )
}

export default ListComponent;