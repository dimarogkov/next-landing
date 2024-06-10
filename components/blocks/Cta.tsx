import { SimpleLinkTypes } from '@/types/enums/SimpleLinkTypes';
import { BtnLinkTypes } from '@/types/enums/BtnLinkTypes';

import ButtonLink from '../ui/ButtonLink';
import Content from '../ui/Content';
import Title from '../ui/Title';
import SimpleLink from '../ui/SimpleLink';

const Cta = () => {
    return (
        <section className='w-full max-w-[1440px] m-auto py-[48px] lg:py-[52px] xl:py-[60px] px-[20px] lg:px-[40px] xl:px-[80px]'>
            <div className='w-full rounded-[16px] py-[50px] lg:py-[72px] xl:py-[88px] px-[20px] lg:px-[32px] xl:px-[40px] bg-gradient-to-r from-fuchsia-600 to-orange-500'>
                <div className='w-full sm:max-w-[85%] md:max-w-[600px] lg:max-w-[750px] text-center m-auto'>
                    <Title className='text-[#fff] md:font-medium mb-[24px] lg:mb-[32px] xl:mb-[48px] last:mb-0'>
                        Monitor your website like a pro
                    </Title>

                    <Content className='text-[#fff] mb-[40px] lg:mb-[48px] xl:mb-[56px] last:mb-0'>
                        Join over 800+ happy site owners boosting productivity and efficiency!
                    </Content>

                    <div className='block sm:flex items-center justify-center gap-[40px]'>
                        <ButtonLink href='/' type={BtnLinkTypes.white} className='mb-[24px] sm:mb-0'>
                            Try for free
                        </ButtonLink>

                        <SimpleLink href='/' type={SimpleLinkTypes.white} className='justify-center'>
                            Contact Sales
                        </SimpleLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
