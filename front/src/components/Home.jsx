import img from "../assets/image/imgHome.png"
export function Home(){
    return(

        <>
        <div className="relative flex justify-center items-center">
            <div className="border-zinc-600 border-solid sm:h-screen w-full">
                <img src={img} alt="imagem RD churrasco" className="rounded-r-md sm:h-full"/>    
            </div>
            <div className="absolute bottom-0 h-2/5 text-justify flex flex-col justify-center items-center text-zinc-50 bg-zinc-800/90 tetx">
                <p className="w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe veniam tenetur repudiandae quisquam, fuga eaque earum harum, adipisci ratione nisi voluptates numquam, inventore est accusamus debitis non dolorem rerum.
                </p>
            </div>
        </div>
        </>
    );

}