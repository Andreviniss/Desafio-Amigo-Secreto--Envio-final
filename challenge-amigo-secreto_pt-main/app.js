let nomesAmigos = [];
let nomesSorteados = [];
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo === "") {
        alert('Insira um nome no campo antes de clicar em "Adicionar"!');
        return;
    }
    nomesAmigos.push(nomeAmigo);
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < nomesAmigos.length; i++) {
        listaAmigos.innerHTML += `<li>${nomesAmigos[i]}</li>`;
    }
    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    if (nomesAmigos.length < 3) {
        alert('Insera pelo menos 3 nomes antes de clicar em sortear!');
        return;
    } 
    if (nomesSorteados.length === nomesAmigos.length) {
        alert('Todos os nomes já foram sorteados!');
        return;
    } 
    let nomeAleatorio = Math.floor(Math.random() * (nomesAmigos.length));
    let resultado = document.getElementById('resultado');
    let nomeSorteado = nomesAmigos[nomeAleatorio];
    if (nomesSorteados.includes(nomeSorteado)) {
        return sortearAmigo();
    } else {
        nomesSorteados.push(nomeSorteado);
        resultado.innerHTML = nomeSorteado;
    }
}
