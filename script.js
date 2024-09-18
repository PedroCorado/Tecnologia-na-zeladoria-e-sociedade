function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const rua = document.getElementById('rua').value;
    const numeroCasa = document.getElementById('numeroCasa').value;
    const telefone = document.getElementById('telefone').value;
    const problema = document.getElementById('problema').value;

    if (!nome || !rua || !numeroCasa || !telefone || !problema) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    alert('Problema cadastrado com sucesso!');
    return true;
}
