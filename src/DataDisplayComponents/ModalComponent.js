import { Button, Divider, Flex, Modal, Space, Typography } from "antd";
import React, { useState } from "react";

const ModalComponent = ()=>{
    const [isModalOpenM1, setIsModalOpenM1] = useState(false);
    const [isModalOpenM2, setIsModalOpenM2] = useState(false);
    const [isModalOpenM3, setIsModalOpenM3] = useState(false);
    const [modalText, setModalText] = useState('');
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Modal </Typography.Title>                
            </Flex>
            <Space gap='large' direction='horizontal'>
                <Space align='center' gap='medium' direction='vertical' style={{width:200, height:200, background:'aliceblue'}}>
                    <Divider orientation="left" orientationMargin={0}> Basic Modal </Divider>
                    <Button type="primary" size='medium' onClick={()=>setIsModalOpenM1(true)}>
                        Open Modal
                    </Button>
                    <Modal title="Basic Modal" open={isModalOpenM1} onOk={() => setIsModalOpenM1(false)} onCancel={()=>setIsModalOpenM1(false)}>
                        <p>This is modal contents...</p>
                    </Modal>
                </Space> 
                <Space align='center' gap='medium' direction='vertical' style={{width:200, height:200, background:'aliceblue'}}>
                    <Divider orientation="left" orientationMargin={0}> Async Modal </Divider>
                    <Button type="primary" onClick={()=>setIsModalOpenM2(true)}>
                        Open Modal
                    </Button>
                    <Modal
                        title="Title"
                        open={isModalOpenM2}
                        onOk={()=>{
                            setModalText('The modal will be closed after two seconds');
                            setConfirmLoading(true);
                            setTimeout(() => {
                                setIsModalOpenM2(false);
                                setConfirmLoading(false);
                            }, 2000);
                        }}
                        confirmLoading={confirmLoading}
                        onCancel={()=>setIsModalOpenM2(false)}
                    >
                        <p>{modalText}</p>
                    </Modal>
                </Space>
                <Space align='center' gap='medium' direction='vertical' style={{width:200, height:200, background:'aliceblue'}}>
                    <Divider orientation="left" orientationMargin={0}> Async Modal </Divider>
                    <Button type="primary" onClick={()=> setIsModalOpenM3(true)}>
                        Customized Footer
                    </Button>
                    <Modal
                        open={isModalOpenM3}
                        title="Title"
                        onOk={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                                setIsModalOpenM3(false);
                            }, 3000);
                        }}
                        onCancel={()=>setIsModalOpenM3(false)}
                        footer={[
                            <Button key="back" onClick={()=>setIsModalOpenM3(false)}>
                                Return
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false);
                                    setIsModalOpenM3(false);
                                }, 3000);
                            }}>
                                Submit
                            </Button>,
                            <Button
                                key="link"
                                href="https://google.com"
                                type="primary"
                                loading={loading}
                                onClick={()=>setIsModalOpenM3(false)}
                            >
                                Search on Google
                            </Button>,
                        ]}
                    >
                        <p>This is modal contents...</p>
                    </Modal>
    
                </Space> 
            </Space> 
        </Flex>
    )
}

export default ModalComponent;