import Cta from '@/components/blocks/Cta';
import Faq from '@/components/blocks/Faq';
import Services from '@/components/blocks/Services';

const ServicesPage = () => {
    return (
        <main className='relative w-full pt-[72px] lg:pt-[68px] xl:pt-[84px]'>
            <Services />
            <Faq />
            <Cta />
        </main>
    );
};

export default ServicesPage;
