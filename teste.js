// **************************************************************************** //
// const lista = [1, 2, 3, 4, 5]

// **************************************************************************** //
// for (let indice = 0; indice < lista.length; indice++) {
//   console.log(lista[indice])
// }

// for (let i = 0, j = 0; i < lista.length; i++, j++) {
//   console.log(lista[i] + j)
// }

// let soma = 0

// **************************************************************************** //
// for (let elemento of lista) {
//   soma += elemento
// }

// console.log(soma)

// **************************************************************************** //
//let soma = 0

// lista.forEach(numero => (soma += numero))
// console.log(soma)

// lista.forEach(numero => {
//   soma += numero
// })

// **************************************************************************** //
// const nome = 'Alura'
// let nomeMaiusculas = ''

// for (let i = 0; i < nome.length; i++) {
//   nomeMaiusculas += nome[i].toUpperCase()
// }
// console.log(nomeMaiusculas)

// **************************************************************************** //
// const nomeDoCurso = 'Fundamentos de JS '
// const nomeDaPlataforma = 'Alura'

// const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma)
// console.log(nomeCompleto)

// **************************************************************************** //
const numeros = [43, 50, 65, 12]

// **************************************************************************** //
// const soma = numeros.reduce((acc, atual) => atual + acc, 0)

// console.log(soma)

// **************************************************************************** //
// const soma = numeros.reduce(function (acc, atual) {
//   return atual + acc
// }, 0)

// **************************************************************************** //
// function operacaoNumerica(acc, atual) {
//   return atual + acc
// }

// const soma = numeros.reduce(operacaoNumerica, 0)

// **************************************************************************** //
let num1 = 10
let num2 = num1

num2 += 5
num1 += 1

console.log(`Num1 é ${num1}. Num2 é ${num2}`)

// **************************************************************************** //
let numeroOriginal = 10

function alteraNumero(numero) {
  numero = 50

  console.log(
    `numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`
  )
}

alteraNumero(numeroOriginal)

// **************************************************************************** //
const notas = [7, 7, 8, 9]

// const novasNotas = notas

// novasNotas.push(10)

// console.log(`As novas notas são ${novasNotas}`)
// console.log(`As notas originais são ${notas}`)

// **************************************************************************** //

const notasNovas = [...notas, 10]

console.log(`As novas notas são ${notasNovas}`)
console.log(`As notas originais são ${notas}`)
