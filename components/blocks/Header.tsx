import { headerLinks } from '@/data/headerLinks';
import { mainStyles } from '@/variables/mainStyles';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';
import User from '@/public/header_user.svg';
import HeaderMenu from '../elements/HeaderMenu';

const Header = () => {
    const { container, padding, transitionOpacity } = mainStyles;

    return (
        <header className={`${container} ${padding} flex items-center justify-between py-[16px] lg:py-[24px]`}>
            <div className='flex items-center'>
                <Link href='/' className={`${transitionOpacity} block w-[40px] md:w-[36px] lg:mr-[74px]`}>
                    <Image src={Logo} alt='logo' className='w-full' />
                </Link>

                <ul className='hidden gap-[56px] lg:flex'>
                    {headerLinks.map(({ id, href, name }) => (
                        <li key={id} className='flex'>
                            <Link href={href} className={`${transitionOpacity} font-medium text-[#36485C]`}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex items-center'>
                <Link
                    href='/'
                    className={`${transitionOpacity} hidden md:block font-medium text-[#36485C] mr-[32px] lg:mr-[56px]`}
                >
                    Open an Account
                </Link>
                <Link
                    href='/'
                    className={`${transitionOpacity} relative flex items-center mr-[20px] md:mr-[32px] lg:mr-0`}
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
