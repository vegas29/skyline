import { ImageCard } from "./ImageCard";
import { Title } from "./Title";

//Imgs
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

export const Features = () => {
    return (
        <section className="py-10 md:pt-20 container mx-auto">
            <Title text={'Features'} color={'dark'} />

            <div className="flex flex-col md:flex-row items-center justify-center my-10">
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
