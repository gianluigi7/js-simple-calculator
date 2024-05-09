'use strict'


const result = document.getElementById('result');


function NumeriDisplay(input) {
    result.value += input;
}

function reset() {
    result.value = '';
}

function OperatoriDisplay(input) {
    result.value += input;
    // reset();
}

function OperatoriDisplay(input) {
    result.value += input;
    // reset();
} 
function calcola() {
    result.value = eval(result.value);
}

