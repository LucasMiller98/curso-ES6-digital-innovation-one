# curso-ES6-digital-innovation-one
Estudando ES6 na digital innovation one

# JavaScript

- Tipagem fraca
- Dinâmica

## Tipagem fraca

- Concatena String com int

## Tipagem forte

- Não permite concatenar int com String

# Tipagem Dinâmica e estática

## Dinâmica

- Não precisa esplicitar o tipo da variável no momento da criação

# Currying

- É a tecnica de transformar uma função com 'n' parametros em 1 função 
- Comum em linguagens funcionais
- O JS não é funcional(por padrão)

# Hoisting

- Significa levantar ou suspender algo
- Podemos separar em variaveis e funções
- O Hoisting de variável só eleva a criação da variável e não a atribuição
- A função eleva o ao topo como um todo, então temos a assinatura dela

OBS.: Sempre declarar uma função antes de usar

## Imitabilidade

- Dados imutavés
OBS.: Sempre que for passado para uma função seja um objeto ou um array, ele é passado por referencia, ou seja, se ele for alterado.

# Tipos e variáveis

- Antigamante só existia escopo global e de função
- Com o let e const, foi adicionado o escopo de bloco(Estruturas com chaves)

`OBS.: Let e const respeitam escopo de bloco, mas o var, não. O var só aceita escopo de função ou global.`

`OBS.: Ao atribuir a um const ao uma string, não permite que troque de valor. Ao criar um objeto, ele vai permitir que altere o valor. Só não pode mudar um onde o ponteiro dele está apontando. `

- Tipo primitivo, não muda; só objeto.