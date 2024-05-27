import img from "../assets/image/imgHome.png"
export function Home(){
    return(

        <>
        <div className="relative w-full flex justify-center items-center lg:flex lg:justify-start lg:items-start">
            <div className="w-full object-cover lg:w-full">
                <img src={img} alt="imagem RD churrasco" className="w-full object-cover lg:w-full lg:h-auto"/>    
            </div>
            <div className="absolute bottom-0 h-auto text-justify text-zinc-50 bg-zinc-800 p-4 lg:sticky lg:top-0 lg:w-full lg:py-10">
                <p className="sm:text-3xl roboto-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe veniam tenetur repudiandae quisquam, fuga eaque earum harum, adipisci ratione nisi voluptates numquam, inventore est accusamus debitis non dolorem rerum.
                </p>
            </div>
        </div>
        </>
    );

}