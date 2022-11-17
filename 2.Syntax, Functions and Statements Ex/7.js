function baking(num, ...ops){
    let number = Number(num)
    for(let i = 0; i < 5; i++){
        switch (ops[i]) {
            case "chop":
                number = number / 2
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1
                console.log(number);
                break;
            case "bake":
                number *= 3
                console.log(number);
                break;
            case "fillet":
                number = number * 0.80
                console.log(number.toFixed(1));
                break;
        }
    }
}
baking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')