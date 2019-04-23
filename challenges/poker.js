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
  let player1Score = 0;
  let player2Score = 0;

  player1Score = straight(hand1) + pairs(hand1)
  player2Score = straight(hand2) + pairs(hand2)

  if (player1Score === player2Score) {
    player1Score = Math.max(...hand1);
    player2Score = Math.max(...hand2);
  }
  if (player1Score > player2Score) return 'PLAYER 1 WINS'
  if (player2Score > player1Score) return 'PLAYER 2 WINS'
  if (player1Score === player2Score) return 'DRAW, SPLIT POT'
}

function straight(hand) { 
  let score = 0;
  let consecutiveSum = (hand.length/2) *(hand[0] + hand[hand.length-1])
   if (hand.reduce((a,b)=>a+b) === consecutiveSum) score = 6;
   return score;
 }

 function pairs(hand) {
   let score = 0;
   let hashMap = hand.reduce((a,b)=>{
     a[b] = a[b]+1 || 1;
    return a
    }, {})
  Object.values(hashMap).forEach(pair=>{
    if (pair === 4) score+=8;
    if (pair === 3) score+=5;
    if (pair === 2) score+=2;
  })
  return score;
 }

module.exports = poker;