function findResult(number){
    if((number >= 33) && (number <= 39)){
        console.log("you got D grade:", number);
    }
    else if((number >= 40) && (number <= 49)){
        console.log("you got C grade:", number);
    }
    else if((number >= 50) && (number <= 59)){
        console.log("you got B grade:", number);
    }
    else if((number >= 60) && (number <= 79)){
        console.log("you got A- grade:", number);
    }
    else if((number >= 80) && (number <= 100)){
        console.log("you got A+ grade:", number);
    }
    else{
        console.log("you are fail");
    }
}

findResult(45);