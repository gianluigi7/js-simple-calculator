'use strict'


const result = document.getElementById('result');


function NumeriDisplay(input) {
    result.value += input;
}


function reset() {
    result.value = '';
}