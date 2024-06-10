import { AccordionItem as Item } from '@/types/interfaces/AccordionItem';
import { Collapse } from 'react-collapse';

import Content from '../ui/Content';
import Image from 'next/image';

import Plus from '@/public/plus.svg';
import Minus from '@/public/minus.svg';

type Props = {
    data: Item;
    isOpen: boolean;
    toggleAccordion: (id: number) => void;
};

const AccordionItem: React.FC<Props> = ({ data, isOpen, toggleAccordion = () => {} }) => {
    const { id, title, desk } = data;

    return (
        <div
            className='w-full p-[16px] md:p-[20px] lg:p-[24px] rounded-[8px] mb-[16px] last:mb-0 cursor-pointer bg-[#E3F1FF]'
            onClick={() => toggleAccordion(id)}
        >
            <div className='w-full flex items-center justify-between'>
                <Content className='font-medium text-[#172026] pr-[16px]'>{title}</Content>

                <span className='w-[24px] min-w-[24px]'>
                    <Image src={isOpen ? Minus : Plus} alt='plus' className='w-full' />
                </span>
            </div>

            <Collapse isOpened={isOpen}>
                <Content className='pt-[8px] lg:pt-[16px]'>{desk}</Content>
            </Collapse>
        </div>
    );
};

export default AccordionItem;
