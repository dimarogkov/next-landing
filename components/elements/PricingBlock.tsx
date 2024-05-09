import { BtnLinkTypes } from '@/types/enums/BtnLinkTypes';
import { Data } from '@/types/interfaces/Data';
import cn from 'classnames';

import ButtonLink from '../ui/ButtonLink';
import Content from '../ui/Content';
import Image from 'next/image';

import CheckWhite from '@/public/check_white.svg';
import Check from '@/public/check.svg';

type Props = {
    data: Data;
    isActive: boolean;
};

const PricingBlock: React.FC<Props> = ({ data = {}, isActive = false }) => {
    const { label, text, price, list, btn } = data;

    return (
        <div
            className={cn('w-full flex flex-col rounded-[8px] p-[20px] md:p-[24px] lg:p-[20px] xl:p-[24px]', {
                'bg-[#4328EB]': isActive,
                'bg-[#F5F4FF]': !isActive,
            })}
        >
            <div className='w-full grow mb-[24px] xl:mb-[32px] last:mb-0'>
                {label && (
                    <span
                        className={cn(
                            'block w-full text-[18px] lg:text-[20px] font-medium mb-[12px] lg:mb-[16px] last:mb-0',
                            {
                                'text-[#fff]': isActive,
                                'text-[#4328EB]': !isActive,
                            }
                        )}
                    >
                        {label}
                    </span>
                )}

                {text && (
                    <Content
                        text={text}
                        styles={cn('mb-[16px] lg:mb-[24px] xl:mb-[32px] last:mb-0', {
                            'text-[#fff]': isActive,
                            'text-[#36485C]': !isActive,
                        })}
                    />
                )}

                {price?.toString && (
                    <div
                        className={cn(
                            'w-full text-[24px] lg:text-[28px] xl:text-[32px] font-medium mb-[16px] lg:mb-[24px] xl:mb-[32px] last:mb-0',
                            {
                                'text-[#fff]': isActive,
                                'text-[#172026]': !isActive,
                            }
                        )}
                    >
                        ${price}/mo
                    </div>
                )}

                {list && (
                    <ul className='w-full'>
                        {list.map((listItem) => (
                            <li key={listItem.id} className='w-full flex items-start mb-[12px] lg:mb-[20px] last:mb-0'>
                                <Image
                                    src={isActive ? CheckWhite : Check}
                                    alt='check'
                                    className='relative top-[5px] xl:top-0 w-[16px] min-w-[16px] xl:w-[24px] xl:min-w-[24px] mr-[12px] xl:mr-[16px] last:mr-[0]'
                                />
                                <Content
                                    text={listItem.text}
                                    styles={cn({
                                        'text-[#fff]': isActive,
                                        'text-[#36485C]': !isActive,
                                    })}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {btn && (
                <ButtonLink
                    href={btn.href}
                    name={btn.name}
                    type={BtnLinkTypes.white}
                    styles='sm:w-full text-[#4328EB]'
                />
            )}
        </div>
    );
};

export default PricingBlock;
