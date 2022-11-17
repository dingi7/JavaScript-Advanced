
function sameNumber(num){
    let digit = num % 10
    let isFalse = false
    let isTrue = true
    let sum = 0
    let lenght = num.toString().length
    for(let i = 0; i < lenght; i++){
        let last_digit = Math.floor(num % 10)
        sum+= Math.floor(last_digit)
        num = num / 10
        if(last_digit != digit){
            isFalse = true
        }
        else{
            isTrue = true
        }
    }
    if(isFalse){
        console.log("false");
    }
    else{
        console.log("true");
    }
    console.log(sum);
}
sameNumber(2222)