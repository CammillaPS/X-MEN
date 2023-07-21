// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');
console.log(personagens);

//adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        // verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        //pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        //Passo 3 - alterar o nome do personagem grande

        alterarPersonagemSelecionado(personagem);

        //Passo 4 - alterar a descrição do personagem


        alterardescricaoPersonagem(personagem);



        
        


    })
})

function alterardescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarPersonagemSelecionado(personagem) {
    const nomePersonaegem = document.getElementById('nome-personagem');

    nomePersonaegem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
