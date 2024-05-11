import { AboutColorType } from '@/types/enums/AboutColorType';
import { Data } from '@/types/interfaces/Data';
import cn from 'classnames';

import SimpleLink from '../ui/SimpleLink';
import Subtitle from '../ui/Subtitle';
import Content from '../ui/Content';
import Label from '../ui/Label';

import Image from 'next/image';
import Check from '@/public/check.svg';

type Props = {
    data: Data;
    isBlockOdd: boolean;
    colorType: string;
};

const AboutBlock: React.FC<Props> = ({ data = {}, isBlockOdd = true, colorType = AboutColorType.blue }) => {
    const { label, title, text, list, img, btn } = data;

    return (
        <div
            className={cn('w-full block md:flex items-center md:gap-x-[24px] mb-[56px] lg:mb-[80px] last:mb-0', {
                'md:flex-row-reverse': isBlockOdd,
            })}
        >
            <div className='w-full md:w-[50%] mb-[24px] md:mb-0 last:mb-0'>
                <div className='w-full md:hidden mb-[24px] last:mb-0'>
                    {label && <Label text={label} type={colorType} styles='mb-[12px] last:mb-0' />}
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
                    {label && <Label text={label} type={colorType} styles='mb-[12px] lg:mb-[16px] last:mb-0' />}
                    {title && <Subtitle text={title} />}
                </div>

                {text && <Content text={text} styles='mb-[24px] last:mb-0' />}

                {list && (
                    <ul className='w-full mb-[32px] lg:mb-[48px] last:mb-0'>
                        {list.map((listItem) => (
                            <li key={listItem.id} className='w-full flex items-start mb-[12px] lg:mb-[20px] last:mb-0'>
                                <Image
                                    src={Check}
                                    alt='check'
                                    className='relative top-[5px] xl:top-0 w-[16px] min-w-[16px] xl:w-[24px] xl:min-w-[24px] mr-[12px] xl:mr-[16px] last:mr-[0]'
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
