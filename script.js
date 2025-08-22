window.addEventListener('load', getData);

async function getData() {
    try{
        const resposta = await fetch(`https://api.github.com/repos/GuiMV/Games`);
        const dados = await resposta.json();

        const dataAtualizacao = new Date(dados.pushed_at);
        const dia = dataAtualizacao.getDate();
        const mes = dataAtualizacao.getMonth() + 1;
        const ano = dataAtualizacao.getFullYear();

        document.getElementById('data').innerText = `${dia}/${mes}/${ano}`;
    } catch (erro) {
        console.error("Erro ao obter a data da última atualização:", erro);
    }
}