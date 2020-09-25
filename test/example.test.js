// IMPORT MODULES under test here:

import { add, subtract, multiply, divide } from '../mathUtils.js';

const test = QUnit.test;

// ------------------ ADD ------------------

test('add should take in 2 and 3 and return 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 2;
    const argument2 = 3;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// ------------------ SUBTRACT ------------------

test('subtract should take in 9 and 6 and return 3', (expect) => {
    const argument1 = 9;
    const argument2 = 6;
    const expected = 3;

    const actual = subtract(argument1, argument2);

    expect.equal(actual, expected);
})

// ------------------ MULTIPLY ------------------

test('multiply should take in 2 and 4 and return 8', (expect) => {
    const argument1 = 2;
    const argument2 = 4;
    const expected = 8;

    const actual = multiply(argument1, argument2);

    expect.equal(actual, expected);
})

// ------------------ DIVIDE ------------------

test('divide should take in 9 and 3 and return 3', (expect) => {
    const argument1 = 9;
    const argument2 = 3;
    const expected = 3;

    const actual = divide(argument1, argument2);

    expect.equal(actual, expected);
})