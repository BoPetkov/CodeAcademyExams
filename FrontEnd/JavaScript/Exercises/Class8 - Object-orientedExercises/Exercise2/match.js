function Match() {

    var totalguests = 0;
    var jerseyssold = 0;
    var goalsScored = 0;
    var team = new Team();
    var stadium = new Stadium(1000);
    var holiganMonetaryDamage = 0;
    var ticketPrice = 15;
    var jerseyPrice = 25;

    team.draftTeam();

    for (var i = 1; i <= 30; i++) {

        console.log("match day: ", i)

        if (i % 8 == 0) {

            var star = new Player();
            team.hirePlayer(star);
        }
        var guests = stadium.fillStadium();

        console.log("Stadium have ", guests, " guests");

        if (Score() == true) {

            console.log("Jerseys sold this game ", Math.floor(guests * 0.25));
            jerseyssold += Math.floor(guests * 0.25)
            team.scoreGoal();
            goalsScored += 1;
        } else {

            console.log("Jerseys sold this game ", Math.floor(guests * 0.1));
            jerseyssold += Math.floor(guests * 0.1)
        }
        console.log("");

        totalguests += guests;
        holiganMonetaryDamage += (Holigan().monetaryDamage * 10);
    }

    console.log("Number of guests in season: ", totalguests);
    console.log("Money earned from ticket sales: ", totalguests * ticketPrice, "$");
    console.log("Number of jerseys sold in season: ", jerseyssold);
    console.log("Money earned from jersey sales: ", jerseyssold * jerseyPrice, "$");
    console.log("Number of goals scored in season: ", goalsScored);
    console.log("Amount of penalty money payed by the club because of holigans: ", holiganMonetaryDamage, "$");
    console.log("Total earnings: ", totalguests * ticketPrice + jerseyssold * jerseyPrice, "$");
}