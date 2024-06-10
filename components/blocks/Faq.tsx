'use client';
import { useState } from 'react';
import { accordionItems } from '@/data/accordionItems';
import { LabelTypes } from '@/types/enums/LabelTypes';

import AccordionItem from '../elements/AccordionItem';
import Subtitle from '../ui/Subtitle';
import Content from '../ui/Content';
import Label from '../ui/Label';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (id: number) => setActiveIndex(activeIndex === id ? 0 : id);

    return (
        <section className='w-full max-w-[1440px] m-auto py-[56px] lg:py-[80px] xl:py-[120px] px-[20px] lg:px-[40px] xl:px-[80px]'>
            <div className='w-full md:flex items-start justify-between md:gap-x-[24px]'>
                <div className='md:sticky md:top-[24px] xl:top-[32px] md:left-0 w-full md:max-w-[370px] lg:max-w-[466px] mb-[24px] md:mb-0 last:mb-0'>
                    <Label type={LabelTypes.pink} className='mb-[16px] last:mb-0'>
                        Frequently Asked Questions
                    </Label>

                    <Subtitle className='mb-[16px] last:mb-0'>Let’s clarify some of your questions</Subtitle>

                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                    </Content>
                </div>

                <div className='w-full md:max-w-[58%]'>
                    {accordionItems.map((item) => (
                        <AccordionItem
                            data={item}
                            isOpen={activeIndex === item.id}
                            toggleAccordion={toggleAccordion}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
