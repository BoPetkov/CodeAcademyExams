function Team() {

    this.Players = [];
    this.draftTeam = function () {
        for (var i = 0; i < 22; i++) {
            var p = new Player();
            this.hirePlayer(p)
        }
        console.log("Team drafted", this.Players);
    }

    this.hirePlayer = function (player) {
        if (this.Players.length >= 22) {
            this.replacePlayer(player);
        }
        else {
            this.Players.push(player);
        }
    }

    this.replacePlayer = function (player) {

        var min = 0;
        player.info = "This player is star";
        player.isStar = true;

        for (var i = 0; i < this.Players.length; i++) {
            if ((this.Players[min].goals >= this.Players[i].goals) && this.Players[i].isStar == false) {
                min = i;
            }
        }
        this.Players[min] = player;
        console.log("New player: ", this.Players[min]);
    }

    this.scoreGoal = function () {
        this.Players[getRandom(0, 21)].score();
    }

}