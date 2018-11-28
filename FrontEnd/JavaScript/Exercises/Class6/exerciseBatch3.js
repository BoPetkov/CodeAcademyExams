function flirt(numberOfTries, numberOfHitpoints){

    var girlPoints = 0;
    var tired = 10;

    for(var i = 1; i <= numberOfTries; i++ ){

        if( i % 5 == 0){
            girlPoints += 10;
            console.log("girl Points: ",girlPoints);
        } else if( i % 3 == 0 ){
            girlPoints += 5;
            console.log("girl Points: ",girlPoints);
        } else {
            girlPoints += 1;
            console.log("girl Points: ",girlPoints);
        }

        if(tired == i){
            tired += 10;
            girlPoints -= 12;
            console.log("Hitpoints",girlPoints)
        }
    }

    console.log("Points", girlPoints);

    if(numberOfHitpoints > girlPoints){
        console.log("girl did not get the boy");
    } else {
        console.log("girl get the boy");
    }

}



function fight(){

    var humanHitpoints = 550 ;
    var humanArmor = 9;
    var orcHitpoints = 720;
    var orcArmor = 5;
    
    var humanTakeDamage = 0;
    var orcTakeDamage = 0;

    while (humanHitpoints > 0 && orcHitpoints > 0){

        humanTakeDamage = orcAttack() - humanArmor;
        orcTakeDamage = humanAttack() - orcArmor;

        orcHitpoints -= orcTakeDamage;
        console.log("Orc take",orcTakeDamage," damage");
        console.log("Orc hitpoints = ",orcHitpoints);
        
        humanHitpoints -= humanTakeDamage;
        console.log("Human take",humanTakeDamage," damage");
        console.log("Human hitpoints = ",humanHitpoints);
        
        console.log(" ");

        if(humanHitpoints < 0){
            console.log("Human lose");
        }
        if (orcHitpoints < 0){
            console.log("Orc lose");
        }
    }
}

function humanAttack() {
    min = Math.ceil(18);
    max = Math.floor(27);
    return Math.floor(Math.random() * (27 - 18 + 1)) + 18; 
  }

function orcAttack() {
    min = Math.ceil(23);
    max = Math.floor(35);
    return Math.floor(Math.random() * (35 - 23 + 1)) + 23;
}

