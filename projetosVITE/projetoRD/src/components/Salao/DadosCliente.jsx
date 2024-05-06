import { useState } from "react"

export function DadosClientes() {
    const [nome, setnome] = useState();
    const [telefone, setTelefone] = useState();
    const [convidados, setConvidados] = useState();

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

            <button className="bg-zinc-400/10 p-2 rounded-md shadow-zinc-900 shadow-[0_0_0_1px] hover:shadow-white" onClick={(event) => {


                event.preventDefault()

                let dateEventoHtml = document.getElementById("dataEvento").value;
                let dateVisitaHtml = document.getElementById("dataVisita").value;

                let teste = {
                    "nome": nome,
                    "telefone": parseInt(telefone),
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

                fetch("http://26.237.124.60:8080/pedido", options).then((data) => {
                    console.log(data.status);
                });

            }}>
                Enviar
            </button>

        </div>
    )
}