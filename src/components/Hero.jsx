import { useTranslation } from 'react-i18next';
import hero from '../assets/png/hero.png';
import { Button } from './Button';

export const Hero = () => {

    const { t } = useTranslation();

    return (
        <header id='hero' className="bg-black h-[700px] md:h-[700px] text-center relative z-30">
            <div className="z-40 relative container flex flex-col md:grid md:grid-cols-12 grid-rows-12 justify-center items-center h-full mx-auto md:pt-5 text-center">

                <div className="col-start-2 col-end-12 md:col-start-5 md:col-end-9 grid grid-cols-12 grid-rows-12 justify-center items-center h-full">
                    <div className="col-start-1 col-end-13 row-start-4 row-end-5">
                        <h2 className="text-white text-2xl lg:text-3xl font-bold uppercase">Skyline</h2>
                        <p className="text-white text-md mt-5">{t('Transforming your vision into a digital reality')}</p>
                    </div>

                    <Button textButton={'Ir a la página'} link={'#aboutus'}/>

                </div>

                <div className="md:col-start-12 md:col-end-13 flex md:flex-col items-center justify-center gap-10">
                    <p className="md:rotate-90 text-cyan-400 uppercase text-[13px] font-bold">Social Networks</p>
                    <div className="none md:border-l-2 border-cyan-400 h-24 mx-auto mt-10"></div>
                    <div className="text-cyan-400 flex md:flex-col gap-3">
                        <div>
                            <a href='https://www.linkedin.com/in/sandra-milena-alzate-alzate-24a97b1b0/' target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-facebook-f hover:cursor-pointer"></i>
                            </a>
                        </div>

                        <div>
                            <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-twitter hover:cursor-pointer"></i>
                            </a>
                        </div>

                        <div>
                            <a href='https://www.linkedin.com/in/sandra-milena-alzate-alzate-24a97b1b0/' target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-linkedin-in hover:cursor-pointer"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-gradient-to-r from-gray-950 via-gray-950 to-gray-900 absolute top-0 bottom-0 h-full">
                <img className="w-screen object-cover h-full object-center opacity-40" src={hero} alt="Hero Image" loading="lazy" />
            </div>
        </header>
    )
}
