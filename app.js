function codificar() {
    let frase = document.getElementById('texto').value;
    let substituicoes = {
        'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'
    };
    frase = frase.replace(/[aeiou]/g, (match) => substituicoes[match]);
    document.getElementById('textoFeito').value = frase;
    limparCampo();
}
function decodificar() {
    let frase = document.getElementById('texto').value;
    let substituicoes = {
        'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'
    };
    let regex = new RegExp(Object.keys(substituicoes).join('|'), 'g');
    frase = frase.replace(regex, (match) => substituicoes[match]);
    document.getElementById('textoFeito').value = frase;
    limparCampo();
}
function copiar() {
    let copiado = document.getElementById('textoFeito').value;
    navigator.clipboard.writeText(copiado);
    document.getElementById('textoFeito').value = '';
}
function limparCampo() {
    document.getElementById('texto').value = '';
}