"use client"
import React from "react";
import ChartComponent from "./Chart";
import Card from "./Card";
import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import data from './data.json'

interface MainContentProps {
    // Define props if needed
}

const MainContent: React.FC<MainContentProps> = ({ }) => {

    const [jsonData, setJsonData] = useState([]);

    //Data for the chart
    const dataset = [
        { name: 'Sun', instagram: 4000, facebook: 2400, amt: 0 },
        { name: 'Mon', instagram: 3000, facebook: 1398, amt: 100 },
        { name: 'Tue', instagram: 2000, facebook: 9800, amt: 200 },
        { name: 'Wed', instagram: 2780, facebook: 3908, amt: 300 },
        { name: 'Thu', instagram: 1890, facebook: 4800, amt: 400 },
        { name: 'Fri', instagram: 2390, facebook: 3800, amt: 500 },
        { name: 'Sat', instagram: 3490, facebook: 4300, amt: 600 },
    ];

    useEffect(() => {
        setJsonData(data); // Set the JSON data directly
    }, []);


    return (
        <div className="flex-1 bg-gray-200">
            {/* Main content goes here */}
            <div className="bg-black text-white w-full h-36 flex justify-between p-4 rounded-lg">
                <div className="flex flex-col">
                    <h1>Unlock Premium Status</h1>
                    <p>Get up to 10TB of storage for a limited time</p>{" "}
                </div>
                <button className="bg-white text-black rounded-full p-2 h-12">
                    Upgrade
                </button>
            </div>
            <Card />

            <h1 className="text-2xl font-bold p-4 bg-white">Performance</h1>

            <ChartComponent data={dataset} />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Installed Apps</h1>
                <DataTable data={data} />
            </div>
        </div>
    );
};

export default MainContent;
