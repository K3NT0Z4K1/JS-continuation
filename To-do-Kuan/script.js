const arr = [];


function addInArray(){

  const inputValueElem = document.querySelector('.js-input');

  const name = inputValueElem.value;

  arr.push(name);


console.log(arr);

inputValueElem.value= '';

showIt()

}


function showIt(){

  const showELem = document.querySelector('.js-show');

  showELem.innerHTML = `${arr}`;
}