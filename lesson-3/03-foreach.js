// Bài tập1
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Bài tập 2
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Tổng:", sum);
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Giá trị lớn nhất:", max);
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("Giá trị nhỏ nhất:", min);

//Bài tập 3
const doubledNumbers = numbers.map(number => number * 2);
console.log("Mảng mới:", doubledNumbers);