function rangeIntegers( rangeStart, rangeEnd ){

    output = " ";

    for(var i = rangeStart; i <= rangeEnd; i++){

        console.log(i);

        // console.log(output += i);

    }

    console.log(output);

    

}

function isPrime(num) {

    if(num < 2) return false;

    for (var i = 2; i < num; i++) {

        if(num%i==0)

            return false;

    }

    return true;

}

function SumRangeIntegers( rangeStart, rangeEnd ){

    

    var sum = 0;

    var primeNumbersInRange = 0;

    var primeNumbers = [];

    for(var i = rangeStart; i < rangeEnd; i++){

        if(isPrime(i)){

            console.log("Prime number: ",i);

            primeNumbersInRange++;

            primeNumbers.push(i);

        } else { 

            console.log("Not prime number: ",i)

            sum += i; 

        }

    }

    console.log("Sum of not prime numbers: ",sum);

    console.log("Number of prime numbers in range: ",primeNumbersInRange);

    console.log(primeNumbers);

}