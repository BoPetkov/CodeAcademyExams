function Month() {

    var bear = new Bear(140);

    for (var i = 1; i <= 30; i++) {
        console.log("Day: " + i);


        if (getRandom(0, 100) < 30) {
            var animal = new Animal(getRandom(1, 4));

            if (bear.bearMass > 220) {

                var bearRest = document.createElement('div');
                bearRest.style.height = "100px";
                bearRest.style.width = "500px";
                bearRest.style.marginBottom = "10px";
                bearRest.style.background = "green";
                bearRest.innerHTML = "Bear Rest one day";
                document.body.append(bearRest);
                console.log("Bear Rest one day");
                bear.bearMass *= 0.8;

                var bearMass = document.createElement('div');
                bearMass.style.height = "100px";
                bearMass.style.width = "500px";
                bearMass.style.marginBottom = "10px";
                bearMass.style.background = "pink";
                bearMass.innerHTML = "Bear lost weight on rest day"
                document.body.append(bearMass);

                console.log("bear mass " + parseInt(bear.bearMass));
                console.log("");
                continue;

            } else if (bear.bearMass < 100) {

                return console.log("Bear DEAD!!!");

            } else {

                if (animal.number == 1) {
                    console.log("bear eat rabbit");
                }

                if (animal.number == 2) {
                    console.log("bear eat deer");
                }

                if (animal.number == 3) {
                    console.log("bear eat fish");
                }

                if (animal.type === "wolf") {
                    var bearMass = document.createElement('div');
                    console.log("The bear eat wolf");

                    bearMass.style.height = "100px";
                    bearMass.style.width = "500px";
                    bearMass.style.marginBottom = "10px";
                    bearMass.innerHTML = "bear eat wolf";
                    bearMass.style.background = "purple";
                    document.body.append(bearMass);
                    console.log("Bear mass : " + parseInt(bear.bearMass));
                    bear.bearMass *= 0.9;

                    var bearMassWolf = document.createElement('div');
                    bearMassWolf.style.height = "100px";
                    bearMassWolf.style.width = "500px";
                    bearMassWolf.style.marginBottom = "10px";
                    bearMassWolf.innerHTML = "bear lost weight while chasing wolf";
                    bearMassWolf.style.background = "blue";
                    document.body.append(bearMassWolf);
                    console.log("Bear mass after cathching wolf : " + parseInt(bear.bearMass));
                    bear.bearEat(animal.Mass / 2);

                    var bearMassWolfEat = document.createElement('div');
                    bearMassWolfEat.style.height = "100px";
                    bearMassWolfEat.style.width = "500px";
                    bearMassWolfEat.style.marginBottom = "10px";
                    bearMassWolfEat.innerHTML = "Bear gain weight after eating wolf";
                    bearMassWolfEat.style.background = "red";
                    document.body.append(bearMassWolfEat);
                    console.log("Bear mass after eating wolf: " + parseInt(bear.bearMass));
                    // console.log("");

                } else {
                    bear.bearEat(animal.Mass);

                    var bearMassEat = document.createElement('div');
                    bearMassEat.style.height = "100px";
                    bearMassEat.style.width = "500px";
                    bearMassEat.style.marginBottom = "10px";
                    bearMassEat.innerHTML = "bear eat";
                    bearMassEat.style.background = "yellow";
                    document.body.append(bearMassEat);
                    console.log("Bear mass: " + parseInt(bear.bearMass));
                    console.log("");
                }

            }

        } else {
            bear.bearMass *= 0.8;

            var bearMassLost = document.createElement('div');
            bearMassLost.style.height = "100px";
            bearMassLost.style.width = "500px";
            bearMassLost.style.marginBottom = "10px";
            bearMassLost.style.background = "lightblue";
            bearMassLost.innerHTML = "bear did not eat";
            document.body.append(bearMassLost);
            console.log("Bear did not eat, bear mass: " + parseInt(bear.bearMass));
            console.log("");

            if (bear.bearMass < 100) {
                var bearDead = document.createElement('div');
                bearDead.style.height = "100px";
                bearDead.style.width = "500px";
                bearDead.style.marginBottom = "10px";
                bearDead.style.background = "black";
                document.body.append(bearDead);
                return console.log("Bear DEAD!!!");

            }
        }

    }

}

Month();