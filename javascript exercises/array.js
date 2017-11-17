// function printReverse(array){
//     for(var i = array.length - 1; i >= 0; i--){
//         console.log(array[i]);
//     }
// }

// function isUniform(array){
//     var check = array[0];
//     var i = 1;
//     while (i<array.length){
//         match(check,array[i]);
//         i++;
//     }
//     return true;
// }

// function match(a,b){
//     if (a !==b){
//     console.log("here")
//     return false;
//     }
// }

// function sumArray(array){
//     var total = 0;
//     array.forEach(function(value){
//         total = total + value;
//     });
//     return total;
// }

function max(array){
    var max = array[0];
    array.forEach(function(value){
        if (value > max){
            max = value;
        }
    });
    return max;
}