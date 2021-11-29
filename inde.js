let cards=[]
let sum=0
let player="Player 1"
let hasBlackJack= false
let isAlive=false
let display=""


let message=document.getElementById('message')
let card=document.getElementById('cards')
let sumEl=document.getElementById('sum')
function getRandomCard(){
  let randomNumber=Math.floor(Math.random() *13)+1
  console.log(randomNumber)
  if (randomNumber>10){
    return 10
  }
  else if(randomNumber===1){
    return 11
  }
  else{
    return randomNumber
  }
}

function start(){
  sum=0
  let j=cards.length
  for(let i=0; i<j; i+=1){
    cards.pop()
  }
console.log(cards);
  isAlive=true
  let firstCard=getRandomCard()
  cards.push(firstCard)
  let secondCard=getRandomCard()
  cards.push(secondCard)
  sum= firstCard+secondCard
  game()

}

function game(){
  card.textContent="Cards :"
  for (let i=0; i<cards.length; i+=1){
    card.textContent +=cards[i]+" "
  }
  sumEl.textContent="Sum: "+sum


  if (sum<21){
  display="Click Next Card to Draw new Card"
}
else if (sum===21){
  display="You have got a BlackJack!"
  hasBlackJack=true
}
else{
  display="Game over"
  isAlive=false
}
message.textContent=display
}

function newCard(){
  if (isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    game()
  }
}
