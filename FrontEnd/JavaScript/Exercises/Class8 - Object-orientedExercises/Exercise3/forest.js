function Month() {

    var bear = new Bear(140);

    for (var i = 1; i <= 30; i++) {
        console.log("Day: " + i);


        if(getRandom(0,100) < 30){
            var animal = new Animal(getRandom(1, 4));

            if (bear.bearMass > 220) {
    
                console.log("Bear Rest one day");
                bear.bearMass *= 0.8;
                console.log("bear mass " + parseInt(bear.bearMass));
                console.log("");
                continue;
    
            } else if (bear.bearMass < 100) {
    
                return console.log("Bear DEAD!!!");
    
            } else {

                if(animal.number == 1){
                    console.log("bear eat rabbit");
                }
                
                if(animal.number == 2){
                    console.log("bear eat deer");
                }
                
                if(animal.number == 3){
                    console.log("bear eat fish");
                }
    
                if (animal.type === "wolf") {
                    // console.log("The bear eat wolf");
                    console.log("Bear mass : " + parseInt(bear.bearMass));
                    bear.bearMass *= 0.9;
                    console.log("Bear mass after cathching wolf : " + parseInt(bear.bearMass));
                    bear.bearEat(animal.Mass / 2);
                    console.log("Bear mass after eating wolf: " + parseInt(bear.bearMass));
                    console.log("");
    
                } else {
                    bear.bearEat(animal.Mass);
                    console.log("Bear mass: " + parseInt(bear.bearMass));
                    console.log("");
                }
    
            }
    
        } else {
            bear.bearMass *= 0.8;
            console.log("Bear did not eat, bear mass: " +  parseInt(bear.bearMass));
            console.log("");
            if (bear.bearMass < 100) {
    
                return console.log("Bear DEAD!!!");
    
            }
        }
       
    }

}

Month();