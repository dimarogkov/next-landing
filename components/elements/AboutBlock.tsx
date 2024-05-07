'use client';

import { useEffect, useState } from 'react';
import { AboutColorType } from '@/types/enums/AboutColorType';
import { AboutData } from '@/types/interfaces/AboutBlock';
import cn from 'classnames';

import SimpleLink from '../ui/SimpleLink';
import Subtitle from '../ui/Subtitle';
import Content from '../ui/Content';

import Image from 'next/image';
import AboutCheck from '@/public/about_check.svg';

type Props = {
    data: AboutData;
    isBlockOdd: boolean;
    colorType: string;
};

const AboutBlock: React.FC<Props> = ({ data = {}, isBlockOdd = true, colorType = AboutColorType.blue }) => {
    const [labelColor, setLabelColor] = useState('text-[#0085FF]');
    const { label, title, text, list, img, btn } = data;

    useEffect(() => {
        switch (true) {
            case colorType === 'green':
                setLabelColor('text-[#00A424]');
                break;
            case colorType === 'pink':
                setLabelColor('text-[#EB2891]');
                break;
            default:
                setLabelColor('text-[#0085FF]');
        }
    }, [colorType]);

    return (
        <div
            className={cn('w-full block md:flex items-center md:gap-x-[24px] mb-[56px] lg:mb-[80px] last:mb-0', {
                'md:flex-row-reverse': isBlockOdd,
            })}
        >
            <div className='w-full md:w-[50%] mb-[24px] md:mb-0 last:mb-0'>
                <div className='w-full md:hidden mb-[24px] last:mb-0'>
                    {label && (
                        <span className={`w-full block font-medium mb-[12px] last:mb-0 ${labelColor}`}>{label}</span>
                    )}

                    {title && <Subtitle text={title} />}
                </div>

                <div className='relative w-full h-0 pb-[100%] rounded-[10px] md:rounded-[16px] bg-black/30'>
                    {img && (
                        <Image
                            src={img.src}
                            alt={img.name}
                            className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        />
                    )}
                </div>
            </div>
            <div className={cn('w-full md:w-[50%]', { 'md:pr-[56px]': isBlockOdd, 'md:pl-[56px]': !isBlockOdd })}>
                <div className='w-full hidden md:block mb-[20px] last:mb-0'>
                    {label && (
                        <span
                            className={`w-full block font-medium lg:text-[18px] mb-[12px] lg:mb-[16px] last:mb-0 ${labelColor}`}
                        >
                            {label}
                        </span>
                    )}

                    {title && <Subtitle text={title} />}
                </div>

                {text && <Content text={text} styles='mb-[24px] last:mb-0' />}

                {list && (
                    <ul className='w-full mb-[32px] lg:mb-[48px] last:mb-0'>
                        {list.map((listItem) => (
                            <li key={listItem.id} className='w-full flex items-start mb-[12px] lg:mb-[20px] last:mb-0'>
                                <Image
                                    src={AboutCheck}
                                    alt='check'
                                    className='w-[24px] min-w-[24px] mr-[16px] last:mr-[0]'
                                />
                                <Content text={listItem.text} />
                            </li>
                        ))}
                    </ul>
                )}

                {btn && <SimpleLink href={btn.href} name={btn.name} type={colorType} />}
            </div>
        </div>
    );
};

export default AboutBlock;
