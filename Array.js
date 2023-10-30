function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

function generatePrimesArray(length, start) {
    const primesArray = [];
    let currentNumber = start;

    while (primesArray.length < length) {
        if (isPrime(currentNumber)) {
            primesArray.push(currentNumber);
        }
        currentNumber++;
    }

    return primesArray;
}

const arrayLength = parseInt(prompt("Введіть довжину масиву:"));
const startNumber = parseInt(prompt("Введіть початкове число для відліку:"));

if (isNaN(arrayLength) || isNaN(startNumber) || arrayLength <= 0) {
    console.log("Введіть коректні дані.");
} else {
    const primesArray = generatePrimesArray(arrayLength, startNumber);
    console.log("Масив простих чисел:", primesArray);
}
