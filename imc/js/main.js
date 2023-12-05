const calcularImc = () => {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== '' && peso !== '' && altura !== '') {
        const imc = (peso/(altura**2));

        console.log("altura: ", altura);

        let classificacao = null;

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso!';
        }
        else if (imc < 25) {
            classificacao = 'Peso ideal. Parabéns!';
        }
        else if (imc < 30) {
            classificacao = 'Levemente acima do peso.';
        }
        else if (imc < 35) {
            classificacao = 'Obesidade grau 1!';
        }
        else if (imc < 40) {
            classificacao = 'Obesidade grau 2!';
        }
        else {
            classificacao = 'Obesidade grau 3. Procure um médico urgentemente!';
        }
        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    }

    limparCampos();
}

const limparCampos = () => {
    const nome = document.getElementById("nome").value = null;
    const altura = document.getElementById("altura").value = null;
    const peso = document.getElementById("peso").value = null;
}

const mascaraAltura = (value, pattern) => {
    let i = 0;
    let v = value.toString();
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
}

const aplicar = (value) => {
    const formatado = mascaraAltura(value, '#.##');
    document.getElementById('altura').value = formatado;
}