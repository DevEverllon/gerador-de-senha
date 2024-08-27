// PEGAR OS TIPOS DE CATACTERES QUE ESTÃO MARCADOS
function analisar() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const spacialCharecter = document.querySelector('#include_special_charecter').checked;

    const charTypes = [];


    if (uppercase == true) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase == true) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number == true) {
        charTypes.push('0123456789');
    }

    if (spacialCharecter == true) {
        charTypes.push('!@#$%^&*()-_=+[]{}|;:",.<>?/\\');
    }
    return charTypes;


}

function tamanhoDaSenha() {
    const size = document.querySelector('#size').value;

    if (isNaN(size) || size < 6 || size > 128) {
        mansage('Vefirique as informações!', '#dc2626')
    }


    return size;
}


function randomCharType(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    charTypes[randomIndex];

    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}


function gerarSenhaAle(size, charTypes){
    let passwordGenarated = '';

    while(passwordGenarated.length < size){
        passwordGenarated += randomCharType(charTypes);
    }
    return passwordGenarated;
}

function mansage(text, background){
    Toastify({
        text: text,
        duration: 3000,
        style: {
            background: background,
            boxShadow: 'none'
        }
    }).showToast();
}


function gerarSenha() {
    const size = tamanhoDaSenha();
    const charTypes = analisar();
    const passwordGenarated = gerarSenhaAle(size, charTypes);

    document.querySelector('#password').textContent = passwordGenarated;
}

const btnGerar = document.querySelector('#generate');
btnGerar.addEventListener('click', gerarSenha); 