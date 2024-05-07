type Props = {
    text: string;
    styles?: string;
};

const Subtitle: React.FC<Props> = ({ text = 'Title', styles = '' }) => {
    return (
        <h3 className={`w-full text-[24px] md:text-[36px] lg:text-[42px] font-medium text-[#172026] ${styles}`}>
            {text}
        </h3>
    );
};

export default Subtitle;
