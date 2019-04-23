/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card ////////////////
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
  let p1 = countHand(hand1);
  let p1tier = 0;
  let p1highCard = 0;
  let p1pairs = 0;
  let p2 = countHand(hand2);
  let p2tier = 0;
  let p2highCard = 0;
  let p2pairs = 0;
  console.log('p1', p1, 'p2', p2)

  // Parse hand
  Object.entries(p1).forEach( kv => {
    //set high card
    if (kv[0] > p1highCard && kv[1] === 1) p1highCard = kv[0];
    //check 4-of-a-kind
    if (kv[1] === 4) p1tier = 6;
    //check 3-of-a-kind
    if (kv[1] === 3) p1tier = 3; 
    if (kv[1] === 2) p1pairs++;
  })
  Object.entries(p2).forEach( kv => {
    //set high card
    if (kv[0] > p2highCard && kv[1] === 1) p2highCard = kv[0];
    //check 4-of-a-kind
    if (kv[1] === 4) p2tier = 6;
    //check 3-of-a-kind
    if (kv[1] === 3) p2tier = 3; 
    if (kv[1] === 2) p2pairs++;
  })
  
  //check straights:
  let p1keys = Object.keys(p1);
  let p2keys = Object.keys(p2);
  if (isStraight(p1keys)) p1tier = 4;
  if (isStraight(p2keys)) p2tier = 4;


  // Parse stats //
  //check full house and pairs
  switch (p1tier) {
    case (p1tier === 4 && p1pairs === 1):
      p1tier = 5;
      break;
    case (p1pairs === 2):
      p1tier = 2;
      break;
    case (p1pairs === 1):
      p1tier = 1;
      break;
  }
  switch (p2tier) {
    case (p2tier === 4 && p2pairs === 1):
      p2tier = 5;
      break;
    case (p2pairs === 2):
      p2tier = 2;
      break;
    case (p2pairs === 1):
      p2tier = 1;
      break;
  }

  //We're in the Endgame now
  // console.log('p1 highcard, pairs, tier:', p1highCard, p1pairs, p1tier)
  // console.log('p2 highcard, pairs, tier:', p2highCard, p2pairs, p2tier)
  if (p1tier > p2tier) return 'Player 1 wins';
  if (p2tier > p1tier) return 'Player 2 wins';
  if (p1tier === p2tier) {
    if (p1highCard > p2highCard) return 'Player 1 wins';
    if (p2highCard > p1highCard) return 'Player 2 wins';
    if (p1highCard === p2highCard) return 'Draw';
  }

}

function countHand(array) {
  let counts = {};
  array.forEach( elem => {
    if (!counts[elem]) counts[elem] = 1;
    else counts[elem]++;
  })
  return counts;
}

function isStraight(array) {
  array = array.sort( (a,b) => a - b)
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 !== array[i + 1]) return false;
  }
  return true;
}

// console.log(poker([3,5,5,5,2], [4,6,7,8,8]))
// console.log(poker([3,5,5,5,2], [4,8,8,8,8]))

module.exports = poker;
