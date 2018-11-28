function catFeed(){
    
    var daysOfWeek= ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"]
    daysOfWeek.length;
    

    for(var i = 0; i < daysOfWeek.length; i++){

        console.log("");
        console.log(daysOfWeek[i],"Cats are eating:");
        dailyFeed()
    }
}

function dailyFeed(){
    
    var cats = ["Tabby", "Lizzy", "Mary"];
    cats.length;

    for( var j = 0; j < cats.length; j++){
        var cat = cats[j];
        if( cat === "Tabby" ){
            console.log(cats [j] + " started eating Fish");
        }else if( cat === "Lizzy" ){
            console.log(cats [j] + " started eating Chicken");
        }else if( cat === "Mary" ){
            console.log(cats [j] + " started eating Chicken-Fish");
        }
        
    }
}


function saveLife(){

    for(var i = 1; i <= 60; i++){
        if(i == 60){
            console.log(i," Patient alive");
        } else if(i % 15 == 0){
            console.log(i," Checking the pulse")
        } else{
            console.log(i," Performing massage on hearth");
        }     
    }

}