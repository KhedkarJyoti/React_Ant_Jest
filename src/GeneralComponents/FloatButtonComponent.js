import React, { useState } from "react";
import { CommentOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Flex, FloatButton, Row, Switch, Typography } from "antd";
// import Column from "antd/es/table/Column";
// const { Column } = Layout;

const FloatButtonComponent = ()=>{
    const [floatOpen, setFloatOpen] = useState(false);
    return(
        <>
            <Flex vertical> 
                <Flex align="flex-start">
                    <Typography.Title level={3}>FloatButton</Typography.Title>
                </Flex>
                <Divider />
                <Row gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>1. Basic FloatButton</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton className="float-style" onClick={()=>{alert("Basic FloatButton Clicked...")}}></FloatButton>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>2. Default FloatButton</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton 
                                className="float-style" 
                                type="default"
                                icon={<QuestionCircleOutlined />}
                                onClick={()=>{alert("Default FloatButton Clicked...")}}
                            ></FloatButton>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>3. Primary FloatButton</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton 
                                className="float-style" 
                                type="primary"
                                icon={<QuestionCircleOutlined />}
                                onClick={()=>{alert("Primary FloatButton Clicked...")}}
                            ></FloatButton>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>4. Shaped Float Button</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton 
                                className="float-style" 
                                shape="square"
                                type="primary"
                                icon={<QuestionCircleOutlined />}
                                onClick={()=>{alert("Square FloatButton Clicked...")}}
                                style={{right:'34px'}}
                            ></FloatButton>
                            <FloatButton 
                                className="float-style" 
                                shape="circle"
                                type="primary"
                                icon={<QuestionCircleOutlined />}
                                onClick={()=>{alert("Circle FloatButton Clicked...")}}
                                // style={{right:'94px'}}
                            ></FloatButton>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>5. Descriptive Float Button</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton 
                                className="float-style" 
                                shape="square"
                                description="HELP"
                                // type="primary"
                                icon={<QuestionCircleOutlined />}
                                onClick={()=>{alert("Descriptive FloatButton Clicked...")}}
                                style={{right:'34px'}}
                            ></FloatButton>
                            <FloatButton 
                                className="float-style" 
                                shape="square"
                                description="Help Info"
                                type="primary"
                                icon={<QuestionCircleOutlined />}
                                onClick={()=>{alert("Descriptive FloatButton Clicked...")}}
                                style={{right:'28px'}}
                            ></FloatButton>
                            <FloatButton 
                                className="float-style" 
                                shape="circle"
                                description="Help Info"
                                onClick={()=>{alert("Descriptive FloatButton Clicked...")}}
                            ></FloatButton>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>6. FloatButton with Tooltip</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">                            
                            <FloatButton 
                                className="float-style" 
                                shape="circle"
                                icon={<QuestionCircleOutlined />}
                                tooltip={<>This is Tooltip...</>}
                            ></FloatButton>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>7. Triggered Menu</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton.Group 
                                className="float-style" 
                                shape="square"
                                type="primary"
                                trigger="hover"
                                tooltip={<>Opens Menu on Hover</>}
                                icon={<QuestionCircleOutlined />}
                                style={{right:'34px'}}
                            >
                                <FloatButton />
                                <FloatButton icon={<CommentOutlined />} />
                            </FloatButton.Group>
                            <FloatButton.Group 
                                className="float-style" 
                                shape="circle"
                                type="primary"
                                trigger="click"
                                tooltip={<>Opens Menu on Click</>}
                                icon={<QuestionCircleOutlined />}
                            >
                                <FloatButton />
                                <FloatButton icon={<CommentOutlined />} />
                            </FloatButton.Group>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>8. Controlled Mode </Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <Switch
                                onChange={() => {setFloatOpen(!floatOpen)}}
                                checked={floatOpen}
                                style={{
                                margin: 55,
                                }}
                            />
                            <FloatButton.Group 
                                className="float-style" 
                                shape="square"
                                type="primary"
                                open={floatOpen}
                                trigger="click"
                                icon={<QuestionCircleOutlined />}
                            >
                                <FloatButton />
                                <FloatButton icon={<CommentOutlined />} />
                            </FloatButton.Group>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>9. Badged FloatButton </Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">
                            <FloatButton 
                                className="float-style" 
                                shape="square"
                                type="primary"
                                icon={<QuestionCircleOutlined />}
                                badge={{dot : true}}
                                style={{right:'34px'}}
                            ></FloatButton>
                            <FloatButton.Group 
                                className="float-style" 
                                shape="circle"
                                type="primary"
                                trigger="hover"
                                open={true}
                                tooltip={<>Opens Menu on Hover</>}
                                icon={<QuestionCircleOutlined />}
                                // style={{right:'34px'}}
                            >
                                <FloatButton badge={{ count : 9, color : 'red'}} />
                                <FloatButton icon={<CommentOutlined />}  badge={{ count : 6, color : 'green'}} />
                            </FloatButton.Group>
                        </Flex>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <Typography.Title level={5}>10. FloatButton BackTop</Typography.Title>
                        <Flex className="float-box" align="flex-end" justify="flex-end">                            
                            <FloatButton.BackTop 
                                className="float-style" 
                                shape="circle"
                                // icon={<QuestionCircleOutlined />}
                                tooltip={<>Go to Top...</>}
                            />
                        </Flex>
                    </Col>
                </Row>                    
            </Flex>
        </>
    )
} 

export default FloatButtonComponent;