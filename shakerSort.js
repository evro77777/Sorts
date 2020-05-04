function randomArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

function shakerSort(arr){
    let maxVal,minVal;
    let end = 0;
    let begin = 1;
    for(let i = 1; i < arr.length; i++){
        for (let j = begin; j < arr.length - end; j++){
            if (arr[j-1] > arr[j]){
                maxVal = arr[j - 1];
                arr[j-1] = arr[j];
                arr[j] = maxVal;
            }
            if (j === arr.length - end - 1){
                for (let k = arr.length - end ; k >= begin; k--){
                    if (arr[k] < arr[k-1]){
                        minVal = arr[k];
                        arr[k] = arr[k-1];
                        arr[k-1] = minVal;
                    }

                }
            }
        }
        end++;
        begin++;

    }
    return arr;
}

console.log(shakerSort(randomArr(50)));
