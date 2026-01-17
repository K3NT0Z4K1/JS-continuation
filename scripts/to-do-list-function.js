const toDoArray = [
  {name: 'Mag code',
   dueDate: '12-22-2026'
  },
    {name: 'Mag debug',
   dueDate: '12-22-2026'
  }
];


function displayToDo(){

  let toDoHtml = '';

for(let i = 0; i < toDoArray.length; i++){

  let val = toDoArray[i];

  const {name, dueDate} = toDoArray;

  const html = `
  <p> 
  
  ${val} 

  <button 
  onclick=" toDoArray.splice(${i},1);
  displayToDo();
  ">Delete</button>
  
  </p>`;

  toDoHtml += html;

 

}

console.log(toDoHtml);

 document.querySelector('.js-to-do-list').innerHTML = toDoHtml;

}


function addToArray(){

  const toDoInputElem = document.querySelector('.js-toDo-input');

  const name = toDoInputElem.value;


  toDoArray.push(name);


  toDoInputElem.value = '';

  displayToDo();

  // console.log(toDoArray);

  // displayToDo();

  // for(let i = 0; i < toDoArray.length; i++){

  //   const value = toDoArray[i];


  //   console.log(value);

    // const toDoDisplay = document.querySelector('.js-input-display');

    // toDoDisplay.innerHTML = value;


  }



