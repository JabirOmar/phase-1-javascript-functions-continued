// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun);

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork);

const wrapAdjective = (activity = '*') =>{
    return (wraps = 'special') => {
        return `You are ${activity}${wraps}${activity}!`
    }
}
