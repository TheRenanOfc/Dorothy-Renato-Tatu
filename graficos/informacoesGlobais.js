const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json';

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const pessoasEmpregadas = (dados.total_pessoas_conectadas / 1e9).toFixed(2);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2);
    const horas = parseInt(dados.tempo_medio);
    const minutos = Math.round((dados.tempo_medio - horas) * 60);
    const porcentagemPessoasEmpregadas = ((pessoasEmpregadas / pessoasNoMundo) * 100).toFixed(2);

    const pessoasSemEmprego = (pessoasNoMundo - pessoasEmpregadas).toFixed(2);
    const porcentagemPessoasSemEmprego = ((pessoasSemEmprego / pessoasNoMundo) * 100).toFixed(2);
    
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem ${pessoasNoMundo} bilhões de pessoas, e que aproximadamente ${pessoasEmpregadas} bilhões delas estão empregadas, passando, em média, ${horas} horas e ${minutos} minutos semanalmente em horário de trabalho.
Isso significa que aproximadamente ${porcentagemPessoasSemEmprego}% não estão formalmente trabalhando.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();
