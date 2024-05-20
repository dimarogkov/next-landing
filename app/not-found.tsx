import ButtonLink from '@/components/ui/ButtonLink';
import Content from '@/components/ui/Content';
import Title from '@/components/ui/Title';

const NotFoundPage = () => {
    return (
        <main className='relative w-full h-screen pt-[72px] lg:pt-[68px] xl:pt-[84px]'>
            <section className='flex items-center w-full h-full max-w-[1440px] m-auto py-[48px] lg:py-[52px] xl:py-[60px] px-[20px] lg:px-[40px] xl:px-[80px]'>
                <div className='w-full sm:max-w-[560px] m-auto'>
                    <Title text='Page Not Found' styles='text-center mb-[12px] last:mb-0' />

                    <div className='text-center mb-[24px] last:mb-0'>
                        <Content text='This page doesn’t exist or was removed!' />
                        <Content text='We suggest you go back to home.' />
                    </div>

                    <ButtonLink href='/' name='Go Back-Home' styles='m-auto' />
                </div>
            </section>
        </main>
    );
};

export default NotFoundPage;
