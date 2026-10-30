function OddOrEven(number) {
    if (number%2=== 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

let i = 2
let output = OddOrEven(i)
console.log(`The number ${i} is ${output}`);

i = -5
output = OddOrEven(i)
console.log(`The number ${i} is ${output}`);

i = 3
output = OddOrEven(i)
console.log(`The number ${i} is ${output}`);


