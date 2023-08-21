
import { Title } from "./Title";
import { Button } from "./Button";
import { PortfolioCard } from "./PortfolioCard";

import work1 from '../assets/png/work1.png';
import work2 from '../assets/png/work2.png';
import work3 from '../assets/png/work3.png';
import work4 from '../assets/png/work4.png';
import work5 from '../assets/png/work5.png';
import work6 from '../assets/png/work6.png';

import logoReact from '../assets/svg/react.svg';
import logoTailwind from '../assets/svg/tailwind.svg';
import logoCSS from '../assets/svg/css.svg';
import logoHTML from '../assets/svg/html5.svg';
import logoBoot from '../assets/svg/boot.svg';
import logoElectron from '../assets/svg/electron.svg';
import logoFirebase from '../assets/svg/firebase.svg';
import logoStrapi from '../assets/svg/strapi.svg';

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-10 md:pt-20 px-10 md:px-0 bg-black">
            <div className="container mx-auto max-w-[1200px]">
                <Title text={'Portfolio'} color={'white'} />

                <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-10 my-10 md:my-24">
                    <PortfolioCard defaultText={'Bugitech'} imageSrc={work1} link={'https://bugitech.netlify.app/'}>
                        <div className="flex justify-center gap-5 items-center">
                            <img src={logoReact} alt="Logo React" />    
                            <img src={logoTailwind} alt="Logo Tailwind"/>    
                        </div>
                    </PortfolioCard>
                    <PortfolioCard defaultText={'Arquitectura Bosque'} imageSrc={work2} link={'https://architectureforest.netlify.app/'}>
                        <div className="flex justify-center gap-5 items-center">
                            <img src={logoReact} alt="Logo React" />    
                            <img src={logoCSS} alt="Logo css3" className="h-10 text-white" />    
                        </div>
                    </PortfolioCard>
                    <PortfolioCard defaultText={'Blog Cafe'} imageSrc={work3} link={'https://blogdelcafev2.netlify.app/'}>
                        <div className="flex justify-center gap-5 items-center">
                            <img src={logoHTML} alt="Logo HTML" className="h-12 text-white" />    
                            <img src={logoCSS} alt="Logo css3" className="h-10 text-white" />  
                        </div>
                    </PortfolioCard>
                    <PortfolioCard defaultText={'Tifi'} imageSrc={work4} link={'https://virgin-entregas.netlify.app/login'}>
                        <div className="flex justify-center gap-5 items-center">
                            <img src={logoReact} alt="Logo React" />    
                            <img src={logoBoot} alt="Logo Bootstrap" className="h-10 text-white" />  
                        </div>
                    </PortfolioCard>
                    <PortfolioCard defaultText={'Clon Spotify'} imageSrc={work5}>
                        <div className="flex justify-center gap-5 items-center">
                            <img src={logoElectron} alt="Logo Electron" className="h-12 text-white" />    
                            <img src={logoFirebase} alt="Logo Firebase" className="h-10 text-white" />  
                        </div>
                    </PortfolioCard>
                    <PortfolioCard defaultText={'TechnoStoreLA'} imageSrc={work6} link={'https://technostorela.netlify.app/'}>
                        <div className="flex justify-center gap-5 items-center">
                            <img src={logoReact} alt="Logo React" />    
                            <img src={logoStrapi} alt="Logo Strapi" className="h-10 text-white" />  
                        </div>
                    </PortfolioCard>
                </div>

                {/* Habilitar cuanto metamos los otros proyectos */}

                {/* <div className="flex justify-center mt-10"> 
                    <Button textButton={'Más proyectos'}/>
                </div> */}
            </div>
        </section>
    )
}
