"use client"
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface ChartProps {
    data: { name: string; instagram: number; facebook: number; amt: number; }[];
}

const ChartComponent: React.FC<ChartProps> = ({ data }) => {
    return (
        <LineChart width={1200} height={600} data={data} className="bg-white">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="facebook" stroke="#8884d8" fill="#8884d8" />
            <Line type="monotone" dataKey="instagram" stroke="#82ca9d" fill="#82ca9d" />
        </LineChart>
    );
};

export default ChartComponent;
