type Props = {
    children: React.ReactNode;
    className?: string;
};

const Subtitle: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h3 className={`w-full text-[24px] md:text-[36px] lg:text-[42px] font-medium text-[#172026] ${className}`}>
            {children}
        </h3>
    );
};

export default Subtitle;
