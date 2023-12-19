const inputNumber = document.getElementsByTagName('input')[0];
const inputButton = document.getElementsByTagName('input')[1];
const resultados = document.getElementById('resultado');

inputButton.onclick = () => {
    const numConvert = parseInt(inputNumber.value);

    if(!isNaN(numConvert) && numConvert >= 0) {
        // se numConvert não for um NaN AND numConvert for diferente de 0, então...
        resultados.innerText = '';

        inputButton.setAttribute('disabled', 'disabled');

        for(let i = 1; i <=10; i++) {
            setTimeout(() => {
                const p = document.createElement('p');
                resultados.appendChild(p);

                p.innerHTML = `${numConvert} &times; ${i} &equals; ${numConvert * i}`;

                inputButton.value = 'Aguarde...'
                if(i === 10) {
                    inputButton.removeAttribute('disabled');
                    inputButton.value = 'Confirmar';
                }
            }, i * 550);
        }

        console.log('programa finalizado');
    } else {
        console.error('O valor inserido não é um número ou é 0 (zero) ou é menor');
        const p = document.createElement('p');
        resultados.appendChild(p);

        p.innerText = 'O valor inserido não é um número ou é 0 (zero)';
    }
}