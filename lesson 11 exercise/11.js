
// 11a

/*
const nums = [10,20,30];

nums[2] = 99;

console.log(nums);
*/




const nums = [10,20,30,40,50];
const animals = ['iro', 'iring', 'tawo'];

// 11b function
function getLastValue(array){

const lastValue = array.length-1;

console.log(array[lastValue]);
}


// 11c function
function arraySwap(array){

  const firstValue = array[0];

  const tobeLast = firstValue;

  const lastValueIndex = array.length - 1;

  const lastValue = array[lastValueIndex];

  firstValue = lastValue;

  lastValue = tobeLast;


}

