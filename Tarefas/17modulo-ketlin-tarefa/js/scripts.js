const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector ("#email");
const telefoneInput = document.querySelector ("#telefone");
const cidadeInput = document.querySelector ("#cidade");
const ufInput = document.querySelector ("#uf");
const cepInput = document.querySelector ("#cep");

//console.log (form, nameInput, emailInput, telefoneInput, cidadeInput, ufInput, cepInput);//


form.addEventListener("submit", event => {
    event.preventDefault ();
    //NOME//
    if (nameInput.value === ""|| !isNameValid (nameInput.value)) {
        alert ("Verifique os campos em vermelho")
        nameInput.style.borderColor = "#f00";
        return;
    
    }


    //EMAIL//
    if (emailInput.value === "" || !isEmailValid (emailInput.value)) {
        alert ("Verifique os campos em vermelho");
        emailInput.style.borderColor = "#f00";
        return;
    }


    //TELEFONE//
   if (telefoneInput.value === "" || !isTelefoneValid (telefoneInput.value)) {
       alert ("Verifique os campos em vermelho");
       telefoneInput.style.borderColor = "#f00";
       return;
   }


    //CIDADE//
    if (cidadeInput.value === ""|| !isCidadeValid (cidadeInput.value)) {
        alert ("Verifique os campos em vermelho");
        cidadeInput.style.borderColor = "#f00";
        return;
    }

    //UF//
    if (ufInput.value === ""|| !isUfValid (ufInput.value)) {
        alert ("Verifique os campos em vermelho");
        ufInput.style.borderColor = "#f00";
        return;
    }

    //CEP//
    if (cepInput.value === "" || !isCepValid (cepInput.value)) {
        alert ("Verifique os campos em vermelho");
        cepInput.style.borderColor = "#f00";
        return;
    }

    form.submit();
})

//VALIDACAO NOME//
function isNameValid (name) {
    const nameRegex = new RegExp (
        /^[a-zA-Z]/
    );
    if (nameRegex.test (name)) {
        return true;
    } 
    return false;
}
//VALIDACAO EMAIL//
function isEmailValid (email) {
    const emailRegex = new RegExp(
       /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test (email)) {
        return true;
    }

    return false;
}

//VALIDACAO TELEFONE//
function isTelefoneValid (telefone) {
    const telefoneRegex = new RegExp (
        /^[1-9]/
    );
    if (telefoneRegex.test (telefone)) {
        return true;
    } 
    return false;
}

//VALIDACAO CIDADE//
function isCidadeValid (cidade) {
    const cidadeRegex = new RegExp(
        /^[a-zA-Z]/
    );

    if (cidadeRegex.test (cidade)) {
        return true;
    }

    return false;
}

//VALIDACAO UF//
function isUfValid (uf) {
    const ufRegex = new RegExp(
        /^[a-zA-Z]/
    );

    if (ufRegex.test (uf)) {
        return true;
    }

    return false;
}

//VALIDACAO CEP//
function isCepValid (cep) {
    const cepRegex = new RegExp(
        /^[1-9]/
    );

    if (cepRegex.test (cep)) {
        return true;
    }

    return false;
}
