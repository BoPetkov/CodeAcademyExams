// Write a function that accepts two numbers N and X. 
// Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. 
// A number is TOTALLY DIFFERENT from another if every digit 
// in the first number is different than every digit of the second number. 
// You are not permitted to use arrays or matrices (we haven’t learned them yet). 
// It’s ok to write subprocedures (helper functions that get called in your main function).

function number(firstNumber, secondNumber){

    
    n = firstNumber;
    x = secondNumber;
    flag = true;

    for( var i = n + 1; i < x; i++){

        flag = true;
        firstNumber = i;

        while(firstNumber != 0){
            
            var mod = firstNumber % 10;
            secondNumber = x;

            while(secondNumber != 0){
                var mod2 = secondNumber % 10;
                if( mod != mod2 ){
                    secondNumber = parseInt( secondNumber / 10 );
                }else { 
                    flag = false;
                    break; 
                }
            }
            if ( flag == false ){
                break;}
            firstNumber = parseInt( firstNumber / 10 );
        }

        if( flag == true ){
            console.log(" closest number bigger than ",n,"that is TOTALLY DIFFERENT than the number",x,"is: ",i);
            break;
        } 
        
    }

    if (flag == false ){
        console.log("nema broj");
    }
}
