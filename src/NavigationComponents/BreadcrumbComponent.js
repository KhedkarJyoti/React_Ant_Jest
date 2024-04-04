import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Divider, Flex, Typography } from "antd";
import React from "react";

const BreadcrumbComponent = ()=>{
    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Breadcrumb</Typography.Title>                
            </Flex>
            <Flex gap={'large'} >
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Basic Breadcrumb </Divider>
                    <Flex gap={'middle'}>
                        <Breadcrumb 
                            items={[
                                {
                                    title : <a href="/dashboard"> Dashboard </a> 
                                },
                                {
                                    title : 'General' 
                                },
                                {
                                    title : <a href="/button"> Button </a> 
                                }
                            ]}
                        />
                    </Flex>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Breadcrumb with Icon </Divider>
                    <Flex gap={'middle'}>
                        <Breadcrumb 
                            items={[
                                {
                                    href: "/dashboard",
                                    title : <HomeOutlined /> 
                                },
                                {
                                    title : 'General' 
                                },
                                {
                                    title : <a href="/button"> Button </a> 
                                }
                            ]}
                        />
                    </Flex>
                </Flex>
                <Flex align="flex-start" vertical>
                    <Divider orientation="left" orientationMargin={0}> Breadcrumb with Seperator </Divider>
                    <Flex gap={'middle'}>
                        <Breadcrumb 
                            separator='>'
                            items={[
                                {
                                    href: "/dashboard",
                                    title : <HomeOutlined /> 
                                },
                                {
                                    title : 'General' 
                                },
                                {
                                    title : <a href="/button"> Button </a> 
                                }
                            ]}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default BreadcrumbComponent;