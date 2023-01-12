import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterInput, { Props } from './CounterInput';

describe('CounterInput', () => {
    const props: Props = {
        title: 'Counter',
        max: 10,
        name: 'counter',
        onCountChange: jest.fn(),
    };

    it('should display the title', () => {
        render(<CounterInput {...props} />);
    });
});
