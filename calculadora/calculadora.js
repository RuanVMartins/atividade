function calcular() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var operacao = document.getElementById('calculos').value;
    var mostrarResultado = document.getElementById('mostrarResultado')

    switch(operacao) {
        case 'mais':
            resultado = numero1 + numero2;
            break

        case 'menos':
            resultado = numero1 - numero2;
            break

        case 'multiplicação':
            resultado = numero1 * numero2;
            break
        case 'divisão':
            resultado = numero1 / numero2;
            break
        default:
            alert('Oi')
    }
    mostrarResultado.innerHTML = resultado;
 }