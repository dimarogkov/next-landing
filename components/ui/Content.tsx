type Props = {
    children: React.ReactNode;
    className?: string;
};

const Content: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full xl:text-[18px] text-[#36485C] ${className}`}>{children}</p>;
};

export default Content;
