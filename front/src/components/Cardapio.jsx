import bg from "../assets/image/bgBuffe.jpg";
import sobremesa from "../assets/image/buffet/sobremesa.jpeg";
import bebidas from "../assets/image/buffet/bebidas.jpg";
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';
import entrada from '../assets/image/buffet/Entrada.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import guarnicao from "../assets/image/buffet/guarnicao.jpeg"
import { useState } from "react";
import { useMinHeight } from "./useMinHeight";

const arrayMenu = [
    {
        id: 0,
        type: "Entrada",
        img: entrada,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Anéis de cebola com barbecue"
            },
            {
                id: 1,
                number: 2,
                name: "Batata frita"
            },
            {
                id: 2,
                number: 3,
                name: "Linguiça"
            },
            {
                id: 3,
                number: 4,
                name: "Pão de alho"
            },
        ]
    },
    {
        id: 1,
        type: "Carnes",
        img: capaBuffet,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Alcatra"
            },
            {
                id: 1,
                number: 2,
                name: "Coração de alcatra"
            },
            {
                id: 2,
                number: 3,
                name: "Coração de frango"
            },
            {
                id: 3,
                number: 4,
                name: "Drumet"
            },
            {
                id: 4,
                number: 5,
                name: "Linguiça suína ou toscana"
            },
            {
                id: 5,
                number: 6,
                name: "Linguiça suína ou toscana"
            },
            {
                id: 6,
                number: 7,
                name: "Linguiça calabresa"
            },
            {
                id: 7,
                number: 8,
                name: "Maminha"
            },
        ]
    },
    {
        id: 2,
        type: "Sobremesa",
        img: sobremesa,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Banana com cobertura"
            },
            {
                id: 1,
                number: 2,
                name: "Canela"
            },
            {
                id: 2,
                number: 3,
                name: "Sorvete"
            },
        ]
    },
    {
        id: 3,
        type: "Bebidas",
        img: bebidas,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Água"
            },
            {
                id: 1,
                number: 2,
                name: "Brahma (1,4 litros por pessoa)"
            },
            {
                id: 2,
                number: 3,
                name: "Mate"
            },
            {
                id: 3,
                number: 4,
                name: "Refrigetante comum e zero"
            },
        ]
    },
]

const arrayGuarnicao = {
    type: "Guarnições",
    img: guarnicao,
    menu: [
        {
            id: 0,
            number: 1,
            name: "Arroz branco"
        },
        {
            id: 1,
            number: 2,
            name: "Batata calabresa"
        },
        {
            id: 2,
            number: 3,
            name: "Feijão fradinho"
        },
        {
            id: 3,
            number: 4,
            name: "Farofa"
        },
        {
            id: 4,
            number: 5,
            name: "Maionese"
        },
        {
            id: 5,
            number: 6,
            name: "Salpicão"
        },
        {
            id: 6,
            number: 7,
            name: "Salada verde ou legumes"
        },
        {
            id: 7,
            number: 8,
            name: "Tabule"
        },
        {
            id: 8,
            number: 9,
            name: "Vinagrete ou molho"
        },
    ]
}

export function Cardapio() {

    const ocultarImage = useMinHeight();
    const [expandir, setExpandir] = useState(false);

    return (
        <div className="w-full h-screen z-50 bg-fixed text-zinc-50 " style={{ backgroundImage: `url(${bg})` }}>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
            >
                {arrayMenu.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative">
                            <h1 className="text-center dacingScriptPersonalizada">{item.type}</h1>

                            <div className="lg:flex lg:items-center">

                                {ocultarImage ? "" : <img src={item.img} alt="Entrada" className="w-full lg:h-screen lg:max-w-4xl object-cover" />}


                                <div className="bg-zinc-900/95 duration-700 text-center h-screen w-full">

                                    <div>
                                        {arrayMenu[item.id].menu.map((menu) => (
                                            <span key={menu.id} className="flex justify-start items-center py-2 px-1 border-dashed border-zinc-50/60 border-b-2 w-full gap-1">
                                                <p>{menu.number}</p>
                                                <FontAwesomeIcon icon={faHashtag} className="text-[#D70319]" />
                                                <p className="dacingScript text-3xl" >{menu.name}</p>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className="relative">
                        <h1 className="text-center dacingScriptPersonalizada">{arrayGuarnicao.type}</h1>

                        <div className="lg:flex lg:items-center">

                            {ocultarImage ? "" : <img src={arrayGuarnicao.img} alt={"foto da " + (arrayGuarnicao.type)} className="lg:h-screen lg:max-w-4xl object-cover" />}


                            <div className={"bg-zinc-900/95 duration-700 text-center h-screen w-full absolute lg:static " + (expandir ? " top-0 " : "top-full ")}>

                                {ocultarImage ?
                                    "" :
                                    <button className={"bg-zinc-50/80 animate-bounce px-2 rounded-md relative bottom-8 lg:hidden" + (expandir ? "hidden" : "")} onClick={() => setExpandir(true)}>
                                        <FontAwesomeIcon icon={faAnglesUp} className="text-zinc-950 text-4xl" />
                                    </button>}


                                <div>
                                    {arrayGuarnicao.menu.map((menu) => (
                                        <span key={menu.id} className="flex justify-start items-center py-2 px-1 border-dashed border-zinc-50/60 border-b-2 w-full gap-1">
                                            <p>{menu.number}</p>
                                            <FontAwesomeIcon icon={faHashtag} className="text-[#D70319]" />
                                            <p className="dacingScript text-3xl" >{menu.name}</p>
                                        </span>
                                    ))}
                                </div>

                                {ocultarImage ?
                                    "" :
                                    <button className="bg-zinc-50/80 animate-bounce px-2 rounded-md mt-5 lg:hidden" onClick={() => setExpandir(false)}>
                                        <FontAwesomeIcon icon={faAnglesDown} className="text-zinc-950 text-3xl" />
                                    </button>}

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}