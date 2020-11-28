var partes = ['ombro', 'joelhos']
var musica = ['cabeca', ...partes, 'e', 'pés']
// Com o '...partes' irá aparecer isso
var musica2 = ['cabeca', 'ombro', 'joelhos', 'e', 'pés']

function fn(x, y,z) { }
var args = [0, 1, 2]
fn(...args)