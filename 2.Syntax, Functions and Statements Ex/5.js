function timeToSchool(steps, footlenght, speed) {
    let lenghtInM = steps * footlenght
    let speedInM = speed / 3.6
    let time = lenghtInM / speedInM
    let rest = Math.floor(lenghtInM / 500)
    time += rest * 60

    let timeInMin = Math.floor(time / 60)
    let timeInSec = time - (timeInMin * 60)
    let timeInH = Math.floor(time / 3600)

    let formatedTimeInH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`
    let formatedTimeInMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`
    let formatedTimeInSec = timeInSec < 10 ? `0${timeInSec.toFixed(0)}` : `${timeInSec.toFixed(0)}`

    console.log(`${formatedTimeInH}:${formatedTimeInMin}:${formatedTimeInSec}`);


}
timeToSchool(2564, 0.70, 5.5)