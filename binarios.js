// in

someThings in someThingItems // Algo está EM aguma coisa

// Arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro')
0 in arvores // retorna true porque a posição 0 está no array
3 in arvores // retorna true porque a posição 3 está no array
6 in arvores // retorna false porque a posição 6 não está no array
'cedro' in arvores // retorna false porque devemos especificar o número do index
'length' in arvores // retorna true porque length é uma prop do array

// Objetos predefinidos
'PI' in Math // Retorna true
var minhaStrings = new String('coral') 
'length' in minhaStrings // retorna true

// Objetos personalizados
var meuCarro = {marca: 'Nissan', modelo: 'car', Ano: 'Atual'}
'marca' in meuCarro // retorna true
'modelo' in meuCarro // retorna true

// instanceof. Retorna a instancia de alguma coisa
objecto instanceof tipoObjeto