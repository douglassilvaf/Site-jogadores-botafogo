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
    const img = document.getElementById("img_detalhes")
    img.src = resposta_pega_json.imagem
    
})

