export const Title = ({color, text}) => {
    return (
        color === 'dark' ? (
            <h2 className="text-black text-center font-bold uppercase text-xl md:text-4xl">
                <span className="relative z-10">
                    <span className="absolute top-5 md:top-[2.3rem] left-1/2 md:left-1/3 transform -translate-x-4 -translate-y-1/2 w-20 md:w-36 h-2 md:h-3 bg-cyan-400 -z-10"></span>
                    {text}
                </span>
            </h2>
        ) : (
            <h2 className="text-white text-center font-bold uppercase text-xl md:text-4xl">
                <span className="relative z-10">
                    <span className="absolute top-5 md:top-[2.3rem] left-1/2 md:left-1/3 transform -translate-x-4 -translate-y-1/2 w-20 md:w-36 h-2 md:h-3 bg-cyan-400 -z-10"></span>
                    {text}
                </span>
            </h2>
        )
    )
}
