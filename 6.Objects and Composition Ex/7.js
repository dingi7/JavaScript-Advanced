function townsToJson(arr){
    let res = []
    for(let i of arr){
        let [town, latitude, longtitude] = i.split(" | ")
        town = town.split("| ")[1]
        longtitude = longtitude.split(" |")[0]
        longtitude = Number(longtitude)
        latitude = Number(latitude)
        if(town === "Town"){
            continue;
        }
        let obj = {
            "Town": town,
            "Latitude": Number(latitude.toFixed(2)),
            "Longitude": Number(longtitude.toFixed(2))
        }
        res.push(obj)
    }
    console.log(JSON.stringify(res))
}

townsToJson(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])