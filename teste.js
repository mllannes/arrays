const lista = [1, 2, 3, 4, 5]

// for (let indice = 0; indice < lista.length; indice++) {
//   console.log(lista[indice])
// }

// for (let i = 0, j = 0; i < lista.length; i++, j++) {
//   console.log(lista[i] + j)
// }

// let soma = 0

// for (let elemento of lista) {
//   soma += elemento
// }

// console.log(soma)

//let soma = 0

// lista.forEach(numero => (soma += numero))
// console.log(soma)

// lista.forEach(numero => {
//   soma += numero
// })

const nome = 'Alura'
let nomeMaiusculas = ''

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas)

const nomeDoCurso = 'Fundamentos de JS '
const nomeDaPlataforma = 'Alura'

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)
