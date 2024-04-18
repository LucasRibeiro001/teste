var r1 = document.querySelector('#r1');
var r2 = document.querySelector('#r2');
var result1 = document.querySelector('#result1');
var result2 = document.querySelector('#result2');
var total = document.querySelector('#renda');

var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');
var saldo = document.querySelector('#saldo')
var saida = document.querySelector('#saida')

function add1() {
    result1.innerHTML = r1.value;
    result2.innerHTML = r2.value;
    total.innerHTML = parseInt(r1.value) + parseInt(r2.value);
}

function calc(){
    saldo.innerHTML = (parseInt(r1.value) + parseInt(r2.value)) - parseInt(c1.value) - parseInt(c2.value) - parseInt(c3.value);
    saida.innerHTML = parseInt(c1.value) + parseInt(c2.value) + parseInt(c3.value)
}
