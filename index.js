// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const x = someValue - 42
    return Math.abs(x)
}

function distanceFromHqInFeet(someValue) {
    const x = Math.abs(someValue - 42)
    const y = x * 264
    return y
}

function distanceFromHqInFeet(someValue) {
    const x = Math.abs(someValue - 42)
    const y = x * 264
    return y
}

function distanceTravelledInFeet(someValue,otherValue) {
    const x = Math.abs(someValue - otherValue)
    const y = x * 264
    return y
}


function calculatesFarePrice(start,destination) {
    const x = Math.abs(destination - start)
    const y = x * 264
    let fare=null
    if (y < 400) {
        fare = 0;
    }
    else if (y >=400 && y < 2000) {
        fare = .02 * (y-400);
    }
    else if (y >=2000 && y < 2500) {
        fare = 25;
    }
    else {
        fare= "cannot travel that far";
    };
    return fare

}