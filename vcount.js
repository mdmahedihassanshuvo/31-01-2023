function findVowel(str){
    let vCount = 0;
    for(var i = 0; i <= str.length-1 ; i++){
        // console.log(str[i]);
        var element = str [i];
        if((element === "a") || (element === "e") || (element === "i") || (element === "o") ||(element === "u")){
            vCount ++;
        }
    }
    return vCount;
}

let totalVowel = findVowel("a quick brown fox jump over the lazy dog");
console.log(totalVowel);