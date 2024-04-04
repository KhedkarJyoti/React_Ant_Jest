import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import TestAsync from '../JestExamples/TestAsync'
import { wait } from '@testing-library/user-event/dist/utils';

afterEach(cleanup);
  
it('increments counter after 0.5s', async () => {
    const { getByTestId, getByText } = render(<TestAsync />); 

    fireEvent.click(getByTestId('button-up'))

    const counter = await wait(() => {getByText('1')}) 
    // console.log("counter =>",await waitFor(() => {getByText(1)}))
    // expect(counter).toHaveTextContent('1')
});