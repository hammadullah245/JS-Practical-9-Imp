function averageArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += array[i];
    }
    return sum / arr.length;
}
console.log(averageArray([1, 2, 3]));
console.log(averageArray([5, 5, 5]));

