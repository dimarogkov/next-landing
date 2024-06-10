import { servicesBlocks } from '@/data/servicesBlocks';

import Content from '../ui/Content';
import Label from '../ui/Label';
import Subtitle from '../ui/Subtitle';
import ServicesBlock from '../elements/ServicesBlock';

const Services = () => {
    return (
        <section className='w-full max-w-[1440px] m-auto py-[48px] lg:py-[52px] xl:py-[60px] px-[20px] lg:px-[40px] xl:px-[80px]'>
            <div className='w-full sm:max-w-[560px] m-auto mb-[40px] lg:mb-[52px] xl:mb-[64px] last:mb-0'>
                <Label className='text-center mb-[12px] last:mb-0'>Our Services</Label>

                <Subtitle className='text-center mb-[16px] last:mb-0'>The world’s best companies trust Next</Subtitle>

                <Content className='text-center'>
                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. Its not Latin,
                    though it looks like it
                </Content>
            </div>

            <div className='w-full block md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[20px] lg:gap-[24px]'>
                {servicesBlocks.map(({ id, data }) => (
                    <ServicesBlock data={data} key={id} />
                ))}
            </div>
        </section>
    );
};

export default Services;
