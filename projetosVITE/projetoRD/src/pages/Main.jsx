import { useState } from 'react';
import { Home } from '../components/Home';
import { MainSalao } from './MainPags/Salao/MainSalao';
import capaSalaoMobile from '../assets/image/salao/capaSalao.jpeg';
import capaBuffetMobile from '../assets/image/buffet/capaBuffet.jpeg';
import capaSalao from '../assets/image/salao/capaSalaoDesktop.jpeg';
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';

export function Main() {

    const [paginaSalao, setPaginaSalao] = useState(false);
    const [homePag, setHomePag] = useState(true);

    //array de cards
    const cards = [
        {
            id: 1,
            nome: "BUFFET",
            imgMobile: capaBuffetMobile,
            img: capaBuffet,
            funcao: () => setPaginaSalao(false)
        },
        {
            id: 2,
            nome: "SALAO",
            imgMobile: capaSalaoMobile,
            img: capaSalao,
            funcao: () => setPaginaSalao(true)
        }
    ]

    function home() {
        setHomePag(true);
        setPaginaSalao(false);
    }
    function servico() {
        setHomePag(false);
        setPaginaSalao(false);
    }




    return (
        <>
            <main className='py-8 flex flex-col text-zinc-100/80 bg-zinc-900/85'>

                <div className=' flex justify-center items-center w-full mb-6'>
                    <nav className="flex gap-5">
                        <button className={"hover:text-zinc-50 delay-75 " + (homePag ? "border-b-2 border-red-800" : "")} onClick={() => home()}>HOME</button>
                        <button className={"hover:text-zinc-50 delay-75 " + (!homePag ? "border-b-2 border-red-800" : "")} onClick={() => servico()}>SERVICOS</button>
                    </nav>

                </div>

                {paginaSalao && !homePag ? <MainSalao /> :
                    <div className=" flex flex-col items-center justify-center h-full">

                        {homePag ? <Home /> :
                            <div className="flex flex-col flex-wrap justify-center items-center w-full h-full text-zinc-900 sm:gap-[1px]">
                                {cards.map(card => (

                                    <div key={card.id} className="relative flex flex-col justify-center items-center w-full h-full rounded-3xl">

                                        <div className="rounded-md w-full">

                                            <div className='absolute flex flex-col justify-center items-center w-full py-1 text-zinc-50 bottom-0 sm:py-0'>

                                                <button className="shadow-[0_0_0_1px] shadow-zinc-900 bg-zinc-800/90 p-2 rounded-lg text-zinc-50 sm:w-full sm:h-14 sm:bg-zinc-800/95 sm:shadow-red-900 sm:rounded-none" onClick={card.funcao}>
                                                    {card.nome}
                                                </button>

                                            </div>

                                            <picture>
                                                <source media='(min-width:640px)' srcSet={card.img} />
                                                <img src={card.imgMobile} alt="foto do servico" className='max-sm:w-full' />
                                            </picture>

                                        </div>


                                    </div>
                                ))}
                            </div>}
                    </div>
                }
            </main>
        </>
    );

}

