import img from "../assets/image/imgHome.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export function Home() {


    useGSAP(() => {

        let animationGsap = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);
            gsap.to("#img", {
                x: 0,
                duration: 1,

                scrollTrigger: {
                    trigger: "#divImg",
                    start: "top 90%",
                }

            })
            gsap.to("#text", {
                opacity: 1,
                duration:1,

                scrollTrigger: {
                    trigger: "#text",
                    start: "top 60%",
                }

            })
        })

        return () => { animationGsap.revert() }

    }, [])

    return (
        <div className="relative w-full flex justify-center items-center lg:flex lg:justify-start lg:items-start">
            <div id="divImg" className="w-full object-cover lg:w-full">
                <img id="img" src={img} alt="imagem RD churrasco" className="w-full object-cover -translate-x-full lg:w-full lg:h-auto" />
            </div>
            <div id="text" className="absolute bottom-0 opacity-0 h-auto text-justify text-zinc-50 bg-zinc-800 p-4 lg:sticky lg:top-0 lg:w-full lg:py-10">
                <p className="sm:text-3xl roboto-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe veniam tenetur repudiandae quisquam, fuga eaque earum harum, adipisci ratione nisi voluptates numquam, inventore est accusamus debitis non dolorem rerum.
                </p>
            </div>
        </div>
    );

}