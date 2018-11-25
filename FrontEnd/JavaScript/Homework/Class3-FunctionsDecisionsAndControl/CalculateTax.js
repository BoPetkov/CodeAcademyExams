function taxcalc(salary, craft){

    var tax;
    var taxover;
  
    if(craft == 1){
      if(salary<=1000){
        tax=(salary*5)/100;
        return tax;
      }else if(salary>1000){
        tax=(1000*5)/100;
        taxover=((salary-1000)*10)/100;
        return tax+taxover;
      }
    }else {
      if(salary<=1000){
        tax=(salary*11)/100;
        return tax;
      }else if(salary>1000){
        tax=(1000*11)/100;
        taxover=((salary-1000)*18)/100;
        return tax+taxover;
      }
    }
  }