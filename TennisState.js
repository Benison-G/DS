/**
 * Problem statement: Find the current state of the tennis game (Not match, because other params like sets come in)
 * 
 * 0, 15, 30, 40 - score goes this way 3 points = 40 score
 * 
 * A tennis game is played as follows:
 * First score = 15 points
 * second score = 30 points
 * Third scrore = 40 points
 * 
 * After a player reaches 40 points, he or she can:
 * 
 * Enter a DEUCE state if both the players have scored the same number of times
 * Enter advantage state if both players scored atleast 3 times and the player scored one extra time then his opponent.
 * WIN the game if he or she has scored atleast four times AND two times more than the other player
 * 
 */

const computeGameState = (nameP1, nameP2, wins) => {
    let p1 = 0;
    let p2 = 0;
    // wins will be the array of names stating how many wins

    //Calculate the wins

    for (winner of wins) {
        if (winner === nameP1) {
            p1++;
        } else {
            p2++
        }
    }

    // Now we can ignore winner arrays and just use p1 and p2 counts

    //Winner calc -> atleast should 4 and diffeence between p1 and p2 should be 2

    if ((p1 >= 4 || p2 >= 4) && Math.abs(p1 - p2) >= 2) {
        return p1 > p2 ? `${nameP1} WINS` : `${nameP2} WINS`
    }

    // Calculate DUECE/advantage
    if (p1 >= 3 && p2 >= 3) {
        if (p1 === p2) {
            return "DEUCE";
        }

        if (p1 === p2 + 1) {
            return `${nameP1} ADVANTAGE`
        }

        if (p2 === p1 + 1) {
            return `${nameP2} ADVANTAGE`
        }
    }

    const score = ["0", "15", "30", "40"];

    if ((p1 === p2) && (p1 === 1 || p1 === 2)) {
        return `${score[p1]}a`
    }

    return `${nameP1} ${score[p1]} - ${nameP2} ${score[p2]}`;
}

console.log(computeGameState("P1", "P2", []));
// P1 0 - P2 0

console.log(computeGameState("P1", "P2", ["P1"]));
// P1 15 - P2 0

console.log(computeGameState("P1", "P2", ["P1", "P2"]));
// 15a

console.log(computeGameState("P1", "P2", ["P1", "P1", "P2", "P2"]));
// 30a

console.log(computeGameState("P1", "P2", [
    "P1", "P1", "P1",
    "P2", "P2", "P2"
]));
// DEUCE

console.log(computeGameState("P1", "P2", [
    "P1", "P1", "P1", "P1",
    "P2", "P2", "P2"
]));
// P1 ADVANTAGE

console.log(computeGameState("P1", "P2", [
    "P1", "P1", "P1", "P1", "P1",
    "P2", "P2", "P2"
]));
// P1 WINS