import { Button, Flex, Space, Typography } from 'antd'
import React, { useState } from 'react'

const TestAsync = () => {
  	const [counter, setCounter] = useState(0)

	const delayCount = () => (
		setTimeout(() => {
		setCounter(counter + 1)
		}, 5000)
	)
  
	return (
		<Flex gap={30} align='center' vertical>
			<Space style={{background:'aliceblue', display:'flex', padding:100}} size='middle' align='center' direction='vertical'>
				<Typography.Title data-testid="counter">{ counter }</Typography.Title>
			</Space>
			<Space>
				<Button type='primary'  data-testid="button-up" onClick={delayCount}> Up</Button>
				<Button disabled danger type='primary' data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</Button>
			</Space>
		</Flex>
   	)
}
  
export default TestAsync