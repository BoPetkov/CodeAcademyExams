function PriceTax(phones,price,ratePercent,taxPercent, type){
        var rate = ((phones * price) * ratePercent) / 100;
        var tax = ((phones * price) * taxPercent) / 100;
    
        var realPrice = phones * price - rate - tax;
    
        console.log(realPrice);

        //

        // var result = phones * price - rate - tax;
    
        // if(type === "DROID"){
        //     result -= result * 0.05;
        // }else if(type === "IOS"){
        //     result -= result * 0.02;
        // } else {
        //     result;
        // }
        // return(result);
    }