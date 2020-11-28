// Por mais que eles sejam o mesmo valor, sempre vai dar false

const symbol1 = Symbol()
const symbol2 = Symbol()

// Eles são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2) // false

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name') // não dá pra sobrescrever as props
const nameSymbol2 = Symbol('name')

const user = {
  [nameSymbol1]: 'Lucas',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Cabrini da Silva'
}

console.log(user)

// Symbols criam props que não são enumberables
for(const key in user) { // Não dá pra acessar os symbols
  if(user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`)
  }
}

// Não aparece nem no keys e nem no values
console.log('Props do objeto user: ', Object.keys(user))
console.log('Valores das props do objeto user: ', Object.values(user))

// Para exibir tem uma outra função
// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user))

// Acessando todas as propriedades do objeto

console.log('Todas as propriedades do objeto: ', Reflect.ownKeys(user))

// Criar um enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
}