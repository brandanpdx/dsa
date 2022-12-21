function countUniqueValues(arr) {
    let uniqueCount = 1;
    if (arr.length === 0 ) {
        return 0;
    }
    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] !== arr[i+1]){
            uniqueCount++;
        }
    }
    return uniqueCount;
}