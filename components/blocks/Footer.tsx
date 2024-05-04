import { footerSocials } from '@/data/footerSocials';
import { footerLinks } from '@/data/footerLinks';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';

const Footer = () => {
    return (
        <footer className='w-full max-w-[1440px] m-auto py-[40px] md:py-[56px] px-[20px] lg:px-[40px] xl:px-[80px]'>
            <div className='w-full block md:flex items-center justify-between mb-[56px]'>
                <Link
                    href='/'
                    className='flex items-center justify-center mb-[56px] md:mb-0 transition-opacity duration-300 hover:opacity-75'
                >
                    <Image src={Logo} alt='logo' className='w-[36px] mr-[12px]' />
                    <span className='text-[17px] font-bold text-[#36485C] uppercase'>Next</span>
                </Link>

                <ul className='block md:flex md:gap-x-[48px]'>
                    {footerLinks.map(({ id, href, name }) => (
                        <li key={id} className='w-full flex justify-center mb-[12px] md:mb-0 last:mb-0'>
                            <Link
                                href={href}
                                className='font-medium text-[#36485C] transition-opacity duration-300 hover:opacity-75'
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-full block md:flex items-center justify-between'>
                <p className='w-full text-center md:text-left text-[14px] md:text-[16px] font-medium text-[#5F7896] mb-[40px] md:mb-0'>
                    © Copyright 2024. Your Site. All rights reserved.
                </p>

                <div className='w-full flex justify-center md:justify-end gap-x-[56px]'>
                    {footerSocials.map(({ id, src, name }) => (
                        <Link href='/' key={id} className='transition-opacity duration-300 hover:opacity-75'>
                            <Image src={src} alt={name} className='w-[20px]' />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
