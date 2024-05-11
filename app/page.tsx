import About from '@/components/blocks/About';
import Banner from '@/components/blocks/Banner';
import Cta from '@/components/blocks/Cta';
import Faq from '@/components/blocks/Faq';
import Pricing from '@/components/blocks/Pricing';

const HomePage = () => {
    return (
        <main className='relative w-full'>
            <Banner />
            <About />
            <Pricing />
            <Faq />
            <Cta />
        </main>
    );
};

export default HomePage;
