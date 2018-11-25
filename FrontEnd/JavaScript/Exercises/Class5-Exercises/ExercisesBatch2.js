function armstrong(){    

    for(var i = 100; i <= 999; i++){

        var first = i % 10;

        var second = parseInt(( i % 100) / 10);

        var third = parseInt( i / 100 );

        if(i == Math.pow( first, 3 )+Math.pow( second, 3)+Math.pow( third, 3)){

            console.log(i);

        }else { console.log("not armstrong"); }

    }

}

function SumOfMultiples(){

    var sum = 0;

    for(var i = 0; i < 1000; i++ ){

        if( i % 3 == 0 && i % 5 == 0){

            sum += i;

        }

    }

    return sum;

}