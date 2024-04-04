import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react';
import Dummy from '../JestExamples/Dummy'

afterEach(cleanup);
  
  it('increments counter', () => {
    const { getByTestId } = render(<Dummy />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<Dummy />); 
    
    fireEvent.click(getByTestId('button-down'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
  });