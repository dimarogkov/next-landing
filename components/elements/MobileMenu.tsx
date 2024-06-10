import { Dispatch, SetStateAction } from 'react';
import { navbarLinks } from '@/data/navbarLinks';

import Link from 'next/link';
import cn from 'classnames';

type Props = {
    isMenuActive: boolean;
    setIsMenuActive: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: React.FC<Props> = ({ isMenuActive = false, setIsMenuActive = () => {} }) => {
    return (
        <div
            className={cn('fixed block lg:hidden top-0 left-0 w-full h-full transition-all duration-300', {
                'visible opacity-100': isMenuActive,
                'invisible opacity-0': !isMenuActive,
            })}
        >
            <div
                className='absolute top-0 left-0 w-full h-full bg-black/40'
                onClick={() => setIsMenuActive(!isMenuActive)}
            ></div>

            <nav
                className={cn(
                    'absolute top-0 right-0 w-[80%] sm:w-[60%] md:w-[500px] h-full p-[12px] md:p-[20px] bg-white transition-all duration-300',
                    {
                        'visible opacity-100 translate-x-0': isMenuActive,
                        'invisible opacity-0 translate-x-[80%] sm:translate-x-[60%] md:translate-x-[500px]':
                            !isMenuActive,
                    }
                )}
            >
                <div className='w-full pb-[12px] sm:pb-[20px] md:pb-0 mb-[12px] sm:mb-[20px] md:mb-0 border-solid border-b-2 border-black/20 md:border-none'>
                    {navbarLinks.map(({ id, href, name }) => (
                        <Link
                            href={href}
                            key={`menu-${id}`}
                            className='block w-full md:text-[18px] font-medium text-[#36485C] mb-[12px] last:mb-0 transition-opacity duration-300 hover:opacity-75'
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                <Link
                    href='/'
                    className='block md:hidden md:text-[18px] font-medium text-[#36485C] transition-opacity duration-300 hover:opacity-75'
                >
                    Open an Account
                </Link>
            </nav>
        </div>
    );
};

export default MobileMenu;
