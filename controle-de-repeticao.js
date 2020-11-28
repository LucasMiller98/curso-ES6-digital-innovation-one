// break
console.log('Exemplo de utilização de break')

var index = 0

while(true) {
  index ++

  if(index > 2) {
    break
  }

  console.log(index)
}

// continue
console.log('\nExemplo da utilização de continue')

const arr = [1, 2, 3, 4, 5, 6]

// Pula uma interção
for(let index = 0; index < arr.length; index ++) {
  const element = arr[index]

  if(element % 2 === 0) { // Se for par, ele vai pular
    continue
  }

  console.log(element)
}