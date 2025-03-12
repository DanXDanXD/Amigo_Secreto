const input = document.createElement("input");
input.type = "text";
input.placeholder = "Digite um nome";
document.body.appendChild(input);

const buttonAdd = document.createElement("button");
buttonAdd.textContent = "Adicionar";
document.body.appendChild(buttonAdd);

const lista = document.createElement("ul");
document.body.appendChild(lista);

const buttonSortear = document.createElement("button");
buttonSortear.textContent = "Sortear amigo";
document.body.appendChild(buttonSortear);

const resultado = document.createElement("p");
document.body.appendChild(resultado);

buttonAdd.addEventListener("click", () => {
    const nome = input.value.trim();
    if (nome === "" || amigos.includes(nome)) {
        alert("Nome inválido ou já adicionado.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
});

function atualizarLista() {
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.addEventListener("click", () => removerAmigo(index));
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

buttonSortear.addEventListener("click", () => {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `O amigo sorteado é: ${sorteado}`;
});