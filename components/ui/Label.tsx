'use client';
import { LabelTypes } from '@/types/enums/LabelTypes';
import { useEffect, useState } from 'react';

type Props = {
    children: React.ReactNode;
    type?: string;
    className?: string;
};

const Label: React.FC<Props> = ({ children, type = LabelTypes.default, className = '' }) => {
    const [labelStyles, setLabelStyles] = useState('text-[#0085FF]');

    useEffect(() => {
        switch (true) {
            case type === LabelTypes.green:
                setLabelStyles('text-[#00A424]');
                break;
            case type === LabelTypes.pink:
                setLabelStyles('text-[#EB2891]');
                break;
            case type === LabelTypes.white:
                setLabelStyles('text-[#fff]');
                break;
            default:
                setLabelStyles('text-[#0085FF]');
        }
    }, [type]);

    return <span className={`w-full block font-medium lg:text-[18px] ${labelStyles} ${className}`}>{children}</span>;
};

export default Label;
