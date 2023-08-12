import { Title } from "./Title"

export const AboutUs = () => {
    return (
        <section className="px-14 py-10 md:py-20 bg-black">

            <div className="container max-w-[1200px] mx-auto">
                <Title text={'About Us'} color={'white'} />

                <div className="border-l-4 border-cyan-400 mt-10 text-white">
                    <p className="text-left pl-5 pt-5">
                        Somos un team experimentado en diseño y desarrollo web, inmersos en el fascinante mundo tecnológico. Mantenemos años de experiencia y seguimos actualizados con las tendencias más recientes. Nuestra meta es llevar sus ideas y proyectos a un nivel superior, fusionando creatividad y tecnología para lograr resultados excepcionales. 
                    </p>
                    <p className="text-left pl-5 py-5">
                        ¡Saludos!
                    </p>

                </div>
            </div>


        </section>
    )
}
