import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';
import User from '@/public/header_user.svg';

import { headerLinks } from '@/data/headerLinks';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        <header className='flex items-center justify-between px-[20px] py-[16px] lg:p-[24px]'>
            <div className='flex items-center'>
                <Link
                    href='/'
                    className='block w-[40px] md:w-[36px] lg:mr-[74px] transition-opacity duration-300 hover:opacity-75'
                >
                    <Image src={Logo} alt='logo' className='w-full' />
                </Link>

                <ul className='hidden gap-[56px] lg:flex'>
                    {headerLinks.map(({ id, href, name }) => (
                        <li key={id} className='flex'>
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

            <div className='flex items-center'>
                <Link
                    href='/'
                    className='hidden md:block font-medium text-[#36485C] mr-[32px] lg:mr-[56px] transition-opacity duration-300 hover:opacity-75'
                >
                    Open an Account
                </Link>
                <Link
                    href='/'
                    className='relative flex items-center mr-[20px] md:mr-[32px] lg:mr-0 transition-opacity duration-300 hover:opacity-75'
                >
                    <Image src={User} alt='user' className='w-[32px] sm:w-[26px] sm:mr-[12px]' />
                    <span className='hidden sm:block font-medium text-[#36485C]'>Sign In</span>
                </Link>

                <HeaderMenu />
            </div>
        </header>
    );
};

export default Header;
