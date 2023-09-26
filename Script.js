let peso
let altura
let escolha
let calcular  = document.querySelector ('#btn_calcular')
let imc
const mensagem = document.querySelector('#resultado')
calcular.onclick = function calcular_imc(){
    peso = parseFloat(document.querySelector('#peso').value)
    peso = parseFloat(document.querySelector('#altura').value)
    escolha = document.querySelector('#selecao_genero').value
}
//Cálculo
imc = peso/Math.pow(altura,2)
switch (escolha) {
    case '1':
        if (imc < 18.6) {
            mensagem.innerHTML = "<p>Homem Magro</p><p>IMC: "+imc.toFixed(1)+" </p><img src='' alt='Homem Magro'>"
        }
        else if (imc > 24.9) {
            mensagem.innerHTML = "<p>Homem Gordo</p><p>IMC: "+imc.toFixed(1)+" </p><img src='' alt='Homem Gordo'>"
        }
        else{
            mensagem.innerHTML = "<p>Homem Peso Ideal</p><p>IMC: "+imc.toFixed(1)+" </p><img src='' alt='Homem Peso Ideal'>"
        }
        break;
        case '2':
        if (imc < 18.5) {
                mensagem.innerHTML = "<p>Mulher Magra</p><p>IMC: " + imc.toFixed(1) + " </p><img src='' alt='Mulher Magra'>";
        }
         else if (imc > 24.8) {
                mensagem.innerHTML = "<p>Mulher Gorda</p><p>IMC: " + imc.toFixed(1) + " </p><img src='' alt='Mulher Gorda'>";
        }
        else{
                mensagem.innerHTML = "<p>Mulher Peso Ideal</p><p>IMC: " + imc.toFixed(1) + " </p><img src='' alt='Mulher Peso Ideal'>";
        }
        break;
}