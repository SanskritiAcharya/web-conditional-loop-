let num = prompt("Enter a number:");
function checkEvenOdd(number) {
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        if (number % 2 === 0) {
            console.log(`${number} is an even number.`);
        } else {
            console.log(`${number} is an odd number.`);
        }
    }
}
checkEvenOdd(Number(num));
