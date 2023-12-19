const inputNumber = document.getElementsByTagName('input')[0];
const inputButton = document.getElementsByTagName('input')[1];
const resultados = document.getElementById('resultado');

inputButton.onclick = () => {
    numConvert = parseInt(inputNumber.value);

    if(numConvert > 0 && numConvert <= 100) {
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

        console.log('Programa finalizado!');
    } else if(numConvert > 100) {
        console.error('Não é aceito valores maiores que 100');

        resultados.innerText = '';

        p = document.createElement('p');
        resultados.appendChild(p);

        p.innerText = 'Não é aceito valores maiores que 100';
    } else {
        console.error('Não é aceito números menores ou iguais a 0 (zero)');

        resultados.innerText = '';

        p = document.createElement('p');
        resultados.appendChild(p);

        p.innerText = 'Não é aceito números menores ou iguais a 0 (zero)';
    }
}