// CustomLegend.tsx
import React from 'react';
import { LegendPayload } from 'recharts/types/component/Legend';

interface CustomLegendProps {
    payload: LegendPayload[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
    return (
        <ul>
            {payload.map((entry, index) => (
                <li key={`item-${index}`}>
                    <span style={{ color: entry.color, width: '40px', display: 'inline-block' }}>&#x25A0;</span>
                    <span>{entry.value}</span>
                </li>
            ))}
        </ul>
    );
};

export default CustomLegend;
