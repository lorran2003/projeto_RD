import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUtensils, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Cardapio } from '../components/Cardapio';
import { Pedido } from '../components/Pedido';
import capaSalao from '../assets/image/salao/capaSalaoDesktop.jpeg';
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';
import { Salao } from './Salao/Salao';

export function MobileView() {
    const [overFlowHidden, setOverFlowHidden] = useState(false);
    const [modalCardapio, setModalCardapio] = useState(false);
    const [modalPedido, setModalPedido] = useState(false);
    const [salao, setSalao] = useState(false);
    const cardapio = "cardapio";
    const pedido = "pedido";

    // função para abrir os modais
    function isOpenModal(string) {

        switch (string) {
            case "cardapio":
                setModalCardapio(true);
                setOverFlowHidden(true);
                setSalao(false)
                break;

            case "pedido":
                setModalPedido(true);
                setOverFlowHidden(true);
                setSalao(false);
                break;

            default:
                break;
        }
    }

    // função para fechar modais
    function onRequestCloseModal(string) {
        switch (string) {
            case "cardapio":
                setModalCardapio(false);
                setOverFlowHidden(false);
                break;

            case "pedido":
                setModalPedido(false);
                setOverFlowHidden(false);
                break;

            default:
                break;
        }
    }

    // retirando o scroll quando abrir algum modal
    useEffect(() => {
        overFlowHidden ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [overFlowHidden]);
    return (
        <>
            <div className='relative w-full'>

                <div className='absolute flex p-2'>

                    <button className='relative left-2 bg-zinc-50 px-3 rounded-md shadow-md shadow-zinc-950 ' onClick={() => isOpenModal(cardapio)}>
                        <FontAwesomeIcon icon={faBars} className='text-zinc-950 text-xl' />
                    </button>

                    <button className='dacingScript flex justify-center items-center bg-zinc-50 text-zinc-800 w-48 text-2xl rounded-r-2xl' onClick={() => isOpenModal(cardapio)}>

                        <div className={overFlowHidden ? "animate-pulse" : "animate-bounce "}>

                            <FontAwesomeIcon icon={faUtensils} />

                            <span>
                                Cardápio aqui!
                            </span>
                        </div>
                    </button>
                </div>

                <img src={capaBuffet} alt='foto de picanha' className='w-full' />

                <button className='dacingScript absolute bottom-0 bg-[#3FE05C] text-zinc-50 text-2xl p-2 rounded-r-md' onClick={() => isOpenModal(pedido)}  >

                    <div className='flex gap-2 justify-center items-center'>

                        <span>Faça seu orçamento!</span>

                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>

                </button>
            </div>

            <div className='p-4 bg-zinc-950/80'>
                <p className='text-justify roboto-light'>
                    Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar. Combinando técnicas tradicionais com os melhores cortes, entregamos uma explosão de sabores que vai conquistar até os paladares mais exigentes. Venha saborear a excelência culinária e descubra por que nosso churrasco é simplesmente incomparável.
                </p>
            </div>

            <div>

                <div className={'duration-1000 overflow-hidden relative ' + (salao ? "h-auto" : "h-0")}>
                    <button className='bg-red-800 w-10 h-10 rounded-md absolute z-50 right-1 top-1' onClick={() => setSalao(false)}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <Salao />
                </div>

                <div className='w-full relative'>

                    <div className='absolute flex p-2'>

                        <button className='relative left-2 bg-zinc-50 px-3 rounded-md shadow-md shadow-zinc-950' onClick={() => setSalao(!salao)}>
                            <FontAwesomeIcon icon={faBars} className='text-zinc-950 text-xl' />
                        </button>

                        <button className='dacingScript flex justify-center items-center bg-zinc-50 text-zinc-800 w-48 text-2xl rounded-r-2xl' onClick={() => setSalao(!salao)}>

                            <div className={salao ? "animate-pulse" : "animate-bounce"}>
                                <FontAwesomeIcon icon={faImage} />
                                <span>Fotos aqui!</span>
                            </div>
                        </button>
                    </div>

                    <img src={capaSalao} alt='foto de picanha' className='w-full' />

                    <button className='dacingScript absolute bottom-0 bg-[#3FE05C] text-zinc-50 text-2xl p-2 rounded-r-md' onClick={() => isOpenModal(pedido)} >

                        <div className='flex gap-1 justify-center items-center'>
                            <span>Faça seu orçamento!</span>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>

                    </button>
                </div>

                <div className='p-4 bg-zinc-950/80'>
                    <p className='text-justify roboto-light'>
                        Descubra o lugar ideal para tornar seus momentos especiais! Nosso espaço oferece o cenário perfeito para celebrar com estilo e conforto. Com espaços amplos e piscina, estamos prontos para receber eventos de todos os tipos, desde festas de aniversário até eventos corporativos. Além disso, nossa equipe dedicada está aqui para ajudar a tornar seu evento perfeito em todos os detalhes. Venha nos visitar e descubra por que somos a escolha preferida para quem busca qualidade, praticidade e uma experiência única. Seja qual for a ocasião, estamos aqui para torná-la memorável!
                    </p>
                </div>

            </div>

            {/* modal com cardapio */}
            <Modal
                isOpen={modalCardapio}
                onRequestClose={() => onRequestCloseModal(cardapio)}
                className={"object-cover inset-0 z-50"}>

                <div className='relative w-full bg-fixed bg-cover'>

                    <button className='absolute animate-pulse right-1 bottom-60 bg-[#05F248] w-12 h-12 rounded-lg z-50' onClick={() => onRequestCloseModal(cardapio)}>
                        <FontAwesomeIcon icon={faX} style={{ color: "white" }} />
                    </button>

                    <Cardapio />

                </div>
            </Modal>

            {/* modal dp pedido  */}
            <Modal
                isOpen={modalPedido}
                onRequestClose={!modalPedido}
                className={"object-cover inset-0 z-50"}>

                <div className='relative w-full bg-fixed bg-cover bg-zinc-800/90 '>

                    <button className='absolute animate-pulse right-4 top-40 bg-[#05F248] w-12 h-12 rounded-lg z-50 animate-' onClick={() => onRequestCloseModal(pedido)}>
                        <FontAwesomeIcon icon={faX} style={{ color: "white" }} />
                    </button>

                    <Pedido />

                </div>
            </Modal>
        </>
    )
}