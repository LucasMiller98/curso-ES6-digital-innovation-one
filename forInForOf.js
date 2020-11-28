let arr = [3, 5, 7]
arr.foo = 'hello'

// Este for vai fazer console.log() para cada uma iteração com o array com a prop 'foo
for(let index in arr) {
  console.log(index)
}

// Aqui props enumeradas, ou seja, o valor mesmo do array.
for(let index of arr) {
  console.log(index)
}