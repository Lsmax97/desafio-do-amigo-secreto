let amigosInseridos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado'); // Adicionando a referência correta

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim();

    // Verificar se o nome não está vazio e evitar duplicatas
    if (nome === '') {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigosInseridos.includes(nome)) {
        alert("Este nome já foi inserido.");
        return;
    }

    amigosInseridos.push(nome);
    limparCampo();
    atualizarLista();
}

// Função para limpar o campo
function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}

// Função para atualizar a lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    amigosInseridos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigosInseridos.length < 2) {
        alert('Para realizar o sorteio adicione 2 amigos!');
        return;
    }

    let amigoSorteado = amigosInseridos[Math.floor(Math.random() * amigosInseridos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

// Função para limpar a lista e recomeçar o sorteio
function limparLista() {
    amigosInseridos = [];
    atualizarLista();
    resultado.innerHTML = '';
}
