
// Even Test
function isEven(response) {
    if (response % 2 === 0){
        return "true"
    }
    else {
        return "false"
    }
}

// Factorial
function factorial(number) {
    if(number<2){
        return 1
    }
    else {
        var total = 1;
        for (var i=number;i>1;i--) {
            total = total * i;
        }
    }
    return total;
}



//Kebab to Snake

function kebabToSnake(string){
    var newString = string.replace(/-/g,'_');
    return newString;
}

