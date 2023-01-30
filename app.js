// const numbersTotal = [4, 11, 42, 72, 25, 7, 8];


// function average(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     const result = Math.round(total / arr.length);
//     return result
// };

// console.log(average(numbersTotal));


function minMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return {
        min: min,
        max: max
    };
}

let numbers = [4, 11, 42, 72, 25, 7, 8, 822, 34, 54, 75];
let result = minMax(numbers);
console.log("Min:", result.min);
console.log("Max:", result.max);
