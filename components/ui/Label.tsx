'use client';
import { LabelTypes } from '@/types/enums/LabelTypes';
import { useEffect, useState } from 'react';

type Props = {
    text: string;
    type?: string;
    styles?: string;
};

const Label: React.FC<Props> = ({ text = '', type = LabelTypes.default, styles = '' }) => {
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

    return <span className={`w-full block font-medium lg:text-[18px] ${labelStyles} ${styles}`}>{text}</span>;
};

export default Label;
