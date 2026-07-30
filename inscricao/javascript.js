function register(event) { 
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    const dataNascimento = document.getElementById('date');
    const checkboxParticipar = document.getElementById('participar');

    verifyNameField()

    verifyCPFFileld()

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

    verifyEmailField()

    if (!checkboxParticipar.checked) {
        alert("Você precisa concordar com os termos para finalizar a inscrição.");
        checkboxParticipar.focus();
        return;
    }

    const nome = document.getElementById('nome').value;
    alert("Parabéns " + nome + ", inscrição feita com sucesso!");

    event.target.closest('form').reset();
}

function verifyNameField(){
    const nome = document.getElementById('nome');
    const nomeRegex = new RegExp("^[A-Za-zÀ-ÿ]{2,}([ ][A-Za-zÀ-ÿ]{2,})+$");

    if (nome.value.trim() === "") {
        alert("Por favor, preencha o campo Nome Completo.");
        nome.focus();
        throw new Error("Nome Vazio");
        return;
    }

    if (!nomeRegex.test(nome.value)){
        alert("Nome incorreto! Insira no mínimo 2 caracteres para nome e 2 caracteres para sobrenome.")
        nome.focus();
        throw new Error("Nome Inválido");
        return;
    }
}

function verifyCPFFileld(){
    const CPF = document.getElementById('CPF');
    const CPFRegex = new RegExp("^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}$");

    if (CPF.value.trim() === "") {
        alert("Por favor, preencha o campo de CPF.");
        CPF.focus();
        throw new Error("CPF Vazio");
        return;
    }

    if (!CPFRegex.test(CPF.value)){
        alert("CPF incorreto! Insira um CPF válido conforme o exemplo no campo do CPF.");
        CPF.focus();
        throw new Error("CPF Inválido");
        return;
    }
}

function verifyEmailField(){
    const email = document.getElementById('email');
    const emailRegex = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");

    if (email.value.trim() === "") {
        alert("Por favor, preencha o campo E-mail.");
        email.focus();
        throw new Error("Email Vazio");
        return;
    }

    if (!emailRegex.test(email.value)){
        alert("Email incorreto! Insira um email válido conforme o exemplo no campo do email.");
        email.focus();
        throw new Error("Email Inválido");
        return;
    }
}
