'use client';
import { useState } from 'react';

import Image from 'next/image';
import Burger from '@/public/header_burger.svg';
import MobileMenu from './MobileMenu';

const HeaderMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <>
            <button
                className='block lg:hidden w-[32px] transition-opacity duration-300 hover:opacity-75'
                onClick={() => setIsMenuActive(!isMenuActive)}
            >
                <Image src={Burger} alt='burger' className='w-full' />
            </button>

            <MobileMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        </>
    );
};

export default HeaderMenu;
