const users = ['Lucas', 'Miller', 'Santos']

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('F')
}

const person = [
  {
    name: 'Lucas',
    age: 22,
    gender: gender.MAN
  },

  {
    name: 'Miller',
    age: 23,
    gender: gender.MAN
  },

  {
    name: 'Santos',
    age: 43,
    gender: gender.MAN
  },

  {
    name: 'Ludmylla',
    age: 22,
    gender: gender.WOMAN
  }
]

// Iterar os ítens do array. Retorna um novo array a partir do que for feito
person.forEach((everyPerson, index, arr) => {
  console.log(`Nome: ${everyPerson} index: ${index}`, arr)
})

// Filter array. É uma 'Condicional'
const mens = person.filter(everyMens => everyMens.gender === gender.MAN)
console.log('\nNova lista apenas com homens: ', mens)

// Permite retornar um novo array
const personsWithCourse = person.map(persons => { // Cria um novo array apartir dele
  person.couse = 'Introdução ao JS'
  return person
})

console.log('\nPessoas com adição do curso', personsWithCourse)

// Transforma um array em outro tipo
const totalAge = person.reduce((age, persons) => { // O primeiro parâmetro é o render. O segundo, é o valor inicia da propriedade
  age += persons.age
  return age
}, 0) // O age inicia com zero

console.log('\nA soma das idades das pessoas', totalAge)

// Juntando operações
const totalEvenAges = person
                      .filter(everyPersons => everyPersons.age % 2 === 0)
                      .reduce((age, person) => {
                        age += person.age 
                        return age
                      }, 0)

console.log('\nSoma das pessoas que possuem idade par: ', totalEvenAges)