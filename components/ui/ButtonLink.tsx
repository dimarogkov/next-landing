'use client';
import { BtnLinkTypes } from '@/types/enums/BtnLinkTypes';
import { useState, useEffect } from 'react';
import { mainStyles } from '@/variables/mainStyles';

import Link from 'next/link';

type Props = {
    href: string;
    name: string;
    type?: string;
};

const ButtonLink: React.FC<Props> = ({ href = '/', name = 'Button Link', type = BtnLinkTypes.default }) => {
    const [btnLinkStyles, setBtnLinkStyles] = useState('bg-[#0085FF] text-[#fff]');
    const { transitionOpacity } = mainStyles;

    useEffect(() => {
        type === BtnLinkTypes.default
            ? setBtnLinkStyles('bg-[#0085FF] text-[#fff]')
            : setBtnLinkStyles('bg-[#fff] text-[#EB2891]');
    }, [type]);

    return (
        <Link
            href={href}
            className={`${btnLinkStyles} ${transitionOpacity} flex items-center justify-center sm:w-fit min-w-[160px] h-[56px] text-[18px] font-medium rounded-[4px] px-[16px] mb-[24px] sm:mb-0`}
        >
            {name}
        </Link>
    );
};

export default ButtonLink;
