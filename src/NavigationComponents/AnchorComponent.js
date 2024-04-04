import { Anchor, Col, Divider, Flex, Row, Typography } from "antd";
import React from "react";

const AnchorComponent = ()=>{
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Anchor</Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Anchor </Divider>
            <Row>
                <Col span={20}>
                    <div id='anchor-1' style={{
                        background: '#e4717a',
                        height : '60vh',                         
                        textAlign:'center',
                    }}>
                         Page-1
                    </div>
                    <div id='anchor-2' style={{
                        background: '#d8e4bc',
                        height : '60vh',                        
                        textAlign:'center',
                    }}>
                         Page-2
                    </div>
                    <div id='anchor-3' style={{
                        background: '#99badd',
                        height : '60vh',                         
                        textAlign:'center',
                    }}>
                         Page-3
                    </div>
                </Col>
                <Col span={4}>
                    <Anchor 
                        items={[
                            {
                                key:'anchor-1',
                                href:'#anchor-1',
                                title:'Page-1'
                            },
                            {
                                key:'anchor-2',
                                href:'#anchor-2',
                                title:'Page-2'
                            },
                            {
                                key:'anchor-3',
                                href:'#anchor-3',
                                title:'Page-3'
                            }
                        ]}
                    />
                </Col>                
            </Row>
        </Flex>
    )
}

export default AnchorComponent;