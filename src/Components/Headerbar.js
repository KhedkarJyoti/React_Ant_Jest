import { Button, Flex, Menu, Typography } from "antd";
import { CarryOutOutlined, LogoutOutlined, MessageOutlined, NotificationOutlined, OpenAIOutlined, OrderedListOutlined, ProfileOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import Avatar from "antd/es/avatar/avatar";
const Headerbar = ()=>{
    return(
        
            <Flex gap="middle" align="start" justify="space-evenly">
                <Flex align="center" style={{width:'100%'}}>
                    <Search placeholder="Search Here..." />
                </Flex> 
                <Flex align="flex-end" justify="flex-end" gap="middle" style={{width:'100%'}}>
                    <MessageOutlined className="header-icon" />
                    <NotificationOutlined className="header-icon" />
                    <Avatar icon={<UserOutlined />} />
                </Flex>
            </Flex>
           
        
    )
}

export default Headerbar;