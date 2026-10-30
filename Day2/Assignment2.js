function integerType(number){
    if (number > 0) {
        return 'positive';
    } else if (number < 0) {
        return 'negative';
    } else {
        return 'neutral';
    }
}

let i =5
let output = integerType(i)
console.log(`The number ${i} is ${output}`);

i =-2
output = integerType(i)
console.log(`The number ${i} is ${output}`);

i =0
output = integerType(i)
console.log(`The number ${i} is ${output}`);



