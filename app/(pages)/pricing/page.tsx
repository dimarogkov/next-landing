import Cta from '@/components/blocks/Cta';
import Faq from '@/components/blocks/Faq';
import Pricing from '@/components/blocks/Pricing';

const PricingPage = () => {
    return (
        <main className='relative w-full pt-[72px] lg:pt-[68px] xl:pt-[84px]'>
            <Pricing />
            <Faq />
            <Cta />
        </main>
    );
};

export default PricingPage;
