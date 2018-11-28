function palindrome(number)	{
    var rem, temp, final = 0;

    temp = number;

    while(number > 0)
    {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if(final == temp)
    {
        console.log("The inputed number is Palindrome");
    }
    else
    {
        console.log("The inputted number is not palindrome");
    }
}

function fuelSpend(){
    // A car uses 7 litres of fuel on 100 km.
    // 0.7 litres of fuel on 10 km.
    // 0.07 litres of fuel on 1 km.

    var usedFuel = 0;

    for (var i = 0; i < 100; i++){
        usedFuel += 0.07;

        if(i == 10){
            console.log("Used fuel on 10 km -", usedFuel.toFixed(2));
        } else if(i == 42){
            console.log("Used fuel on 43 km -", usedFuel.toFixed(2));
        } else if(i == 99){
            console.log("Used fuel on 100 km -", usedFuel.toFixed(2));
        }
    }
}