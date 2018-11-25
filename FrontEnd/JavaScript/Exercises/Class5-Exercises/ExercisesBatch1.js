function iterate(){

    for( i = 0; i <= 15; i++){

        if( i % 2 == 0){ 

            console.log(i,"even ");

        } else {console.log(i,"odd ");}

    }

}

function iterateIntegers(){

    for(var i = 0; i < 100; i++){

        if( i % 5 == 0 && i % 3 == 0){

            console.log("FizzBuzz");

        }else if( i % 5 == 0){

            console.log("Buzz");

        }else if( i % 3 == 0){

            console.log("Fizz");

        }else {console.log(i)}

    }

}