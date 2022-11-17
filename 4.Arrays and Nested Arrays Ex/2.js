function nth(arr, n){
    let resu = []
    for(let i = 0; i < arr.length; i += n){
        resu.push(arr[i])
    }
    return resu
}
nth(['5', '20', '10','4','20'], 2)