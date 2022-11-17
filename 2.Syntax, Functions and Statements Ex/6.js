
function SpeedLimit(speed, area){
    let SpeedLimitInKM = 0
    switch (area) {
        case "motorway":
            SpeedLimitInKM = 130
            break;
        case "interstate":
            SpeedLimitInKM = 90
            break;       
        case "city":
            SpeedLimitInKM = 50
            break;                
        case "residential":
            SpeedLimitInKM = 20
            break;
    }
    if(speed <= SpeedLimitInKM){
        console.log(`Driving ${speed} km/h in a ${SpeedLimitInKM} zone`);
    }
    else if(speed > SpeedLimitInKM){
        let difference = speed - SpeedLimitInKM
        let status;
        if(difference <= 20){
            status = "speeding"
        }
        else if(difference <= 40 && difference > 20){
            status = "excessive speeding"
        }
        else{
            status = "reckless driving"
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${SpeedLimitInKM} - ${status}`);
    }
}
SpeedLimit(120, 'interstate')