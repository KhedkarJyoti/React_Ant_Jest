import React from 'react'
import {cleanup, render} from '@testing-library/react'
import Snapshot from '../JestExamples/Snapshot';
 
afterEach(cleanup);

it('should take a snapshot', () => {
    const { asFragment } = render(<Snapshot />)
    
    expect(asFragment(<Snapshot />)).toMatchSnapshot()
})