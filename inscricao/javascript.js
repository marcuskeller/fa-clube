function register(event) {
    const nome = document.getElementById('nome');
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    const dataNascimento = document.getElementById('date');
    const email = document.getElementById('email');
    const checkboxParticipar = document.getElementById('participar');

    if (nome.value.trim() === "") {
        alert("Por favor, preencha o campo Nome Completo.");
        nome.focus();
        return;
    }

    if (!sexoSelecionado) {
        alert("Por favor, selecione uma opção de Gênero.");
        document.getElementById('masculino').focus();
        return;
    }

    if (dataNascimento.value === "") {
        alert("Por favor, preencha a sua Data de Nascimento.");
        dataNascimento.focus();
        return;
    }

    if (email.value.trim() === "") {
        alert("Por favor, preencha o campo E-mail.");
        email.focus();
        return;
    }

    if (!checkboxParticipar.checked) {
        alert("Você precisa concordar com os termos para finalizar a inscrição.");
        checkboxParticipar.focus();
        return;
    }

    alert("Parabéns " + nome.value  + ", inscrição feita com sucesso!");

    event.target.closest('form').reset();
}