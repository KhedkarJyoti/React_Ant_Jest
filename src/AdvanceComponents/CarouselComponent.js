import { useState } from "react";
import { Carousel, Divider, Flex, Radio, Space, Typography } from "antd";

const CarouselComponent = ()=>{ 
    const [dotPosition, setDotPosition] = useState('bottom');  

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Carousel </Typography.Title>                
            </Flex>
            <Space gap='large' direction='vertical'>
                <Divider orientation="left" orientationMargin={0}>Basic Carousel </Divider>                
                <Carousel afterChange={()=>{}}>
                    <div>
                        <h3 className="carouselStyle">Slide 1</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 2</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 3</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 4</h3>
                    </div>
                </Carousel>
                <Divider orientation="left" orientationMargin={0}>Carousel Dot position : Left | Right | Top | Bottom </Divider>
                <Radio.Group
                    onChange={(e)=>{setDotPosition(e.target.value); }}
                    value={dotPosition}
                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="top">Top</Radio.Button>
                    <Radio.Button value="bottom">Bottom</Radio.Button>
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>
                </Radio.Group>
                <Carousel afterChange={()=>{}} dotPosition={dotPosition}>
                    <div>
                        <h3 className="carouselStyle">Slide 1</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 2</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 3</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 4</h3>
                    </div>
                </Carousel>
                <Divider orientation="left" orientationMargin={0}>Auto Scrolling Carousel </Divider>
                <Carousel afterChange={()=>{}} autoplay>
                    <div>
                        <h3 className="carouselStyle">Slide 1</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 2</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 3</h3>
                    </div>
                    <div>
                        <h3 className="carouselStyle">Slide 4</h3>
                    </div>
                </Carousel>       
            </Space>              
        </Flex>
    )
}

export default CarouselComponent;