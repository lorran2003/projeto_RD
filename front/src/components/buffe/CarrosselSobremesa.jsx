import batataFrita from "../../assets/image/buffet/entrada/batata_frita.jpg";
import linguica from "../../assets/image/buffet/entrada/linguica.jpg";
import anelDeCebola from "../../assets/image/buffet/entrada/anel_de_cebola.jpg";
import pao from "../../assets/image/buffet/entrada/pao_de_alho.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";

const entrada = [
    {
        id: 1,
        img: pao,
        text: "Pão de alho"
    },
    {
        id: 2,
        img: batataFrita,
        text: "Batata frita"
    },
    {
        id: 3,
        img: linguica,
        text: "Linguiça"
    },
    {
        id: 4,
        img: anelDeCebola,
        text: "Anéis de cebola com barbecue"
    },
]
export function CarrosselSobremesa() {
    return (

        <div className="w-full text-center">

            <div className="py-5">
                <h3 className="text-2xl after:block after:h-0.5 after:w-full after:bg-[#F20505] after:opacity-60 bg-zinc-900">Sobremesas</h3>
            </div>


            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                direction="horizontal"
                loop={true}
                autoplay={{ delay: 1400 }}
            >
                {entrada.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div>
                            <img src={item.img} alt={item.text} className="h-72 w-72" />
                            <p>{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    )
}