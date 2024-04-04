import { SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Typography } from "antd";
import React from "react";

const ButtonComponent = ()=>{
    return(
        <>
            <Flex vertical> 
                <Flex align="flex-start">
                    <Typography.Title level={3}>Button</Typography.Title>
                </Flex>
                {/* <Divider /> */}
                <Flex gap='small' align="flex-start" vertical>
                    <Divider>Default Button</Divider>
                    <Flex gap={'small'} wrap="wrap">
                        <Button>Default Button</Button>
                        <Button disabled>Default (Disabled)</Button>
                        <Button danger>Default (Danger)</Button>
                        <Button ghost>Default (Ghost)</Button>
                        <Button href="https://www.google.com">Default (href)</Button>
                        <Button loading>Default (Loading)</Button>
                        <Button size="small">Default (Small)</Button>
                        <Button size="middle">Default (Middle)</Button>
                        <Button size="large">Default (Large)</Button>
                        <Button icon={<SearchOutlined/>}>Default (icon)</Button>
                        <Button icon={<SearchOutlined/>} shape="circle"></Button>
                        <Button icon={<SearchOutlined/>} shape="round"></Button>
                    </Flex>
                    <Divider>Primary Button</Divider>
                    <Flex gap={'small'} wrap="wrap">
                        <Button type="primary">Primary Button</Button>
                        <Button type="primary" disabled>Primary (Disabled)</Button>
                        <Button type="primary" danger>Primary (Danger)</Button>
                        <Button type="primary" ghost>Primary (Ghost)</Button>
                        <Button type="primary" href="https://www.google.com">Primary (href)</Button>
                        <Button type="primary" loading>Primary (Loading)</Button>
                        <Button type="primary" size="small">Primary (Small)</Button>
                        <Button type="primary" size="middle">Primary (Middle)</Button>
                        <Button type="primary" size="large">Primary (Large)</Button>
                        <Button type="primary" icon={<SearchOutlined/>}>Primary (icon)</Button>
                        <Button type="primary" icon={<SearchOutlined/>} shape="circle"></Button>
                        <Button type="primary" icon={<SearchOutlined/>} shape="round"></Button>
                    </Flex>
                    <Divider>Dashed Button</Divider>
                    <Flex gap={'small'} wrap="wrap">
                        <Button type="dashed">Dashed Button</Button>
                        <Button type="dashed" disabled>Dashed (Disabled)</Button>
                        <Button type="dashed" danger>Dashed (Danger)</Button>
                        <Button type="dashed" ghost>Dashed (Ghost)</Button>
                        <Button type="dashed" href="https://www.google.com">Dashed (href)</Button>
                        <Button type="dashed" loading>Dashed (Loading)</Button>
                        <Button type="dashed" size="small">Dashed (Small)</Button>
                        <Button type="dashed" size="middle">Dashed (Middle)</Button>
                        <Button type="dashed" size="large">Dashed (Large)</Button>
                        <Button type="dashed" icon={<SearchOutlined/>}> Dashed (icon)</Button>
                        <Button type="dashed" icon={<SearchOutlined/>} shape="circle"></Button>
                        <Button type="dashed" icon={<SearchOutlined/>} shape="round"></Button>
                    </Flex> 
                    <Divider>Link</Divider>               
                    <Flex gap={'small'} wrap="wrap">
                        <Button type="link">Link</Button>
                        <Button type="link" disabled>Link (Disabled)</Button>
                        <Button type="link" danger>Link (Danger)</Button>
                        <Button type="link" ghost>Link (Ghost)</Button>
                        <Button type="link" href="https://www.google.com">Link (href)</Button>
                        <Button type="link" loading>Link (Loading)</Button>
                        <Button type="link" size="small">Link (Small)</Button>
                        <Button type="link" size="middle">Link (Middle)</Button>
                        <Button type="link" size="large">Link (Large)</Button>
                        <Button type="link" icon={<SearchOutlined/>}>Link (icon)</Button>
                        <Button type="link" icon={<SearchOutlined/>} shape="circle"></Button>
                        <Button type="link" icon={<SearchOutlined/>} shape="round"></Button>
                    </Flex>
                    <Divider>Text Button</Divider>
                    <Flex gap={'small'} wrap="wrap">
                        <Button type="text">Text Button</Button>
                        <Button type="text" disabled>Text (Disabled)</Button>
                        <Button type="text" danger>Text (Danger)</Button>
                        <Button type="text" ghost>Text (Ghost)</Button>
                        <Button type="text" href="https://www.google.com">Text (href)</Button>
                        <Button type="text" loading>Text (Loading)</Button>
                        <Button type="text" size="small">Text (Small)</Button>
                        <Button type="text" size="middle">Text (Middle)</Button>
                        <Button type="text" size="large">Text (Large)</Button>
                        <Button type="text" icon={<SearchOutlined/>}> Text (icon)</Button>
                        <Button type="text" icon={<SearchOutlined/>} shape="circle"></Button>
                        <Button type="text" icon={<SearchOutlined/>} shape="round"></Button>
                    </Flex>
                    
                </Flex>
            </Flex>
        </>
    )
} 

export default ButtonComponent;