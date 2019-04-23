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
  const rank1 = parseHand(hand1);
  const rank2 = parseHand(hand2);
  // console.log('rank1:',rank1);
  // console.log('rank2:',rank2);
  if (rank1[0] < rank2[0]) return 'Player 1 wins';
  else if (rank1[0] > rank2[0]) return 'Player 2 wins';
  else if (rank1[1] > rank2[1]) return 'Player 1 wins';
  else if (rank1[1] < rank2[1]) return 'Player 2 wins';
  else return 'Draw';
}


// returns rank and max card of arr
// rank 0: 4 of a kind
// rank 1: full house
// rank 2: straight
// rank 3: 3 of a kind
// rank 4: 2 pair
// rank 5: 1 pair
// rank 6: high card
function parseHand(arr) {
  const hand = {};
  let max = 0;
  let rank;
  for (value of arr) {
    max = Math.max(max, value);
    if (hand[value]) hand[value]++;
    else hand[value] = 1;
  }
  // console.log(hand);
  const cards = Object.keys(hand);
  if (cards.length === 2) {
    if (hand[cards[0]] === 4 || hand[cards[1]] === 4) rank = 0;
    else rank = 1;
  } else if (cards.length === 3) {
    if (hand[cards[0]] === 3 || hand[cards[1]] === 3 || hand[cards[2]] === 3) rank = 3;
    else if ((hand[cards[0]] === 2 && hand[cards[1]] === 2)  || (hand[cards[0]] === 2 && hand[cards[2]] === 2) || (hand[cards[1]] === 2 && hand[cards[2]] === 2)) rank = 4;
  } else if (cards.length === 4) {
    rank = 5;
  } else {
    let sorted = arr.slice().sort();
    let isStraight = true;
    let i = 1;
    while (isStraight && i < sorted.length) {
      if (sorted[i] !== sorted[i-1] + 1) isStraight = false;
      i++;
    }
    if (isStraight) rank = 2;
    else rank = 6;
  }
  return [rank, max];
}

module.exports = poker;


// const hand1 = [2,3,4,8,6];
// const hand2 = [3,2,7,13,4];
// console.log(poker(hand1,hand2));