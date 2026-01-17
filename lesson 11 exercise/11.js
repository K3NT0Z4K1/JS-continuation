
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

  let firstValue = array[0];

  const tobeLast = firstValue;

  const lastValueIndex = array.length - 1;

  let lastValue = array[lastValueIndex];

  console.log(`The original array ${array}`)

  array[0] = lastValue;

  array[lastValueIndex] = firstValue;

  console.log(`The Swapped array ${array}`)

}

arraySwap(nums);