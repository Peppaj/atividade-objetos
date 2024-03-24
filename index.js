const prompt = require('prompt-sync')();
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}
console.log("cadastro de clientes");
const nomeCliente = prompt("nome: ");
const contato = prompt("contato: ");
const enderecoCliente = prompt("endereço: ");

let carrinho = [];
while (true) {
    console.log("\n adicione o produto ao carrinho: ");
    const nome = prompt("nome do produto: ");
    const preco = parseFloat(prompt("preço do produto: "));
    const quantidade = parseInt(prompt("quantidade: "));
    const subtotal = calcularSubtotal(preco, quantidade);

    carrinho.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        subtotal: subtotal
    });
    const continuar = prompt("deseja adicionar mais produtos? (s / n): ");
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}
console.log("\n intes do carrinho");
let totalCompra = 0;
for (const item of carrinho) {
    console.log(`${item.nome} - preço: R$${item.preco.toFixed(2)} - quantidade: ${item.quantidade} - subtotal: R$${item.subtotal.toFixed(2)}`);
    totalCompra += item.subtotal;

}
console.log(`\n total da compra: R$${totalCompra.toFixed(2)}`);
console.log("\n informações do clinete");
console.log(`nome: ${nomeCliente}`);
console.log(`contato: ${contato}`);
console.log(`endereço: ${enderecoCliente}`);




