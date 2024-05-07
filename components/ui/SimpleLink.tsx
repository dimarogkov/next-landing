'use client';
import { SimpleLinkTypes } from '@/types/enums/SimpleLinkTypes';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Arrow from '@/public/arrow.png';
import ArrowBlue from '@/public/arrow_blue.svg';
import ArrowGreen from '@/public/arrow_green.svg';
import ArrowPink from '@/public/arrow_pink.svg';

type Props = {
    href: string;
    name: string;
    type?: string;
    styles?: string;
};

const SimpleLink: React.FC<Props> = ({ href = '/', name = 'Link', type = SimpleLinkTypes.default, styles = '' }) => {
    const [linkStyles, setLinkStyles] = useState('text-[#0085FF]');
    const [linkIcon, setLinkIcon] = useState(ArrowBlue);

    useEffect(() => {
        switch (true) {
            case type === SimpleLinkTypes.green:
                setLinkStyles('text-[#00A424]');
                setLinkIcon(ArrowGreen);
                break;
            case type === SimpleLinkTypes.pink:
                setLinkStyles('text-[#EB2891]');
                setLinkIcon(ArrowPink);
                break;
            case type === SimpleLinkTypes.white:
                setLinkStyles('text-[#fff]');
                setLinkIcon(Arrow);
                break;
            default:
                setLinkStyles('text-[#0085FF]');
                setLinkIcon(ArrowBlue);
        }
    }, [type]);

    return (
        <Link
            href={href}
            className={`flex items-center sm:w-fit text-[18px] font-medium transition-opacity duration-300 hover:opacity-75 ${linkStyles} ${styles}`}
        >
            {name}
            <Image src={linkIcon} alt='arrow' className='w-[26px] sm:w-[28px] ml-[12px]' />
        </Link>
    );
};

export default SimpleLink;
