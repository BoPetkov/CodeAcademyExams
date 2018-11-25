function Temp (temperature , type){

    var result;

    if(type === "C"){
        result = temperature*1.8+32;
    } else if(type === "F"){
        result = 5/9 * (temperature-32);
    } else {
         result= "blalbala"
    }
    console.log("Temperature is");
    return result;
    
}