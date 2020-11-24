// hoisting com variável

function fn() {
  console.log(text) // Vai mostrar um Underfined pq a variavel existe, mas não foi definida

  var text = 'Exemplo'

  console.log(text)
}

fn()

