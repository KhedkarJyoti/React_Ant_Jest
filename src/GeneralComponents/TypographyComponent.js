import React from "react";
import { Divider, Flex, Typography } from "antd";
// import Link from "antd/es/typography/Link";
const { Link } = Typography;
const TypographyComponent = () =>{
    return(
        <Flex gap='small' vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}>Tyoography</Typography.Title>
            </Flex>
            <Divider>Typography Title, Text & Paragraph</Divider>
            <Flex gap='middle' align="flex-start" justify="space-evenly">
                <Flex gap='small' vertical style={{width:'25%',background:'floralwhite',padding: '15px'}}>                    
                    <Divider orientation="center"> Title </Divider>
                    <Typography.Title level={1}>Title Level 1 (H1)</Typography.Title>
                    <Typography.Title level={2}>Title Level 2 (H2)</Typography.Title>
                    <Typography.Title level={3}>Title Level 3 (H3)</Typography.Title>
                    <Typography.Title level={4}>Title Level 4 (H4)</Typography.Title>
                    <Typography.Title level={5}>Title Level 5 (H5)</Typography.Title>
                    <Typography.Title level={5} underline>Title (Underline)</Typography.Title>
                    <Typography.Title level={5} type='secondary'>Title (Secondary)</Typography.Title>
                    <Typography.Title level={5} type='success'>Title (Success)</Typography.Title>
                    <Typography.Title level={5} type='warning'>Title (Warning)</Typography.Title>
                    <Typography.Title level={5} type='danger'>Title (Danger)</Typography.Title>
                    <Typography.Title level={5} italic>Title (Italic)</Typography.Title>
                    <Typography.Title level={5} mark>Title (Mark)</Typography.Title>
                    <Typography.Title level={5} ellipsis>Title (Ellipsis)</Typography.Title>
                    <Typography.Title level={5} editable>Title (Editable)</Typography.Title>
                    <Typography.Title level={5} disabled>Title (Disabled)</Typography.Title>
                    <Typography.Title level={5} delete>Title (Delete)</Typography.Title>
                    <Typography.Title level={5} copyable>Title (Copyable)</Typography.Title>
                    <Typography.Title level={5} code>Title (Code)</Typography.Title>
                </Flex>
                <Flex gap='small' vertical style={{width:'25%',background:'floralwhite',padding: '15px'}}>
                    <Divider orientation="center"> Text </Divider>
                    <Typography.Text underline>Text (Underline)</Typography.Text>
                    <Typography.Text  type='secondary'>Text (Secondary)</Typography.Text>
                    <Typography.Text  type='success'>Text (Success)</Typography.Text>
                    <Typography.Text  type='warning'>Text (Warning)</Typography.Text>
                    <Typography.Text  type='danger'>Text (Danger)</Typography.Text>
                    <Typography.Text  italic>Text (Italic)</Typography.Text>
                    <Typography.Text  mark>Text (Mark)</Typography.Text>
                    <Typography.Text  strong>Text (Strong)</Typography.Text>
                    <Typography.Text  ellipsis>Text (Ellipsis)</Typography.Text>
                    <Typography.Text  editable>Text (Editable)</Typography.Text>
                    <Typography.Text  disabled>Text (Disabled)</Typography.Text>
                    <Typography.Text  delete>Text (Delete)</Typography.Text>
                    <Typography.Text  copyable>Text (Copyable)</Typography.Text>
                    <Link href="https://www.google.com" target="_blank">Text (Link)</Link>
                    <Typography.Text  code>Text (Code)</Typography.Text>
                    <Typography.Text  keyboard>Text (keyboard)</Typography.Text>
                </Flex>
                <Flex gap='small' vertical style={{display:'grid',width:'50%',background:'floralwhite',padding: '15px'}}>
                    <Divider orientation="center"> Paragraph </Divider>
                    <Typography.Paragraph underline >
                            <Typography.Text  strong>Paragraph (Underline) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  type='secondary'>
                            <Typography.Text  strong>Paragraph (Secondary) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                             
                        </Typography.Paragraph>
                        <Typography.Paragraph  type='success'>
                            <Typography.Text  strong>Paragraph (Success) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  type='warning'>
                            <Typography.Text  strong>Paragraph (Warning) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  type='danger'>
                            <Typography.Text  strong>Paragraph (Danger) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  italic>
                            <Typography.Text  strong>Paragraph (Italic) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  mark>
                            <Typography.Text  strong>Paragraph (Mark) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  ellipsis>
                            <Typography.Text  strong>Paragraph (Ellipsis) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  editable>
                            <Typography.Text  strong>Paragraph (Editable) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  disabled>
                            <Typography.Text  strong>Paragraph (Disabled) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  delete>
                            <Typography.Text  strong>Paragraph (Delete) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  copyable>
                            <Typography.Text  strong>Paragraph (Copyable) : </Typography.Text>    
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                            
                        </Typography.Paragraph>
                        <Typography.Paragraph  code>
                            <Typography.Text  strong>Paragraph (Code) : </Typography.Text>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team. 
                            Ant Design, a design language for background applications, is refined by Ant UED Team.                             
                        </Typography.Paragraph>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TypographyComponent;