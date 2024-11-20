// Task 2

const arr = [2, 4, 6, 8, 10];

const add = arr.reduce((acc, index) => {
    return acc + index
})

const average = add / arr.length
console.log(average);

