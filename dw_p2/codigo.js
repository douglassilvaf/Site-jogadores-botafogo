const urlMasculino = `https://botafogo-atletas.mange.li/masculino`;
const urlFeminino = `https://botafogo-atletas.mange.li/feminino`;
const urlCompleto = `https://botafogo-atletas.mange.li/all`;

const body = document.body;

// const criaBotao = (tipo, lista) => {
//     /*const botao = document.createElement('button');
//     botao.textContent = tipo;*/
//     botao.onclick = () => constroiAtletas(lista);
//     document.body.appendChild(botao);
// }

function deleteCard(){
    const cards = document.querySelectorAll(".card")
    
    cards.forEach(element => {
        element.parentNode.removeChild(element)
    });
}

document.getElementById('btnM').addEventListener("click",function(){
    deleteCard()
    constroiAtletas(urlMasculino)
})

document.getElementById('btnF').addEventListener("click",function(){
    deleteCard()
    constroiAtletas(urlFeminino)
})

document.getElementById('btnE').addEventListener("click",function(){
    deleteCard()
    constroiAtletas(urlCompleto)
})

const constroiAtletas = async (caminho) => {
    try {
        const lista_atletas = await pega_json(caminho);
        for (const atleta of lista_atletas) {
            criaCartao(atleta);
        }
    } catch (error) {
        console.error('Erro ao construir atletas:', error);
    }
}

const criaCartao = (entrada) => { 
    console.log('Criando cartão para:', entrada.nome);
    const container_atleta = document.createElement('article');
    container_atleta.classList.add('card');
    container_atleta.dataset.id = entrada.id;
    
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;
    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;

    container_atleta.appendChild(imagem);
    container_atleta.appendChild(titulo);

    container_atleta.onclick = manipulaClick;

    document.getElementById("bodycard").appendChild(container_atleta);
}

const manipulaClick = (e) => {
    const artigo = e.target.closest('article');
   
    window.location = `outra.html?id=${artigo.dataset.id}`;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e)=> e.startsWith(chave));
    return procurado.split('=')[1];
}

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

/*pega_json(url).then((r) => console.log(r));

pega_json(`${url}/all`).then((r) => {
    for (atleta of r){
        criaCartao(atleta)
    }
});*/