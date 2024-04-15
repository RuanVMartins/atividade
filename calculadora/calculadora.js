function calcular() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var operacao = (document.getElementById('escolha').value);
    var text = document.querySelector('.resultado')


    switch(operacao) {

        case 'Escolha uma operação':
            alert('Opção invalida! escolha outra coisa')

            case 'mais':
                resultado = numero1 + numero2;
                console.log(resultado);
                break

            case 'menos':
                resultado = numero1 - numero2;
                console.log(resultado);
                break

            case 'multiplicação':
                resultado = numero1 * numero2;
                console.log(resultado);
                break
            case 'divisão':
                resultado = numero1 / numero2;
                console.log(resultado);
                break
    }
    texto.textContent = resultado;
 }