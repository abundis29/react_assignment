import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Stepper from './Stepper';

describe('Stepper', () => {
    const steps = [<div key='1'>Step 1</div>, <div key='2'>Step 2</div>, <div key='3'>Step 3</div>];
    test('should render correctly', () => {
        render(<Stepper steps={steps} />);
    });
});
