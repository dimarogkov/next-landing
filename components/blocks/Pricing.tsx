import { pricingBlocks } from '@/data/pricingBlocks';

import Content from '../ui/Content';
import Subtitle from '../ui/Subtitle';
import Label from '../ui/Label';

import PricingBlock from '../elements/PricingBlock';

const Pricing = () => {
    return (
        <section className='w-full max-w-[1440px] m-auto py-[48px] lg:py-[52px] xl:py-[60px] px-[20px] lg:px-[40px] xl:px-[80px]'>
            <div className='w-full sm:max-w-[560px] m-auto mb-[40px] lg:mb-[52px] xl:mb-[64px] last:mb-0'>
                <Label text='Our Pricing' styles='text-center mb-[12px] last:mb-0' />
                <Subtitle text='Choose the right plan for your business' styles='text-center mb-[16px] last:mb-0' />
                <Content
                    text='Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It’s not Latin, though it looks like it'
                    styles='text-center'
                />
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center gap-y-[24px] lg:gap-x-[12px] xl:gap-x-[24px]'>
                {pricingBlocks.map(({ id, data, isActive }) => (
                    <PricingBlock data={data} isActive={isActive} key={id} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;
