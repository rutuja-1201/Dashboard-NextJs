"use client"


import React from 'react';

interface Row {
    Source: string;
    Amount: number;
    Status: string;
    UserID: number;
    Joined: string;
    Group: string
}

interface DataTableProps {
    data: Row[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'text-red-500 bg-[#DCFFF5]';
            case 'Pending':
                return 'text-orange-500 bg-[#FFEAD8]';
            case 'Cancelled':
                return 'text-black bg-[#F2F4F7]';
            default:
                return '';
        }
    };

    return (
        <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-[#F9FAFB];
">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UserID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Group</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Source}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Amount}</td>
                        <td className={`px-6 py-4  whitespace-nowrap ${getStatusColor(row.Status)} w-12 rounded-full `}>
                            {row.Status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.UserID}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Joined}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Group}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
