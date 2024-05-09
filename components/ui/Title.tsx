type Props = {
    text: string;
    styles?: string;
};

const Title: React.FC<Props> = ({ text = 'Title', styles = '' }) => {
    return (
        <div
            className={`w-full text-[32px] sm:text-[46px] md:text-[56px] lg:text-[72px] font-medium md:font-semibold text-[#172026] ${styles}`}
        >
            {text}
        </div>
    );
};

export default Title;
