function MultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

let num = prompt("Enter the number for multiplication table:");
MultiplicationTable(Number(num));
