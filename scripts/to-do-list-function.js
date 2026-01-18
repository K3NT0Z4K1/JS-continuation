const toDoArray = [];


function displayToDo(){

  let toDoHtml = '';

for(let i = 0; i < toDoArray.length; i++){

  const {name, dueDate} = toDoArray;

  const html = `

  <div>${name}</div>


  <div>${dueDate}</div>

  <button 
  onclick=" toDoArray.splice(${i},1);
  displayToDo();
  ">Delete</button>
  
  `;

  toDoHtml += html;

 

}

// console.log(toDoHtml);

 document.querySelector('.js-to-do-list').innerHTML = toDoHtml;

}


function addToArray(){

  const toDoInputElem = document.querySelector('.js-toDo-input');

  const name = toDoInputElem.value;

  const dueDateElem = document.querySelector('.js-date-input');

  const dueDate = dueDateElem.value;


  toDoArray.push({
    name: name,
    dueDate: dueDate
  });


  toDoInputElem.value = '';
  dueDateElem.value = '';

  console.log(toDoArray);


  displayToDo();

  // console.log(toDoArray);

  // displayToDo();

  // for(let i = 0; i < toDoArray.length; i++){

  //   const value = toDoArray[i];


  //   console.log(value);

    // const toDoDisplay = document.querySelector('.js-input-display');

    // toDoDisplay.innerHTML = value;


  }



