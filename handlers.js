// import functions
import { add, subtract, multiply, divide } from './mathUtils.js';


// ------------------ ADD ------------------

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addSpan = document.getElementById('add-span');

// define what happens on click

export function handleAddClick() {
    const numberOne = addInput1.valueAsNumber;
    const numberTwo = addInput2.valueAsNumber;

// - Add together the VALUE of the two inputs
// function call

const sum = add(numberOne, numberTwo);

// - Inject the sum into our add `span`
addSpan.textContent = sum;
}


// ------------------ SUBTRACT ------------------

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractSpan = document.getElementById('subtract-span');

// define what happens on click

export function handleSubtractClick() {
    const numberOne = subtractInput1.valueAsNumber;
    const numberTwo = subtractInput2.valueAsNumber;

// - Add together the VALUE of the two inputs
// function call

const difference = subtract(numberOne, numberTwo);

// - Inject the sum into our add `span`
subtractSpan.textContent = difference;
}


// ------------------ MULTIPLY ------------------

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplySpan = document.getElementById('multiply-span');

// define what happens on click

export function handleMultiplyClick() {
    const numberOne = multiplyInput1.valueAsNumber;
    const numberTwo = multiplyInput2.valueAsNumber;

// - Add together the VALUE of the two inputs
// function call

const product = multiply(numberOne, numberTwo);

// - Inject the sum into our add `span`
multiplySpan.textContent = product;
}


// ------------------ DIVIDE ------------------

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideSpan = document.getElementById('divide-span');

// define what happens on click

export function handleDivideClick() {
    const numberOne = divideInput1.valueAsNumber;
    const numberTwo = divideInput2.valueAsNumber;

// - Add together the VALUE of the two inputs
// function call

const quotient = divide(numberOne, numberTwo);

// - Inject the sum into our add `span`
divideSpan.textContent = quotient;
}
