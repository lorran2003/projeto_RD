import { useState } from "react"

export function DadosClientes() {
    const [nome, setnome] = useState();
    const [telefone, setTelefone] = useState();
    const [convidados, setConvidados] = useState();
    const [exibirBuffe, setExibirBuffe] = useState(false);

    return (
        <div className="text-zinc-50 font-bold py-4 flex flex-col justify-center items-center gap-2 sm:gap-3">

            <p>
                Por favor, digte as seguintes informacões:
            </p>

            <div className="flex items-center justify-center gap-4 w-4/5">

                <input type="text" placeholder="Nome" id="inputClearNome" className=" input rounded-md text-center shadow w-72 h-7 text-zinc-900 " onChange={(event) => { setnome(event.target.value) }} />

            </div>


            <div className="flex items-center justify-center gap-4 w-4/5">

                <p>Data do evento:</p>
                <input id="dataEvento" type="date" className="input rounded-md text-center shadow h-7 text-zinc-800 p-1" />

            </div>

            <div className="flex items-center justify-center gap-6 w-4/5">

                <p>Telefone:</p>
                <input id="inputClearTelefone" type="text" className="input w-40 rounded-md text-center shadow h-7 text-zinc-800 p-1" onChange={(event) => { setTelefone(event.target.value) }} />

            </div>

            <div className="flex items-center justify-center gap-6 w-4/5">

                <p>Numero de convidados:</p>
                <input id="inputClearNumberConvidados" type="text" className="input w-16 rounded-md text-center shadow h-7 text-zinc-800 p-1" onChange={(event) => { setConvidados(event.target.value) }} />

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
            <div className="flex items-center justify-center gap-2">
                <p>Deseja contratar o Salão:</p>

                <div className="flex items-center justify-center gap-1">

                    <input id="trueInputBuffe" type="radio" value={true} name="exibirBuffe" checked={exibirBuffe === true} onChange={() => { setExibirBuffe(true) }} />
                    <label form="inputBuffe">Sim</label>

                </div>

                <div className="flex items-center justify-center gap-1">

                    <input id="falseInputBuffe" type="radio" value={false} name="exibirBuffe" checked={exibirBuffe === false} onChange={() => { setExibirBuffe(false) }} />

                    <label form="falseInputBuffe">Não</label>

                </div>
            </div>

            {exibirBuffe ?
                <div>
                    ola mundo
                </div>
                :
                <div></div>}


            <button className="bg-[#8F1620] p-2 rounded-md shadow-zinc-900 shadow-[0_0_0_1px] hover:shadow-white" onClick={(event) => {


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

                try {
                    fetch("http://localhost:8080/pedido", options).then(async (data) => {
                        const response = await data.json();
                        window.open(response.url, "_blank")
                        document.getElementById("inputClearNome").value = '';
                        document.getElementById("inputClearTelefone").value = '';
                        document.getElementById("inputClearNumberConvidados").value = '';
                        document.getElementById("dataEvento").value = '';
                        document.getElementById("dataVisita").value;
                      

                        })
                } catch (error) {
                    console.log("ERRO")
                }

            }}>
                Enviar
            </button>

        </div>
    )
}