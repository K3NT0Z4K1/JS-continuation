const toDoArray = [];


function addToArray(){

  const toDoInputElem = document.querySelector('.js-toDo-input');

  const name = toDoInputElem.value;


  toDoArray.push(name);


  toDoInputElem.value = '';

  // console.log(toDoArray);

  displayToDo();



}

function displayToDo(){

   const toDoDisplay = document.querySelector('.js-input-display');

   toDoDisplay.innerHTML = `${toDoArray}`;




}