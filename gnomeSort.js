function randomArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

function gnomeSort(arr){
    let i = 0;
    let temp;
    while (i < arr.length){
        if ( i === 0 || arr[i-1] <= arr[i]){
            i++
        } else{
            temp = arr[i];
            arr[i] = arr[i -1];
            arr[i - 1] = temp;
            i--;
        }
    }
    return arr;
}

console.log(gnomeSort(randomArr(30)));
