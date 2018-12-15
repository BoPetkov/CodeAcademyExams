function Score() {
    score = getRandom(0, 100);
    if (score > 0 && score < 30) {
        console.log("Goaaaaaaaaaaaal")
        return true;
    } else {
        console.log("NO GOAL!!!")
        return false;
    }
}