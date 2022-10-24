const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
//[1,  4,  9, 16,  25, 36, 49, 64, 81, 100]


//using map
function square(element) {
    return element * element;
}

numbers.map(function (element, index, array) {
    console.log(element, index, array);
})
//1 0 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//2 1 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//3 2 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//4 3 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//5 4 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//6 5 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//7 6 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//8 7 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//9 8 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
//10 9 [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
const num = [24, 45, 67, 89, 90, 100];
function square(element) {
    return element * element;
}
// const square = element => element * element;
// const square = x => x * x;

const result2 = num.map(function (element) {
    return element * element;
})
console.log(result2);
//[ 576, 2025, 4489, 7921, 8100, 10000 ]

const num1 = [38, 39, 46, 56]
const result3 = num1.map(x => x * x);
console.log(result3);
//[ 1444, 1521, 2116, 3136 ]


//filter
const num2 = [67, 68, 97, 60, 76, 677]
const bigger = num2.filter(x => x > 66);
const isThere = num2.find(x => x < 70);
console.log(bigger);
//[ 67, 68, 97, 76, 677 ]
console.log(isThere);
//67