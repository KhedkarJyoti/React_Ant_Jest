import { Button, Flex, Space, Typography } from "antd";
import React from "react";
// const {Title}
const Dummy = () => {
    const [counter, setCounter] = React.useState(0)
    return(
        <Flex gap={30} align='center' vertical>
            <Space style={{background:'aliceblue', display:'flex', padding:100}} size='middle' align='center' direction='vertical'>
                <Typography.Title data-testid="counter">{ counter }</Typography.Title>
            </Space>
            <Space>
                <Button type='primary'  data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</Button>
                <Button danger type='primary' data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</Button>
            </Space>
        </Flex>
    )
}

export default Dummy;