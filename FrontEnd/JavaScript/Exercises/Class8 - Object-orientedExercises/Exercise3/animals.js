function Animal(number) {

    this.number = number;

    switch (number) {
        case 1: {
            // console.log("The bear eat Rabbit");
            this.Mass = 40;
            break;
        }
        case 2: {
            // console.log("The bear eat Deer");
            this.Mass = 150;
            break;
        }
        case 3: {
            // console.log("The bear eat fish");
            this.Mass = 25;
            break;
        }
        case 4: {
            // console.log("The bear eat wolf");
            this.type = "wolf";
            this.Mass = 100;
            break;
        }
    }
}