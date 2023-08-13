
import { Button } from './Button';

export const Footer = () => {
    return (
        <footer className="bg-black text-white text-md py-10 px-14 flex flex-col">
            <div className='container mx-auto max-w-[1200px]'>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-0">
                    <p className="cursor-pointer">Skyline</p>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-5 w-full'>
                        <p className="cursor-pointer">Home</p>
                        <p className="cursor-pointer">Features</p>
                        <p className="cursor-pointer">Services</p>
                    </div>
                    <p className="cursor-pointer">Contact us</p>
                </div>
            </div>

            <div>
                <p className="text-white text-md text-center mt-10">Development by Sandra Alzate & Alejandro Perdomo</p>
            </div>
        </footer>






    )
}