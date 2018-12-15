function Stadium(number) {
    
    this.number = number;

    this.stadiumCapacity = function (number) {
        this.number = number;
        return number;
    }

    this.fillStadium = function() {
    
        return (this.stadiumCapacity(this.number) * getRandom(60, 80)) / 100;
    }

}