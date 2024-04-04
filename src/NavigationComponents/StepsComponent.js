import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Popover, Steps, Typography, message, theme } from "antd";
import React, { useState } from "react";

const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
];

const StepsComponent = ()=>{

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return(
        <Flex gap={'middle'} vertical>
            <Flex align="flex-start">
                <Typography.Title level={3}> Steps</Typography.Title>                
            </Flex>
            <Divider orientation="left" orientationMargin={0}> Basic Steps </Divider>
            <Steps
                current={1}
                items={[
                {
                    title: 'User Info',
                    description:'Completed',
                },
                {
                    title: 'User Address',
                    description:'In-Progress',
                    // subTitle: 'Left 00:00:08',
                },
                {
                    title: 'User Docs',
                    description:'Incomplete',
                },
                ]}
            />
            <Divider orientation="left" orientationMargin={0}> Mini Steps without Description </Divider>
            <Steps
                size="small"
                current={1}
                items={[
                    {
                        title: 'Finished',
                    },
                    {
                        title: 'In Progress',
                    },
                    {
                        title: 'Waiting',
                    },
                ]}
            />
            <Divider orientation="left" orientationMargin={0}> Steps with Icons </Divider>
            <Steps
                items={[
                    {
                        title: 'Login',
                        status: 'finish',
                        icon: <UserOutlined />,
                    },
                    {
                        title: 'Verification',
                        status: 'finish',
                        icon: <SolutionOutlined />,
                    },
                    {
                        title: 'Pay',
                        status: 'process',
                        icon: <LoadingOutlined />,
                    },
                    {
                        title: 'Done',
                        status: 'wait',
                        icon: <SmileOutlined />,
                    },
                ]}
            />
            <Divider orientation="left" orientationMargin={0}> Steps Switching </Divider>
            <Steps current={current} items={items} />
            <div style = {{
                lineHeight: '260px',
                textAlign: 'center',
                color: token.colorTextTertiary,
                backgroundColor: token.colorFillAlter,
                borderRadius: token.borderRadiusLG,
                border: `1px dashed ${token.colorBorder}`,
                marginTop: 16,
            }} > { steps[current].content } </div>

            <div style = {{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
            <Divider orientation="left" orientationMargin={0}> Vertical Steps </Divider>
            <Steps
                current={1}
                direction='vertical'
                items={[
                {
                    title: 'User Info',
                    description:'Completed',
                },
                {
                    title: 'User Address',
                    description:'In-Progress',
                    // subTitle: 'Left 00:00:08',
                },
                {
                    title: 'User Docs',
                    description:'Incomplete',
                },
                ]}
            />
            <Divider orientation="left" orientationMargin={0}> Steps with Error Status </Divider>
            <Steps
                current={1}
                status="error"
                items={[
                {
                    title: 'User Info',
                    description:'Completed',
                },
                {
                    title: 'User Address',
                    description:'In-Progress',
                    // subTitle: 'Left 00:00:08',
                },
                {
                    title: 'User Docs',
                    description:'Incomplete',
                },
                ]}
            />
            <Divider orientation="left" orientationMargin={0}> Steps with Dot Progress Bar + Cutomization on Hover of Dot</Divider>
            <Steps
                progressDot={(dot, { status, index }) => (
                    <Popover
                        content={
                        <span>
                            step {index} status: {status}
                        </span>
                        }
                    >
                        {dot}
                    </Popover>
                )}
                current={1}
                items={[
                {
                    title: 'User Info',
                    description:'Completed',
                },
                {
                    title: 'User Address',
                    description:'In-Progress',
                },
                {
                    title: 'User Docs',
                    description:'Incomplete',
                },
                ]}
            />
            <Steps
                progressDot={(dot, { status, index }) => (
                    <Popover
                        content={
                        <span>
                            step {index} status: {status}
                        </span>
                        }
                    >
                        {dot}
                    </Popover>
                )}
                direction='vertical'
                current={1}
                items={[
                {
                    title: 'User Info',
                    description:'Completed',
                },
                {
                    title: 'User Address',
                    description:'In-Progress',
                },
                {
                    title: 'User Docs',
                    description:'Incomplete',
                },
                ]}
            />
        </Flex>
    )
}

export default StepsComponent;