const user = {
  name: 'Lucas',
  lastName: 'Miller Santos Timóteo da cruz.'
}

// Get the keys of the object
console.log('Propriedades do objeto user: ', Object.keys(user))

// Get the value
console.log('\nPara velores: ', Object.values(user))

// Return a array of arrays [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user))

// Mergear propriedades de objetos
// Em multabilidade, não é recomendado
Object.assign(user, {fullName: 'Lucas Miller Santos Timóteo da Cruz.'})

console.log('\nAdd a propriedade fullName no objeto user', user) 

console.log('\nRetorna um novo objeto mergeando dois objetos', Object.assign({}, user, {age: 26})) // Não altera a referencia dele, cria uma nova parte

// Previne todas as alterações em um objeto
// Não permite alteração, remoção e pode criar uma prop nova
const newObj = { foo: 'bar' }
Object.freeze(newObj)

newObj.foo = 'Changes' // Quando criado, não pode ser alterado.
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObject após as alterações: ', newObj)

// o seal não premite a criação ou a exclusão
// Para trocar um valor de uma propriedade que já existe, pode sim
// Permite apenas a alteração de props existentes em um objeto
const person = { name: 'Lucas' }
Object.seal(person)

person.name = 'Lucas Miller'
delete person.name
person.age = 26

console.log('\nVariável person após as alterações: ', person, '\n')