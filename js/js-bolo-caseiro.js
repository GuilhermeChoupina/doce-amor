const pedido = [];

function adicionarPedido(nome) {
    pedido.push(nome);
    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById('lista-pedido');
    ul.innerHTML = '';

    pedido.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        ul.appendChild(li);
    });
}

function copiarPedido() {
    const texto = montarTexto();
    navigator.clipboard.writeText(texto);
    alert('Pedido copiado!');
}

function enviarWhats() {
    const texto = montarTexto();
    const telefone = '5511970299487'; // troque se quiser
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

function montarTexto() {
    let texto = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
    pedido.forEach((item, index) => {
        texto += `${index + 1}. ${item}\n`;
    });
    return texto;
}

function limparWhats() {
    pedido.length = 0; // esvazia o array
    atualizarLista(); // atualiza a tela
}