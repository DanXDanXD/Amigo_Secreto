let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = () => removerAmigo(index);
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    const item = document.createElement("li");
    item.textContent = `O amigo sorteado é: ${sorteado}`;
    listaResultado.appendChild(item);
}