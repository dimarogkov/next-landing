import { bannerLogos } from '@/data/bannerLogos';

import Image from 'next/image';

import ButtonLink from '../ui/ButtonLink';
import Content from '../ui/Content';
import SimpleLink from '../ui/Link';
import Title from '../ui/Title';

const Banner = () => {
    return (
        <section className='relative flex flex-col w-ful sm:min-h-screen pt-[72px] lg:pt-[68px] xl:pt-[84px] pb-[32px] lg:pb-[60px]'>
            <div className='flex items-center grow w-full max-w-[630px] md:max-w-[720px] lg:max-w-[886px] px-[20px] py-[32px] lg:py-[60px] m-auto'>
                <div className='relative w-full'>
                    <Title
                        text='Start monitoring your website like a pro'
                        styles='text-center max-w-[350px] sm:max-w-full m-auto mb-[24px] last:mb-0'
                    />
                    <Content
                        text='Get a birds eye view with our customizable dashboard. Stay on top of things! Revamp your work
                        process with our game-changing feature. Boost productivity and efficiency!'
                        styles='text-center mb-[32px] md:mb-[24px] last:mb-0'
                    />
                    <div className='block sm:flex items-center justify-center gap-[40px]'>
                        <ButtonLink href='/' name='Try for free' />
                        <SimpleLink href='/' name='View Pricing' />
                    </div>
                </div>
            </div>
            <div className='block xl:flex items-center justify-between w-full max-w-[1440px] px-[20px] lg:px-[40px] xl:px-[80px] m-auto'>
                <Content
                    text='Trusted by these companies'
                    styles='w-full lg:w-auto text-center xl:text-left text-[#36485C] mb-[20px] sm:mb-[24px] xl:mb-0 last:mb-0'
                />

                <div className='w-full xl:w-auto flex items-center justify-center xl:justify-end flex-wrap gap-x-[32px] sm:gap-x-[40px] md:gap-x-[48px] lg:gap-x-[64px] xl:gap-x-[70px] gap-y-[8px]'>
                    {bannerLogos.map(({ id, src, name }) => (
                        <Image
                            src={src}
                            alt={name}
                            key={id}
                            className='w-auto h-[48px] md:h-[52px] lg:h-[56px] xl:h-[60px]'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
