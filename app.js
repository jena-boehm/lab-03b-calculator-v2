// ------------------ ADD ------------------

// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addSpan = document.getElementById('add-span');

console.log(addInput1);
console.log(addInput2);
console.log(addButton);
console.log(addSpan);

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {

    // Get the values of the two inputs
    const value1 = addInput1.valueAsNumber;
    const value2 = addInput2.valueAsNumber;  
    
    // Add together the value of the two inputs
    const sum = value1 + value2;

    // Inject the sum into the sum 'span'
    addSpan.textContent = sum;
});


// ------------------ SUBTRACT ------------------

// import functions and grab DOM elements
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractSpan = document.getElementById('subtract-span');

console.log(subtractInput1);
console.log(subtractInput2);
console.log(subtractButton);
console.log(subtractSpan);

// set event listeners to update state and DOM
subtractButton.addEventListener('click', () => {

    // Get the values of the two inputs
    const value1 = subtractInput1.valueAsNumber;
    const value2 = subtractInput2.valueAsNumber;  
    
    // Add together the value of the two inputs
    const difference = value1 - value2;

    // Inject the sum into the sum 'span'
    subtractSpan.textContent = difference;
});


// ------------------ MULTIPLY ------------------

// import functions and grab DOM elements
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplySpan = document.getElementById('multiply-span');

console.log(multiplyInput1);
console.log(multiplyInput2);
console.log(multiplyButton);
console.log(multiplySpan);

// set event listeners to update state and DOM
multiplyButton.addEventListener('click', () => {

    // Get the values of the two inputs
    const value1 = multiplyInput1.valueAsNumber;
    const value2 = multiplyInput2.valueAsNumber;  
    
    // Add together the value of the two inputs
    const product = value1 * value2;

    // Inject the sum into the sum 'span'
    multiplySpan.textContent = product;
});



// ------------------ DIVIDE ------------------

// import functions and grab DOM elements
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideSpan = document.getElementById('divide-span');

console.log(divideInput1);
console.log(divideInput2);
console.log(divideButton);
console.log(divideSpan);

// set event listeners to update state and DOM
divideButton.addEventListener('click', () => {

    // Get the values of the two inputs
    const value1 = divideInput1.valueAsNumber;
    const value2 = divideInput2.valueAsNumber;  
    
    // Add together the value of the two inputs
    const quotient = value1 / value2;

    // Inject the sum into the sum 'span'
    divideSpan.textContent = quotient;
});