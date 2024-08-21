//Aparecer na tela
function insert(num){
    let valor = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = valor + num
}

//Botão de limpar
function limpar(){
    document.getElementById('res').innerHTML = ''
}

//Botão de deletar
function back(){
    let deletar = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = deletar.slice(0, -1)
    // document.getElementById('res').innerHTML = deletar.substring(0, deletar.length -1)
}

//Botão de calcular
function calcular(){
    let calcular = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = eval(calcular)
}