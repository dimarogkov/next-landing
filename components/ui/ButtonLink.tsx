import { BtnLinkTypes } from '@/types/enums/BtnLinkTypes';

import Link from 'next/link';

type Props = {
    children: React.ReactNode;
    href: string;
    type?: string;
    className?: string;
};

const ButtonLink: React.FC<Props> = ({ children, href = '/', type = BtnLinkTypes.default, className = '' }) => {
    const btnLinkStyles = type === BtnLinkTypes.default ? 'bg-[#0085FF] text-[#fff]' : 'bg-[#fff] text-[#EB2891]';

    return (
        <Link
            href={href}
            className={`flex items-center justify-center sm:w-fit min-w-[160px] h-[56px] text-[18px] font-medium rounded-[4px] px-[16px] transition-opacity duration-300 hover:opacity-75 ${btnLinkStyles} ${className}`}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
