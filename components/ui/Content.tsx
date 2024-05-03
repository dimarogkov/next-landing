type Props = {
    text: string;
    styles?: string;
};

const Content: React.FC<Props> = ({ text = 'Content text', styles = '' }) => {
    return <p className={`w-full sm:text-[18px] text-[#36485C] ${styles}`}>{text}</p>;
};

export default Content;
