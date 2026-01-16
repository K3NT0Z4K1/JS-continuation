const toDoArray = [];


function addToArray(){

  const toDoInputElem = document.querySelector('.js-toDo-input').value;


  toDoArray.push(toDoInputElem);

  // console.log(toDoArray);

  displayToDo();



}

function displayToDo(){

   const toDoDisplay = document.querySelector('.js-input-display');

   toDoDisplay.innerHTML = toDoArray;




}