const a = Number(prompt("Please enter numbe 1"));
let b;
do {
    b = Number(prompt("Please enter number 2"));
} while (a >= b);
let h;
do {
    h = Number(prompt("Please enter number 3"));
} while (h <= 0);
let sumOfFactorials = 0;
for (let i = a; i <= b; i += h) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    sumOfFactorials += factorial;
}
console.log(sumOfFactorials);