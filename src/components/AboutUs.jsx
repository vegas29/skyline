import { useTranslation } from "react-i18next";
import { Title } from "./Title";

export const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <section id="aboutus" className="px-14 py-10 md:py-20 bg-black">

            <div className="container max-w-[1200px] mx-auto">
                <Title text={'About us'} color={'white'} />

                <div className="border-l-4 border-cyan-400 mt-10 text-white">
                    <p className="text-left pl-5 pt-5">
                        {t('We are an experienced team in the design of graphic interfaces and development of platforms in web, mobile and desktop environments, immersed in the fascinating technological world. We are trained for big challenges and we keep up to date with the latest trends. Our goal is to take your ideas and projects to the next level, merging creativity and technology to achieve exceptional results.')}</p>
                    <p className="text-left pl-5 py-5">
                        {t('Greetings')}
                    </p>

                </div>
            </div>


        </section>
    )
}
