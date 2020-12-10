// Numbers
number1 = document.getElementById("one");
number2 = document.getElementById("two");
number3 = document.getElementById("three");
number4 = document.getElementById("four");
number5 = document.getElementById("five");
number6 = document.getElementById("six");
number7 = document.getElementById("seven");
number8 = document.getElementById("eight");
number9 = document.getElementById("nine");
number0 = document.getElementById("zero");

// Results input
results = document.getElementById("result");

// Delete button 
deleteAll = document.getElementById("delete");

deleteAll.addEventListener("click",deleteAllFunc);

function deleteAllFunc(){
    results.value = ""; 
}

// Done button 
done = document.getElementById("done");
 
done.addEventListener("click",getDone);

function getDone(){
  const a = eval(results.value);
  results.value = a;
}


// Add button 
add = document.getElementById("sum");

add.addEventListener("click",getSum);

function getSum(){
    results.value += "+";
    

}

// Subtract button 
 subtract = document.getElementById("subtract");

 subtract.addEventListener("click",getSub);

 function getSub(){
       results.value += "-";
 }

// Multiply button 
  multiply = document.getElementById("multiply");

  multiply.addEventListener("click",getMultiply);
 
  function getMultiply(){
        results.value += "*";
  }
 
// Divide button 
divide = document.getElementById("divide");

divide.addEventListener("click",getDivide);

function getDivide(){
      results.value += "/";
}

// Comma button 
dot = document.getElementById("dot");

dot.addEventListener("click",getDot);

function getDot(){
    results.value += "."
}



// Number 1
number1.addEventListener("click",getValue1);

function getValue1(){
  if(results.value === "0"){
   results.value = number1.value;
  } else {
   results.value += number1.value;
  }
  
}

// Number 2
number2.addEventListener("click",getValue2);

function getValue2(){
  if(results.value === "0"){
    results.value = number2.value;
   } else {
    results.value += number2.value;
   }
}

// Number 3
number3.addEventListener("click",getValue3);

function getValue3(){
  if(results.value === "0"){
    results.value = number3.value;
   } else {
    results.value += number3.value;
   }
}

// Number 4
number4.addEventListener("click",getValue4);

function getValue4(){
  if(results.value === "0"){
    results.value = number4.value;
   } else {
    results.value += number4.value;
   }
}

// Number 5
number5.addEventListener("click",getValue5);

function getValue5(){
  if(results.value === "0"){
    results.value = number5.value;
   } else {
    results.value += number5.value;
   }
}

// Number 6
number6.addEventListener("click",getValue6);

function getValue6(){
  if(results.value === "0"){
    results.value = number6.value;
   } else {
    results.value += number6.value;
   }
}

// Number 7
number7.addEventListener("click",getValue7);

function getValue7(){
  if(results.value === "0"){
    results.value = number7.value;
   } else {
    results.value += number7.value;
   }
}

// Number 8
number8.addEventListener("click",getValue8);

function getValue8(){
  if(results.value === "0"){
    results.value = number8.value;
   } else {
    results.value += number8.value;
   }
}

// Number 9
number9.addEventListener("click",getValue9);

function getValue9(){
  if(results.value === "0"){
    results.value = number9.value;
   } else {
    results.value += number9.value;
   }
}

// Number 0
number0.addEventListener("click",getValue0);

function getValue0(){
    results.value += number0.value;
}