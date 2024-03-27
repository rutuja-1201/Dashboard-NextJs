// components/Header.tsx

import React from 'react';
import icon from '../../../public/calendar.svg'
import profile from '../../../public/Avatar.png'
import layout from '../../../public/layout-grid.png'
import iconindicator from '../../../public/Icon Indicator.svg'
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-white p-4 w-full ">
            {/* Add your header content here */}

            <div className='flex'>
                <input
                    type="text"
                    placeholder="Search"
                    className="  p-2 rounded-md mr-2 border-[2px] border-[#EAECF0] w-[44rem]"
                />

            </div>
            <div className='flex flex-row gap-[2rem]'>

                <Image src={iconindicator} alt='' className='w-12' />
                <Image src={icon} alt='' className='w-12' />
                <Image src={layout} alt='' className='w-12' />
                <Image src={profile} alt='' className='w-12' />
            </div>
        </div >
    );
};

export default Header;
