type Props = {
    children: React.ReactNode;
    className?: string;
};

const Title: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div
            className={`w-full text-[32px] sm:text-[46px] md:text-[56px] lg:text-[72px] font-medium md:font-semibold text-[#172026] ${className}`}
        >
            {children}
        </div>
    );
};

export default Title;
