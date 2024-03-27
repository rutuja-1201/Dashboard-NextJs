
"use client"
import clonifyicon from '../../../public/Vector.svg'
import Image from 'next/image';

import folder from '../../../public/Folder.svg'
import help from '../../../public/Support.svg'
import msg from '../../../public/Union.svg'
import friends from '../../../public/user.svg'
import stats from '../../../public/Stats.svg'


import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="w-full bg-white pr-28 pl-4 flex flex-col relative gap-8">
            <p className='font-bold'>Clonify</p>



            <div className="dropdown flex flex-col gap-6">

                <button className="dropdown-toggle flex gap-2" onClick={toggleDropdown}>
                    <Image className='pt-0 ' src={stats} alt="" />
                    {selectedOption || 'Dashboard'}  <Image className='pt-2' src={clonifyicon} alt="" />
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={() => handleOptionClick(' Analytics')}>
                            Analytics
                        </div>
                        <div className="dropdown-item" onClick={() => handleOptionClick('Finance')}>
                            Finance
                        </div>
                        <div className="dropdown-item" onClick={() => handleOptionClick('Job Board')}>
                            Job Board
                        </div>

                    </div>
                )}

                <button className="dropdown-toggle flex gap-2" >
                    <Image className='pt-0 ' src={msg} alt="" />
                    {'Messages'}  <Image className='pt-2' src={clonifyicon} alt="" />
                </button>

                <button className="dropdown-toggle flex gap-2" >
                    <Image className='pt-0 ' src={friends} alt="" />
                    {'Friends'}  <Image className='pt-2' src={clonifyicon} alt="" />
                </button>
                <button className="dropdown-toggle flex gap-2" >
                    {'Apps'}  <Image className='pt-2' src={clonifyicon} alt="" />
                </button>
            </div>

            <h1>Pages</h1>
            <button className="dropdown-toggle flex w-44 gap-2" >
                <Image className='pt-0 ' src={help} alt="" />
                {'Help Center'}  <Image className='pt-2' src={clonifyicon} alt="" />
            </button>
            <button className="dropdown-toggle flex w-44 gap-2" >
                <Image className='pt-0 ' src={folder} alt="" />
                {'File Manager'}  <Image className='pt-2' src={clonifyicon} alt="" />
            </button>
        </div>
    );
};

export default Sidebar;
