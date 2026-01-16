const toDoArray = [];




function addToArray(){

  const toDoInputElem = document.querySelector('.js-toDo-input');

  const name = toDoInputElem.value;


  toDoArray.push(name);


  toDoInputElem.value = '';

  // console.log(toDoArray);

  // displayToDo();

  for(let i = 0; i < toDoArray.length; i++){

    const value = toDoArray[i];


    console.log(value);

    // const toDoDisplay = document.querySelector('.js-input-display');

    // toDoDisplay.innerHTML = value;


  }



}

function displayToDo(){

   const toDoDisplay = document.querySelector('.js-input-display');

   toDoDisplay.innerHTML = toDoArray;




}