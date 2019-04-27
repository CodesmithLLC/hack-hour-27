/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {

  // helper function to check for straights
  function checkStraight(hand) {
    const unique = new Set(hand);

    if (unique.size !== 5) return false;

    const high = Math.max(...hand);
    const low = Math.min(...hand);

    return (high - low) === 4;
  }


  // checks for hand values from highest to lowest scoring, returns as soon as you've scored a hand
  function rankHand(hand) {
    const numCards = {};
    hand.forEach((card) => {
      numCards[card] = numCards[card] + 1 || 1;
      // numCards[card] = numCards[card] ? numCards[card] + 1 : 1;
    });

    const combos = Object.values(numCards);
    // console.log(numCards);

    // if 4 of a kind -> 6
    if (combos.includes(4)) return 6;

    // if full house -> 5
    if (combos.includes(3) && combos.includes(2)) return 5;

    // if straight -> 4
    if (checkStraight(hand)) return 4;

    // if 3 of a kind -> 3
    if (combos.includes(3)) return 3;

    // if 2 pair -> 2
    if (combos.filter((num) => num === 2).length === 2) return 2;

    // if 1 pair -> 1
    if (combos.includes(2)) return 1;

    // if nothing -> 0
    return 0;
  }


  // score each hand
  let rank1 = rankHand(hand1);
  let rank2 = rankHand(hand2);


  // handle potential draws, reassigning ranks to high card values
  if (rank1 === rank2) {
    rank1 = Math.max(...hand1);
    rank2 = Math.max(...hand2);
  }
  

  if (rank1 === rank2) return 'Draw';

  const winner = (rank1 > rank2) ? 'Player 1 wins' : 'Player 2 wins';

  return winner;
}

/*
Extension where you create random decks
-- doesn't account for repeats
*/

// Create random int between a min and max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Gen hand based on 5 random ints
function genRandomHand() {
  let hand = [];
  for (let i = 0; i < 5; i++) {
    hand.push(getRandomInt(2, 15));
  }
  console.log('hand: ', hand);
  return hand;
}

module.exports = poker;







// This is written with mocha. Probably won’t run, but you can see each case and how it’s checking for different situations

const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let poker;
try {
  poker = require('../../challenges/poker.js');
} catch (e) {
  console.log('Poker could not be tested');
}

module.exports = deliver((report) => {
  if (typeof poker === 'function') {
    describe('Poker Test', function() {
      it('should return the string "Player 1 wins"', function() {
        expect(poker([3,5,5,5,2], [4,6,7,8,8])).to.eql("Player 1 wins");
        expect(poker([2,4,5,9,14],[2,4,5,9,10])).to.eql("Player 1 wins");
        expect(poker([2,2,11,13,14],[14,13,12,11,4])).to.eql("Player 1 wins");
        expect(poker([2,3,13,13,13],[4,14,5,14,7])).to.eql("Player 1 wins");
      }, ['arrays', 'conditionals', 'sorting']);

      it('should return the string "Draw"', function() {
        expect(poker([3,5,3,5,2], [5,2,3,3,5])).to.eql("Draw");
        expect(poker([3,4,5,6,7], [3,4,5,6,7])).to.eql("Draw");
      }, ['arrays', 'conditionals', 'sorting']);

      it('should return the string "Player 2 wins"', function() {
        expect(poker([10,11,11,10,11], [5,7,7,7,7])).to.eql("Player 2 wins");
        expect(poker([2,2,3,3,4], [2,2,3,3,12])).to.eql("Player 2 wins");
        expect(poker([2,4,5,9,10], [2,4,5,9,14])).to.eql("Player 2 wins");
        expect(poker([12,12,11,11,6], [7,8,9,10,11])).to.eql("Player 2 wins");
      }, ['arrays', 'conditionals', 'sorting']);

      after(() => report());

    });
  } else {
    console.log('poker was not exported properly');
  }
});