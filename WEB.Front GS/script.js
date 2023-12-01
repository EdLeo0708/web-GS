function enviarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagemDiv = document.getElementById('mensagem');

    if (nome !== '' && email !== '') {
        mensagemDiv.innerHTML = 'Agradecemos o contato! Por favor, preencha com seus dados!';
        limparCamposFormulario();
    } else {
        mensagemDiv.innerHTML = 'Por favor, preencha com seus dados!';
    }
}
function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}