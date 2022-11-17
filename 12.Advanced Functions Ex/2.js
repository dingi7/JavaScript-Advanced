function info(...input){
    let obj = {}
    for(let i of input){
        console.log(`${typeof i}: ${i}`);
        if(!obj.hasOwnProperty(typeof(i))){
            obj[typeof(i)] = 0
        }
            obj[typeof(i)] = obj[typeof(i)] + 1
    }
    let buff = ""
    for(let [k,v] of Object.entries(obj)){
        buff += `${k} = ${v}\n`
    }
    console.log(buff);
}
info('cat', 42, function () { console.log('Hello world!'); })