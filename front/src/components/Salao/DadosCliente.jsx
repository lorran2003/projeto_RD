import { useState } from "react"

export function DadosClientes() {
    const [nome, setnome] = useState();
    const [telefone, setTelefone] = useState();
    const [convidados, setConvidados] = useState();
    const [exibirBuffe, setExibirBuffe] = useState(false);

    return (
        <div className="text-zinc-50 flex flex-col justify-center items-center gap-2 sm:gap-3">

            <p>
                Digite as seguintes informacoes:
            </p>

            <div className="flex items-center justify-center gap-4 w-4/5">

                <input type="text" placeholder="Nome completo" className=" rounded-md text-center shadow w-72 h-7 text-zinc-900 " onChange={(event) => { setnome(event.target.value) }} />

            </div>

            <div className="flex items-center justify-center gap-4 w-4/5">

                <p>Data do evento:</p>
                <input id="dataEvento" type="date" className=" rounded-md text-center shadow h-7 text-zinc-800 p-1" />

            </div>

            <div className="flex items-center justify-center gap-6 w-4/5">

                <p>Data de visita:</p>
                <input id="dataVisita" type="date" className=" rounded-md text-center shadow h-7 text-zinc-800 p-1" />

            </div>

            <div className="flex items-center justify-center gap-6 w-4/5">

                <p>Telefone:</p>
                <input type="text" className=" w-40 rounded-md text-center shadow h-7 text-zinc-800 p-1" onChange={(event) => { setTelefone(event.target.value) }} />

            </div>

            <div className="flex items-center justify-center gap-6 w-4/5">

                <p>Numero de convidados:</p>
                <input type="text" className=" w-16 rounded-md text-center shadow h-7 text-zinc-800 p-1" onChange={(event) => { setConvidados(event.target.value) }} />

            </div>

            <div className="flex items-center justify-center gap-2">
                <p>Deseja contratar o Buffet:</p>

                <div className="flex items-center justify-center gap-1">

                    <input id="trueInputBuffe" type="radio" value={true} name="exibirBuffe" checked={exibirBuffe === true} onChange={() => { setExibirBuffe(true) }} />
                    <label form="inputBuffe">Sim</label>

                </div>

                <div className="flex items-center justify-center gap-1">

                    <input id="falseInputBuffe" type="radio" value={false} name="exibirBuffe" checked={exibirBuffe === false} onChange={() => { setExibirBuffe(false) }} />

                    <label form="falseInputBuffe">Não</label>

                </div>
            </div>

            {console.log(exibirBuffe)}
            {exibirBuffe ?
                <div>
                    ola mundo
                </div>
                :
                <div></div>}


            <button className="bg-zinc-400/10 p-2 rounded-md shadow-zinc-900 shadow-[0_0_0_1px] hover:shadow-white" onClick={(event) => {


                event.preventDefault()

                let dateEventoHtml = document.getElementById("dataEvento").value;
                let dateVisitaHtml = document.getElementById("dataVisita").value;

                let teste = {
                    "nome": nome,
                    "telefone": telefone,
                    "data_evento": dateEventoHtml,
                    "data_visita": dateVisitaHtml,
                    "qtd_pessoas": parseInt(convidados),
                    "buffe": true,
                    "pedido_aceito": "sim"
                }

                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(teste),
                };

                fetch("http://localhost:8080/pedido", options).then((data) => {
                    data.json();
                }).then((data) => { console.log(data) });

            }}>
                Enviar
            </button>

        </div>
    )
}