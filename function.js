function fn () {
  return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn2 = () => {
  // Mais de uma expressão
  return 'Code here'
}

// Funçoes também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

// Receber parâmetros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

// Receber ou retornar funções
const controlFnExec = (fnParam) => allowed => {
  if(allowed) {
    fnParam()
  }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // Executará a função
handleFnExecution() // Não executará a função

function controlFnExec(fnParam) {
  return function(allowed) {
    if(allowed) {
      fnParam()
    }
  }
}

// function 2

global.name = 'Nome no contexto de criação'

const getNameArrowFn = () => this.name

function getName() {
  return this.name
}

const user = {
  name: 'Nome do objeto de execução',
  getNameArrowFn,
  getName
}

console.log(user.getNameArrowFn())
console.log(user.getName())