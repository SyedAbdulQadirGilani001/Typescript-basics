
// add two numbers with fat arrow function
function add(a: number, b: number): number 
    {
        return a + b;
    }
    console.log(add(10, 20)); // 30
// toString() method
let num: number = 10;
console.log(num.toString()); // 10
// boolean
let isTrue: boolean = true;
// function even true for even, else false
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(10)); // true
console.log(isEven(11)); // false
// ANY
let anyValue: any = 10;
console.log(anyValue); // 10
// Unknown
let unknownValue: unknown = 10;
console.log(unknownValue); // 10
// .map method
let arr: number[] = [1, 2, 3, 4, 5];
let newArr = arr.map((num) => num * 2);
console.log(newArr); // [2, 4, 6, 8, 10]
// return type void
function greet(): void {
    console.log("Hello World");
}
greet(); // Hello World
// Q 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
function calculateAverage(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
// Q 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMaxValue(arr: number[]): number {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMaxValue([1, 2, 3, 4, 5])); // 5