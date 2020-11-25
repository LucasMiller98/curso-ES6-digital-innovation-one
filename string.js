const splittedText = 'Texto'.split('x')
console.log('Array com as posições separadas pelo delimitador:', splittedText)

const replacedText = 'Texto'.replace('Text', 'txet')
console.log('\nSubstituição de valor:', replacedText)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra atá a última:', secondToEnd)

const twoCharBeforeFirstPos = 'Texto'.substr(0, 2)
console.log('\nAs duas letras primeiras letras são:', twoCharBeforeFirstPos)