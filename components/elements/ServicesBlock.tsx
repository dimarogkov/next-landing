import { Data } from '@/types/interfaces/Data';

import Content from '../ui/Content';
import ButtonLink from '../ui/ButtonLink';

type Props = {
    data: Data;
};

const ServicesBlock: React.FC<Props> = ({ data }) => {
    const { title, text, btn } = data;

    return (
        <div className='w-full p-[16px] md:p-[20px] lg:p-[24px] rounded-[8px] border-2 border-[#172026]/10 mb-[20px] md:mb-0 last:mb-0'>
            {data.icon && <data.icon className='w-[36px] md:w-[40px] h-[36px] md:h-[40px] mb-[16px] last:mb-0' />}

            {title && (
                <div className='w-full font-medium text-[22px] md:text-[26px] text-[#172026] mb-[12px] last:mb-0'>
                    {title}
                </div>
            )}

            {text && <Content text={text} styles='mb-[24px] last:mb-0' />}

            {btn && <ButtonLink href={btn.href} name={btn.name} />}
        </div>
    );
};

export default ServicesBlock;
