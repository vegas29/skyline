import { Title } from "./Title";

export const AboutUs = () => {
    return (
        <section id="aboutus" className="px-14 py-10 md:py-20 bg-black">

            <div className="container max-w-[1200px] mx-auto">
                <Title text={'About Us'} color={'white'} />

                <div className="border-l-4 border-cyan-400 mt-10 text-white">
                    <p className="text-left pl-5 pt-5">
                     Somos un equipo experimentado en el diseño de interfaces gráficas y desarrollo de plataformas en entornos web, móvil y escritorio, inmersos en el fascinante mundo tecnológico. Estamos capacitados para grandes retos y nos mantenemos actualizados con las últimas tendencias. Nuestro objetivo es llevar tus ideas y proyectos al siguiente nivel, fusionando creatividad y tecnología para conseguir resultados excepcionales.                     </p>
                    <p className="text-left pl-5 py-5">
                        ¡Saludos!
                    </p>

                </div>
            </div>


        </section>
    )
}
