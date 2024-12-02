const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais(){
    const resposta = await fetch (url);
    let dados = await resposta.json();

const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas) * 60)

const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);


    console.log(dados);

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = `Você sabia que o mundo tem existem <span>
    21</span> espécies de tatus e aproximadamente <span>
    8.1</span> bilhões de pessoas no mundo que estão em busca de um tatu para chamar de seu <span>
    24 horas por dia</span> e <span>7 dias por semana</span>.<br>Isso significa que aproximadamente <span>
    ${porcentagemConectada}%</span> pessoas que estão atrás de um Tatu Galinha tunado.`
    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
}
visualizarInformacoesGlobais();
