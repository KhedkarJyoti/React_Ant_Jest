import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DomElements from '../JestExamples/DomElements'

afterEach(cleanup);

  it('Testing Dom Elements...', () => {
    const { getByTestId } = render(<DomElements />); 
    const downBtnElement = getByTestId('button-down');
    const counterElement = getByTestId('counter');
    expect(downBtnElement).toHaveAttribute('disabled')
    expect(counterElement).toHaveTextContent(0)
   });