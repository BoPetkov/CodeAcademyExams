function maxOfThree(number1, number2, number3){
  
  var biggest=number1;
  var big;

  if(biggest>number2){
    big=biggest;
  } else {biggest=number2
  }
  if(biggest>number3){
    big=biggest;
  } else {big = number3
  }
    
  return big;
}