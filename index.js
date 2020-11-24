// hoisting com funções
// É exada como um todo

function fn() {
  log('Hoisting de função')

  function log(value) {
    console.log(value)
  }
}

fn()

/*
  funtion fn() {
    function log(value) {
      console.log(value)
    }

    log('Hoisting de função')
  }
*/