const url = window.location.search

const urlParams = new URLSearchParams(url) //essa função quebra a url

const urlId = urlParams.get("id") //essa função pega o id

const urlMangeli= `https://botafogo-atletas.mange.li/${urlId}`

const pega_json = async (caminho) => {
    try {
        const resposta = await fetch(caminho);
        const dados = await resposta.json();
        console.log('Dados da API:', dados);
        return dados;
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
        throw error;
    }
}


pega_json(urlMangeli).then((resposta_pega_json) => {
    const img = document.getElementById("imagem_detalhes")
    img.src = resposta_pega_json.imagem
    
    const nome = document.getElementById("nome")
    nome.textContent = resposta_pega_json.nome
    
    const posicao = document.getElementById("posicao")
    posicao.textContent = resposta_pega_json.posicao
    
    const descricao_detalhes = document.getElementById("descricao_detalhes")
    descricao_detalhes.textContent = resposta_pega_json.descricao

    const nome_completo = document.getElementById("nome_completo")    
    nome_completo.textContent = resposta_pega_json.nome_completo

    const nascimento = document.getElementById("nascimento")
    nascimento.textContent = resposta_pega_json.nascimento

    const altura = document.getElementById("altura")
    altura.textContent = resposta_pega_json.altura
})
