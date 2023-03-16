const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

const nomesAtualizados = [...new Set(nomes)]

// de uma forma mais simples de entendimento seria = const meuSet = new Set(nomes), mas acima deixo registrado a que costuma
// ser mais usada no mercado.

console.log(nomesAtualizados)
