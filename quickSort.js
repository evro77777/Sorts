function randomArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

function quickSort(arr){
    let res  = [];
    function interLayer(arr){
        let less  = [],
            equal = [],
            more  = [],
            main  = [],
            pivot = arr[Math.floor(arr.length / 2)];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                less.push(arr[i]);
            } else if ( arr[i] === pivot){
                equal.push(arr[i]);
            } else if (arr[i] > pivot){
                more.push(arr[i]);
            }
        }
        main.push(less);

        if (equal.length > 1){
            for (let i = 0; i < equal.length; i++) {
                main.push([equal[i]])
            }
        } else{
            main.push(equal);
        }

        main.push(more);
        for (let i = 0; i < main.length; i++) {
            if (main[i].length > 1){
                interLayer(main[i]);
            }else if(main[i].length === 1){
                res.push(main[i][0]);
            }
        }
        return res;
    }
    interLayer(arr);
    return res;

}


let test = randomArr(30);
console.log(test);
console.log(quickSort(test));
