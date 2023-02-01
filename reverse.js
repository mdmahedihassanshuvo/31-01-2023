function reverseStr (str){
    let string = "";
    for(var i = str.length-1; i >= 0 ; i--){
        // console.log(str[i]);
        var element = str[i];
        string += element;
    }
    return string;
}

let newString = reverseStr ("uoy evol i");
console.log(newString);

