import { useState } from "react"

export function DadosClientes() {
    const [nome, setnome] = useState();
    const [telefone, setTelefone] = useState();
    const [convidados, setConvidados] = useState();


    return (
        <div className="text-zinc-50 font-bold p-4 w-full">

            <div className="flex flex-col justify-between items-start gap-2 lg:gap-4 w-full">

                <p>
                    Por favor, digte as seguintes informacões:
                </p>

                <div className="flex items-center justify-center gap-4">
                    <p>Nome:</p>
                    <input type="text" id="inputClearNome" className=" input rounded-md text-center shadow h-7 text-zinc-900 " onChange={(event) => { setnome(event.target.value) }} />
                </div>

                <div className="flex items-center justify-center gap-4 ">
                    <p>Data do evento:</p>
                    <input id="dataEvento" type="date" className="input rounded-md text-center shadow h-7 text-zinc-800 p-1" />
                </div>

                <div className="flex items-center justify-center gap-6">
                    <p>Telefone:</p>
                    <input id="inputClearTelefone" type="text" placeholder="ex:21XXXXXXXXX" className="input w-40 rounded-md text-center shadow h-7 text-zinc-800 p-1" onChange={(event) => { setTelefone(event.target.value) }} />
                </div>

                <div className="flex items-center justify-center gap-6">
                    <p>Numero de convidados:</p>
                    <input id="inputClearNumberConvidados" type="text" className="input rounded-md text-center shadow h-7 text-zinc-800 w-12 py-1" onChange={(event) => { setConvidados(event.target.value) }} />
                </div>

                <div className="flex items-center justify-center gap-2">

                    <p>Escolha o pacote:</p>

                    <select id="Select" className="text-zinc-950 rounded-md">
                        <option value={"Buffet"} >
                            Buffet
                        </option>
                        <option value={"Salão"}>
                            Salão
                        </option>
                        <option value={"Salão e Buffet"}>
                            Salão e Buffet
                        </option>
                    </select>
                </div>

                <button className="bg-[#8F1620] w-full py-2 rounded-md shadow-zinc-900 shadow-[0_0_0_1px] hover:shadow-white animate-pulse" onClick={(event) => {
                    event.preventDefault()
                    let dateEventoHtml = document.getElementById("dataEvento").value;
                    let select = document.getElementById("Select").value
                    let teste = {
                        "nome": nome,
                        "telefone": telefone,
                        "data_evento": dateEventoHtml,
                        "qtd_pessoas": parseInt(convidados), 
                        "tipo_evento":select,
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
                            window.open(response.url, "_blank");
                            document.getElementById("inputClearNome").value = '';
                            document.getElementById("inputClearTelefone").value = '';
                            document.getElementById("inputClearNumberConvidados").value = '';
                            document.getElementById("dataEvento").value = '';
                            document.getElementById("dataVisita").value = '';
                        })
                    } catch (error) {
                        console.log("400")
                    }
                }}>
                    Enviar
                </button>
            </div>
        </div>
    )
}