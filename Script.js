let peso
let altura
let escolha
let calcular  = document.querySelector ('#btn_calcular')

calcular.onclick = function calcular_imc(){
    peso = parseFloat(document.querySelector('#peso').value)
    peso = parseFloat(document.querySelector('#altura').value)
    escolha = document.querySelector('#selecao_genero').value
}