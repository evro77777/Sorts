function randomArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random()*1000));
    }
    return arr;
}
function div(val, by){
    return by === 1 ? val % 10 : ((val - val % by) / by) % by;
}
function maxRadix(arr){
    let maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxVal){
            maxVal = arr[i];
        }
    }
    return Math.pow(10,maxVal.toString().length);
}
function radixSortLSD(arr){
    let temp = [],res = [];
    temp = arr.slice();
    for (let radix = 1; radix <= maxRadix(arr) ; radix = radix * 10) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < temp.length; j++) {
                if (i === div(temp[j],radix)){
                    res.push(temp[j]);
                }
            }
        }
        temp = res.slice();
        if (radix !== maxRadix(arr)){
            res = [];
        }
    }
    return res;
}
let test = randomArr(30);
console.log(test);
console.log(radixSortLSD(test));