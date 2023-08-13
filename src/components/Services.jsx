import { ServiceCard } from "./ServiceCard";
import { Title } from "./Title";

import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

export const Services = () => {
    return (
        <section className="py-10 md:pt-20 px-10 md:px-0 bg-black">
            <div className="container mx-auto max-w-[1200px]">
                <Title text={'Services'} color={'white'} />

                <div className="flex flex-col md:flex-row gap-10 md:gap-10 mt-10 md:mt-20">
                    <ServiceCard defaultText={'Design'} imageSrc={service1}/>
                    <ServiceCard defaultText={'Web Development'} imageSrc={service2}/>
                    <ServiceCard defaultText={'Mobile Development'} imageSrc={service3}/>
                    <ServiceCard defaultText={'Desktop Development'} imageSrc={service4}/>
                </div>
            </div>
        </section>
    )
}
