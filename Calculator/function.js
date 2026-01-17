const display = document.getElementById('display');

function displayIt(input){
  display.value += input;
}

function clearIt(){

  display.value = "";

}

function calculate(){
  display.value = eval(display.value);

}

function backSpace(){


}

