import { ImageCard } from "./ImageCard";
import { Title } from "./Title";

//Imgs
import card1 from '../assets/png/card1.png';
import card2 from '../assets/png/card2.png';
import card3 from '../assets/png/card3.png';

export const Features = () => {
    return (
        <section id="features" className="py-10 md:pt-20 container mx-auto max-w-[1200px]">
            <Title text={'Features'} color={'dark'} />

            <div className="flex flex-col md:flex-row gap-10 items-center justify-between my-20 mx-10 md:mx-0">
                <ImageCard
                    imageSrc={card1}
                    defaultText="Evaluación de calidad"
                    hoverText="Tus soluciones se centran en la usabilidad y la interacción fluida para los usuarios."
                />
                <ImageCard
                    imageSrc={card2}
                    defaultText="Diseño responsivo"
                    hoverText="Tus soluciones se centran en la usabilidad y la interacción fluida para los usuarios."
                />
                <ImageCard
                    imageSrc={card3}
                    defaultText="Funcionalidades avanzadas y rendimiento óptimo"
                    hoverText="Tus soluciones se centran en la usabilidad y la interacción fluida para los usuarios."
                />
            </div>
        </section>
    )
}
