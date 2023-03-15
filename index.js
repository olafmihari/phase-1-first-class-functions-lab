// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    let newA = [arr[0], arr[1]]
    return newA;
}

function returnLastTwoDrivers(arr){
    let newA = [arr[arr.length -2], arr[arr.length -1]]
    return newA;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function fareDoubler(num){
    const newVar = createFareMultiplier()
    return num*2
}
function createFareMultiplier(num){
    let product = num*num
    return function () {return product}
}
function fareTripler(fare){
    return fare*3
}    
function selectDifferentDrivers(arrayOfDrivers, fx){
    if (fx === returnFirstTwoDrivers){
        return fx(arrayOfDrivers);
    }
    else if(fx === returnLastTwoDrivers){
        return fx(arrayOfDrivers)
    }
}