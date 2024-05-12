import About from '@/components/blocks/About';
import Cta from '@/components/blocks/Cta';
import Pricing from '@/components/blocks/Pricing';

const AboutPage = () => {
    return (
        <main className='relative w-full pt-[72px] lg:pt-[68px] xl:pt-[84px]'>
            <About />
            <Pricing />
            <Cta />
        </main>
    );
};

export default AboutPage;
