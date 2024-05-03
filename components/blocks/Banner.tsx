import { bannerLogos } from '@/data/bannerLogos';
import { mainStyles } from '@/variables/mainStyles';

import Image from 'next/image';

import ButtonLink from '../ui/ButtonLink';
import Content from '../ui/Content';
import SimpleLink from '../ui/Link';
import Title from '../ui/Title';

import BannerImg from '@/public/banner.svg';
import BannerBg from '@/public/banner_bg.svg';

const Banner = () => {
    const { container, padding } = mainStyles;

    return (
        <section className='relative w-full'>
            <div className='relative w-full z-10'>
                <div className='w-full max-w-[630px] md:max-w-[820px] lg:max-w-[886px] px-[20px] py-[16px] lg:py-[60px] m-auto'>
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
                <div className='w-full'>
                    <Image src={BannerImg} alt='bannerImg' className='w-full md:w-[80%] lg:w-[70%] xl:w-[62%] m-auto' />

                    <div
                        className={`${container} ${padding} block xl:flex items-center justify-between pb-[32px] lg:pb-[40px] xl:pb-[80px]`}
                    >
                        <Content
                            text='Trusted by these companies'
                            styles='w-full lg:w-auto text-center xl:text-left text-[#fff] mb-[20px] sm:mb-[24px] xl:mb-0 last:mb-0'
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
                </div>
            </div>

            <Image
                src={BannerBg}
                alt='bannerBg'
                className='absolute bottom-0 left-0 w-full h-[50%] object-cover object-center'
            />
        </section>
    );
};

export default Banner;
