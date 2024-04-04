import { Col, Divider, Flex, Row, Typography } from "antd";
import React from "react";

const GridComponent = () =>{
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Grid</Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Grid Design </Divider>
            <>
                <Row className="grid-row">
                    <Col span={24}>100%</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={12}>50%</Col>
                    <Col span={12}>50%</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={8}>33.33%</Col>
                    <Col span={8}>33.33%</Col>
                    <Col span={8}>33.33%</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={6}>25%</Col>
                    <Col span={6}>25%</Col>
                    <Col span={6}>25%</Col>
                    <Col span={6}>25%</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={12}>50%</Col>
                    <Col span={6}>25%</Col>
                    <Col span={6}>25%</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={16}>66.66%</Col>
                    <Col span={8}>33.33%</Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Basic Grid </Divider>
            <>
                <Row className="grid-row">
                    <Col span={24}>col-12</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={12}>col-6</Col>
                    <Col span={12}>col-6</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={8}>col-4</Col>
                    <Col span={8}>col-4</Col>
                    <Col span={8}>col-4</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={6}>col-3</Col>
                    <Col span={6}>col-3</Col>
                    <Col span={6}>col-3</Col>
                    <Col span={6}>col-3</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={4}>col-2</Col>
                    <Col span={4}>col-2</Col>
                    <Col span={4}>col-2</Col>
                    <Col span={4}>col-2</Col>
                    <Col span={4}>col-2</Col>
                    <Col span={4}>col-2</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                    <Col span={2}>col-1</Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Grid Gutter</Divider>
            <>
                <Divider orientation="center" orientationMargin={0}>Horizontal : space between columns</Divider>
                <Row gutter={16} style={{background:'lavender'}}>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Responsive : space between columns</Divider>
                <Row gutter={{
                    xs : 8,
                    sm : 12,
                    md : 16,
                    lg : 24,
                    xl : 32,
                    xxl: 40
                }} style={{background:'lavender'}}>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    
                </Row>
                <Divider orientation="center" orientationMargin={0}>Vertical : space between columns</Divider>
                <Row gutter={[16,24]} style={{background:'lavender'}}>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                    <Col className="gutter-row" span={4}><div className="gutter-div">col-2</div></Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Column Offset</Divider>
            <>
                <Row className="grid-row">
                    <Col span={12} offset={12}>col-6 offset-6</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={12} offset={6}>col-6 offset-3</Col>
                </Row>
                <Row className="grid-row">
                    <Col span={6} offset={6}>col-3 offset-3</Col>
                    <Col span={6} offset={6}>col-3 offset-3</Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Column Order change using pull & push</Divider>
            <>
                <Divider orientation="center" orientationMargin={0}>Without pull & push</Divider>
                <Row className="grid-row">
                    <Col span={18} >col-9 </Col>
                    <Col span={6} >col-3 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>With pull & push</Divider>
                <Row className="grid-row">
                    <Col span={18} push={6}>col-9 </Col>
                    <Col span={6} pull={18}>col-3 </Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Horizontal Arrangement : Justify</Divider>
            <>
                <Divider orientation="center" orientationMargin={0}>Left Aligned</Divider>
                <Row className="grid-row" justify='start'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Center Aligned</Divider>
                <Row className="grid-row" justify='center'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Right Aligned</Divider>
                <Row className="grid-row" justify='end'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Monospaced</Divider>
                <Row className="grid-row" justify='space-around'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Responsive</Divider>
                <Row className="grid-row" justify='space-between'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Evenly Spaced</Divider>
                <Row className="grid-row" justify='space-evenly'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Vertical Alignement</Divider>
            <>
                <Divider orientation="center" orientationMargin={0}>Top Aligned</Divider>
                <Row className="grid-row" align='top'>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Middle Aligned</Divider>
                <Row className="grid-row" align='middle'>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Bottom Aligned</Divider>
                <Row className="grid-row" align='bottom'>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
                <Divider orientation="center" orientationMargin={0}>Stretch Aligned</Divider>
                <Row className="grid-row" align='stretch'>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                    <Col span={4} style={{height:'60px'}}>col-2 </Col>
                    <Col span={4} >col-2 </Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Column Order</Divider>
            <>
                <Row className="grid-row">
                    <Col span={4} order={4}>col-1 order:4 </Col>
                    <Col span={4} order={3}>col-2 order:3 </Col>
                    <Col span={4} order={2}>col-3 order:2 </Col>
                    <Col span={4} order={1}>col-4 order:1 </Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Percentage columns</Divider>
            <>
                <Row className="grid-row">
                    <Col flex={2}>2 / 5</Col>
                    <Col flex={3}>3 / 5</Col>
                </Row>
                <Divider orientation="center">Fill rest</Divider>
                <Row className="grid-row">
                    <Col flex="100px">100px</Col>
                    <Col flex="auto">Fill Rest</Col>
                </Row>
                <Divider orientation="center">Raw flex style</Divider>
                <Row className="grid-row" wrap={false}>
                    <Col flex="none">
                        <div
                        style={{
                            padding: '0 16px',
                        }}
                        >
                        none
                        </div>
                    </Col>
                    <Col flex="auto">auto with no-wrap</Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Responsive columns</Divider>
            <>
                <Row className="grid-row">
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                </Row>
            </>
            <Divider orientation="left" orientationMargin={0}>Responsive columns : Using flex propety</Divider>
            <>
                <Row className="grid-row">
                    {new Array(10).fill(0).map((_, index) => {
                    const key = `col-${index}`;
                    return (
                        <Col
                        key={key}
                        xs={{ flex: '100%' }}
                        sm={{ flex: '50%' }}
                        md={{ flex: '40%' }}
                        lg={{ flex: '20%' }}
                        xl={{ flex: '10%' }}
                        >
                        Col
                        </Col>
                    );
                    })}
                </Row>
            </>
        </Flex>
    )
}

export default GridComponent;