function Price(phones,price){
        var rate = ((phones * price) * 5) / 100;
        var tax = ((phones * price) * 18) / 100;        
        
        var result = phones * price - rate - tax;

        return(result);
    }