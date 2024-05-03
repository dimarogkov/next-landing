'use client';
import { useState } from 'react';
import { mainStyles } from '@/variables/mainStyles';

import Image from 'next/image';
import Burger from '@/public/header_burger.svg';
import MobileMenu from './MobileMenu';

const HeaderMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { transitionOpacity } = mainStyles;

    return (
        <>
            <button
                className={`${transitionOpacity} block lg:hidden w-[32px]`}
                onClick={() => setIsMenuActive(!isMenuActive)}
            >
                <Image src={Burger} alt='burger' className='w-full' />
            </button>

            <MobileMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        </>
    );
};

export default HeaderMenu;
