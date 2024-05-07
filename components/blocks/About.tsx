import { aboutBlocks } from '@/data/aboutBlocks';
import AboutBlock from '../elements/AboutBlock';

const About = () => {
    return (
        <section className='w-full max-w-[1440px] m-auto py-[56px] lg:py-[80px] xl:py-[120px] px-[20px] lg:px-[40px] xl:px-[80px]'>
            {aboutBlocks.map(({ id, data, colorType }) => (
                <AboutBlock data={data} isBlockOdd={id % 2 === 0} colorType={colorType} key={id} />
            ))}
        </section>
    );
};

export default About;
