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

let suits = [
  'Hearts',
  'Clubs',
  'Donkeys',
  'Turtles'
]
let value = [
  2,3,4,5,6,7,8,9,10,11,12,13,14
]

function poker(hand1, hand2) {
  let power = {
    '4-of-a-kind': 9, //ALL POWERFUL
    'full-house': 6.5, // 3 of a kind + 1 pair
    'straight': 5,
    '3-of-a-kind': 4.5,
    '2-pair': 4, // 1pair * 2
    '1-pair': 2,
    'high-card': 0
  }
  
  function parseHandPower(hand){
    let output = 0;
    const count = {};
    // count cards to check for dupes
    hand.forEach( card => count[card] = (count[card] || 0) + 1)
    Object.values(count).forEach( tuple => {
      switch(tuple) {
        case 4: output+=9; break;
        case 3: output+=4.5; break;
        case 2: output+=2; break;
      }
    })
    // we found no dupes, check for straights
    if(output === 0) { 
      let straightFlag = true;
      for(let i=0; i<hand.length-2; i+=1){
        if(hand[i] !== hand[i+1] + 1) straightFlag = false; 
        break;
      }
      if(straightFlag) output+=5;
    }

    return output;

  }
  
  const handOneRank = parseHandPower(hand1);
  const handTwoRank = parseHandPower(hand2);

  console.log(`Player one's rank was:`, handOneRank)
  console.log(`Player two's rank was:`, handTwoRank)

  if(handOneRank > handTwoRank) return "Player 1 wins";
  if(handOneRank < handTwoRank) return "Player 2 wins";
  else {
    const handOneHighCard = Math.max(...hand1);
    const handTwoHighCard = Math.max(...hand2);
    if (handOneHighCard > handTwoHighCard) return "Player 1 wins";
    if (handOneHighCard < handTwoHighCard) return "Player 2 wins";
    else return 'Draw'
  }

}

function deckGenerator() {
  let deck = []
  for(let i=2; i<14; i+=1){
    let k=0;
    while(k<4) {deck.push(i); k++}
  }
  
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap elements
  }
  
  return deck;

}

newDeck = deckGenerator()

//Tests

const cheaterJoe = newDeck.slice(0,4)
const bessieTheDeadbeat = newDeck.slice(5,10)


console.log('Bessie is holdin', bessieTheDeadbeat)
console.log('But Joe got', cheaterJoe, 'up his sleeve')
console.log(poker(cheaterJoe, bessieTheDeadbeat))

module.exports = poker;
