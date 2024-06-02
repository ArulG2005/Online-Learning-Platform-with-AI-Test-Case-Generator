// Function to generate test cases
function generateTestCases() {
    // Get the selected input type
    const inputType = document.getElementById('input-type').value;

    // Get the number of inputs
    const numInputs = parseInt(document.getElementById('num-inputs').value);

    // Get the number of test cases
    const numTestCases = parseInt(document.getElementById('num-testcases').value);

    // Generate test cases based on the input type and details
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = ''; // Clear any previous test cases

    // Generate and display test cases
    for (let i = 1; i <= numTestCases; i++) {
        let testCase = '';
        for (let j = 1; j <= numInputs; j++) {
            if (inputType === 'number') {
                testCase += (j === numInputs) ? `${getRandomNumber(-100, 100)}` : `${getRandomNumber(-100, 100)} `;
            } else if (inputType === 'array') {
                testCase += (j === numInputs) ? `${generateRandomArray(getRandomNumber(1, 10))}` : `${generateRandomArray(getRandomNumber(1, 10))}, `;
            } else if (inputType === 'string') {
                testCase += (j === numInputs) ? `${generateRandomString(getRandomNumber(1, 10))}` : `${generateRandomString(getRandomNumber(1, 10))}, `;
            } else if (inputType === 'positive-num') {
                testCase += (j === numInputs) ? `${getRandomNumber(1, 100)}` : `${getRandomNumber(1, 100)} `;
            } else if (inputType === 'negative-array') {
                testCase += (j === numInputs) ? `${generateNegativeArray(getRandomNumber(1, 10))}` : `${generateNegativeArray(getRandomNumber(1, 10))}, `;
            }
            // Add conditions for other input types if needed
        }

        // Display the generated test case
        outputContainer.innerHTML += `<p>Test Case ${i}: ${testCase}</p>`;
    }
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random string of given length
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random array of given length with negative numbers
function generateNegativeArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomNumber(-100, -1)); // Generate numbers between -100 and -1
    }
    return `[${array.join(', ')}]`; // Convert array to string format
}

// Function to generate a random array of given length
function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomNumber(-100, 100)); // Generate numbers between -100 and 100
    }
    return `[${array.join(', ')}]`; // Convert array to string format
}
document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.getElementById('userIcon');

    userIcon.addEventListener('click', function() {
       alert("Hello, hey fellow developer ❤️😍😘😁");
    });
});