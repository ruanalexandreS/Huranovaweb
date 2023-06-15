// define um objeto para representar o carrinho de compras
const carrinho = {
    itens: [], // lista de itens no carrinho

    // adiciona um item ao carrinho
    adicionarItem: function(item) {
        this.itens.push(item);
    },

    // remove um item do carrinho
    removerItem: function(index) {
        this.itens.splice(index, 1);
    },

    // calcula o valor total do carrinho
    calcularTotal: function() {
        let total = 0;
        for (let item of this.itens) {
            total += item.preco;
        }
        return total;
    }
};

// define uma função para atualizar o conteúdo do carrinho na página
function atualizarCarrinho() {
    const carrinhoEl = document.getElementById('carrinho');
    carrinhoEl.innerHTML = '';

    // adiciona cada item do carrinho à lista na página
    for (let i = 0; i < carrinho.itens.length; i++) {
        const item = carrinho.itens[i];
        const itemEl = document.createElement('li');
        itemEl.innerHTML = `${item.nome} - R$${item.preco.toFixed(2)} <button onclick="removerItem(${i})">Remover</button>`;
        carrinhoEl.appendChild(itemEl);
    }

    // exibe o valor total do carrinho na página
    const totalEl = document.getElementById('total');
    totalEl.innerHTML = `Total: R$${carrinho.calcularTotal().toFixed(2)}`;
}

// define uma função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(nome, preco) {
    const item = {
        nome: nome,
        preco: preco
    };
    carrinho.adicionarItem(item);
    atualizarCarrinho();
}

// define uma função para remover um item do carrinho
function removerItem(index) {
    carrinho.removerItem(index);
    atualizarCarrinho();
}
