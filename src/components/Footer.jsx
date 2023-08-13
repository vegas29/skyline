export const Footer = () => {
    return (
        <footer className="bg-black text-white text-md py-10 px-14 flex flex-col">
            <div className='container mx-auto max-w-[1200px]'>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-0">
                    <div className='w-1/3 md:w-full flex justify-center md:justify-start text-center md:text-left cursor-pointer'>
                        <a to="#" >Skyline</a>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-5 w-1/3 md:w-full'>
                        <a to="#hero" className="cursor-pointer">Home</a>
                        <a to="#features" className="cursor-pointer">Features</a>
                        <a to="#services" className="cursor-pointer">Services</a>
                    </div>
                    <div className="w-1/3 md:w-full flex justify-center md:justify-end">
                        <a to="#contactus" className="inline-block relative px-6 py-3 transition duration-500 ease-in-out bg-cyan-500 hover:bg-cyan-600 text-white">
                            <span className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-black w-8 h-8 rotate-45"></span>
                            <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-black w-8 h-8 -rotate-45"></span>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-white text-md text-center mt-10">Development by Sandra Alzate & Alejandro Perdomo</p>
            </div>
        </footer>
    )
}