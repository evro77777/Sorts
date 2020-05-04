function randomArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

function bubble(arr){
    let temp;
    for(let i = 1; i < arr.length; i++){
        for (let j = 1; j < arr.length; j++){
            if (arr[j-1] > arr[j]){
                temp = arr[j - 1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let test = randomArr(30);
console.log(bubble(test));