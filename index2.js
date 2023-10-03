let display=document.querySelector('.display');
display.value=0;

function appendToDisplay(value) {
  if(display.value==0){
    display.value ="";
   
  }

    display.value += value;

    if(display.value.length>=9){
       display.value="Too long";
   }
 }

function reset(){
  display.value=0;
}

function Del(){
  
  if(display.value==0 || display.value=='Too long' || display.value=='Error'){
    display.value =0;
  }else {
      display.value = display.value.slice(0, -1);
    }
   
  }

function calculateResult() {
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = "Error";
  }
}
