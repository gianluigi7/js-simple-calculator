'use strict'


const result = document.getElementById('result');


function NumeriDisplay(input) {
    result.value += input;
}

function OperatoriDisplay(input) {
    result.value += input;
    reset();
}


function reset() {
    result.value = '';
}