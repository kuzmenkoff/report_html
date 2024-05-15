function task4Execute() {
    let array = generateArray();
    let sum = findSum(array);
    let sortedArray = quickSort(array);
    document.getElementById("sortedArrayOutput").innerText = sortedArray.join(", ");
}

function generateArray() {
    let size = document.getElementById("quantity").value;
    size = parseInt(size, 10);
    if (isNaN(size) || size < 1 || size > 100) {
        document.getElementById("arrayOutput").innerText = "Введіть коректний розмір масиву від 1 до 100.";
        return;
    }
    const array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    document.getElementById("arrayOutput").innerText = array.join(", ");
    return array;
}

function findSum(array) {
    let maxIndex = array.indexOf(Math.max(...array));
    let minIndex = array.indexOf(Math.min(...array));
    let startIndex = Math.min(minIndex, maxIndex);
    let endIndex = Math.max(minIndex, maxIndex);

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += array[i];
    }

    document.getElementById("Sum").innerText = sum;
    return sum;
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const pivot = array[Math.floor(array.length / 2)];
    const less = [];
    const greater = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            less.push(array[i]);
        } else if (array[i] > pivot) {
            greater.push(array[i]);
        }
    }
    
    return [...quickSort(less), pivot, ...quickSort(greater)];
}
