/*
  for([expressaoIniciao]; [condição]; [incremento]) {
    declaração
  }
 */

const arr = ['one', 'two', 'three']

for(let index = 0; index < arr.length; index ++) {
  const element = arr[index]
  console.log(`Element #${index}: ${element}`)
}