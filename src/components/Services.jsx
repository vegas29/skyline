import { ServiceCard } from "./ServiceCard";
import { Title } from "./Title";

import service1 from '../assets/png/service1.png';
import service2 from '../assets/png/service2.png';
import service3 from '../assets/png/service3.png';
import service4 from '../assets/png/service4.png';

export const Services = () => {
    return (
        <section id="services" className="py-10 md:pt-20 px-10 md:px-0 bg-black">
            <div className="container mx-auto max-w-[1200px]">
                <Title text={'Services'} color={'white'} />

                <div className="flex flex-col md:flex-row gap-10 md:gap-10 mt-10 md:mt-20">
                    <ServiceCard defaultText={'Design'} imageSrc={service1}/>
                    <ServiceCard defaultText={'Web development'} imageSrc={service2}/>
                    <ServiceCard defaultText={'Mobile development'} imageSrc={service3}/>
                    <ServiceCard defaultText={'Desktop development'} imageSrc={service4}/>
                </div>
            </div>
        </section>
    )
}
