function random(){


    var big=0;
    for(i=0; i<10; i++){
       var randomGenerate = Math.random()*100 + 1;
       console.log(randomGenerate);
        if(randomGenerate>big){
            big=randomGenerate;
        }
    }
    console.log("Najgolem");
    return big;
 }
 
 
 
 function SumOfSquares(){
 
    var number = 0;
 
    for(var i=101; i<150; i++){
 
        // var square = i*i;
        var square = Math.pow(i,2);
        console.log(parseInt(square));
        number += square;
 
    }
    console.log("sum: ")
    return parseInt(number);
 }

 function  SumOfDigits(number){

    sum = 0;
    
    while(number!=0){
  
    var mod = number % 10;
    number = parseInt(number / 10);
    
    sum += mod;
    }
    return sum;
    }