import React from "react";
import { Divider, Flex, Typography } from "antd";

const DividerComponent = ()=>{
    return(
        <>
            <Flex vertical> 
                <Flex align="flex-start">
                    <Typography.Title level={3}>Divider</Typography.Title>
                </Flex>
                {/* <Divider /> */}
                <Flex className="divider-wrapper" gap='small' align="flex-start" vertical>
                    <Divider plain>Plain Divider</Divider>
                    <Divider dashed>Dashed Divider</Divider>
                    <Divider orientation="left" plain>Left Text Divider</Divider>
                    <Divider orientation="center" plain>Center Text Divider</Divider>
                    <Divider orientation="right" plain>Right Text Divider</Divider>
                    <Divider orientation="left" orientationMargin={0} plain>Left Text with Margin 0</Divider>
                    <Divider orientation="left" orientationMargin={30} plain>Left Text with Margin 30</Divider>
                    <Divider orientation="left" >Left Title Divider</Divider>
                    <Divider orientation="center" >Center Title Divider</Divider>
                    <Divider orientation="right" >Right Title Divider</Divider>               
                    <Divider>Vertical Divider <Divider type='vertical' /> Vertical Divider <Divider type='vertical' /> Vertical Divider</Divider>
                </Flex>
            </Flex>
        </>
    )
} 

export default DividerComponent;