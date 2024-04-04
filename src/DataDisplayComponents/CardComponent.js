import React from "react";
import { Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
// import Meta from "antd/es/card/Meta";
const { Meta } = Card;
const CardComponent = ()=>{
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Cards </Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Cards : default / small </Divider>
            <Space direction="vertical" size={16}>
                <Card
                    title="Default size card"
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card
                    size="small"
                    title="Small size card"
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
            <Divider orientation="left" orientationMargin={0}> Card with no border </Divider>
            <div 
                style={{
                    padding:'30px',
                    background:'#ddd'
                }}
            >
                <Card
                    title="User Info"
                    bordered={false}
                    style={{
                    width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <Divider orientation="left" orientationMargin={0}> Customized Card </Divider>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src='../london.jpg' />}
            >
                <Meta title="London Street" description="www.google.com" />
            </Card>
            <Divider orientation="left" orientationMargin={0}> Card in Columns </Divider>
            <Row gutter={16} style={{
                    padding:'30px',
                    background:'#ddd'
                }}>
                <Col span={8}>
                    <Card title="Card 1" bordered={false}>
                        Card content...
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card 2" bordered={false}>
                        Card content...
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card 3" bordered={false}>
                        Card content...
                    </Card>
                </Col>
            </Row>
            <Divider orientation="left" orientationMargin={0}> Nested Cards </Divider>
            <Card title="Outer Card">
                <Card type="inner" title="Nested Inner Card 1" >
                    Inner Card content
                </Card>
                <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Nested Inner Card 2"
                >
                    Inner Card content
                </Card>
            </Card>
        </Flex>
    )
}

export default CardComponent;