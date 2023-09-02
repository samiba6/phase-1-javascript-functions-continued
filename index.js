// code your solution here
// code your solution here
function saturdayFun(act="roller-skate"){

    return `This Saturday, I want to ${act}!`;
}
const mondayWork= function (act="go to the office"){ return `This Monday, I will ${act}.`}
function wrapAdjective(flair="*"){
  return  function inner(par="special"){
        return  `You are ${flair}${par}${flair}!`;
    }
}
console.log(wrapAdjective()())