import { useState } from 'react';
import { Home } from '../components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { MainSalao } from './MainPags/Salao/MainSalao';


export function Main() {

    const [paginaSalao, setPaginaSalao] = useState(false);
    const [homePag, setHomePag] = useState(true);

    //array de cards
    const cards = [
        {
            id: 1,
            nome: "BUFFET",
            funcao: () => setPaginaSalao(false)
        },
        {
            id: 2,
            nome: "SALAO",
            funcao: () => setPaginaSalao(true)
        }
    ]



    return (
        <>
            <main className=' flex flex-col text-zinc-100/80 bg-zinc-900/85'>

                <div className=' flex justify-center items-center w-full h-8'>
                    <nav className="flex gap-5">
                        <button className={"hover:text-zinc-50 delay-75 " + (homePag ? "border-b-2 border-red-800" : "")} onClick={() => setHomePag(true)}>HOME</button>
                        <button className={"hover:text-zinc-50 delay-75 " + (!homePag ? "border-b-2 border-red-800" : "")} onClick={() => setHomePag(false)}>SERVICOS</button>
                    </nav>
                </div>

                {paginaSalao && !homePag ? <MainSalao /> :
                    <div className=" py-7 gap-7 flex flex-col items-center justify-center h-full">

                        {homePag ? <Home /> :
                            <div className="flex flex-wrap justify-center items-center w-full h-full gap-5 text-zinc-900">
                                {cards.map(card => (

                                    <div key={card.id} className="flex flex-col justify-center items-center h-80 w-64 sm:w-72 sm:h-96 shadow-[0_0_2px] shadow-zinc-900 rounded-3xl p-3 bg-zinc-50 gap-2">

                                        <div className="w-full h-full text-center border-solid border-zinc-400 border rounded-xl">
                                            <img src="" alt="foto do servico" className="w-full h-full bg-zinc-800 rounded-xl" />
                                        </div>
                                        <p>
                                            {card.nome}
                                        </p>

                                        <button className="shadow-[0_0_0_1px] shadow-zinc-900 bg-zinc-800 p-2 rounded-lg text-zinc-50" onClick={card.funcao}>
                                            Conferir
                                        </button>
                                    </div>
                                ))}
                            </div>}

                        <div className="fixed bg-[#45C153] rounded-full left-3 md:bottom-5 p-1 hover:p-1.5 hover:bg-[#53ec65] hover:duration-500 duration-500 max-sm:top-6">
                            <a href="#">
                                <FontAwesomeIcon icon={faWhatsapp} className="size-14 hover:size-16 text-zinc-900" />
                            </a>
                        </div>
                    </div>
                }
            </main>
        </>
    );

}

