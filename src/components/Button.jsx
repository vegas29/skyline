export const Button = ({type, textButton}) => {
    return (
        <button className="col-start-5 col-end-9 row-start-6 row-end-7 mb-10 relative p-[9px] overflow-hidden text-black font-semibold text-md transition-colors duration-300 hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 74" fill="none" className="absolute top-0 left-0 w-full h-full">
                <path d="M2 24.037L30.1469 2H232V54.5L205.462 72H2V24.037Z" stroke="#02B1BA" strokeWidth="3"/>
            </svg>
            <span className="relative z-10 text-white hover:text-gray-300">{textButton}</span>
        </button>
    )
}
