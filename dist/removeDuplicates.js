// Task 3
const array = ["Roaa", "Roaa", "Ali", "Ahmad"]

function removeDuplicates(arr) {
    const mySet = new Set(arr)
    return [...mySet]
}

const unique = removeDuplicates(array)
console.log(unique);
