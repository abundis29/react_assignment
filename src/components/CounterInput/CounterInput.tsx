import React, { useState } from 'react';

interface Props {
    title: string;
    max: number;
    name: string;
    className?: string;
    onCountChange: (event: React.ChangeEvent<HTMLInputElement>, count: number) => void;
}
export type { Props }

const CounterInput: React.FC<Props> = ({ title, max, name, className, onCountChange }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onCountChange(event, parseInt(event.target.value))
        setValue(parseInt(event.target.value))
    }
    return (
        <div className={className}>
            <h3>{title}</h3>
            <input type='number' max={max} min="0" name={name} value={value} onChange={handleChange} className="bg-gray-200 p-2 rounded-md" />
        </div>
    );
};

export default CounterInput;

