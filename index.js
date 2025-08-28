
// heart count 

let totalheartCount = 0;
const heartbtns = document.getElementsByClassName("heart-btn")

for (let heartButton of heartbtns) {
    heartButton.addEventListener("click", function(){
        totalheartCount++
        document.getElementById("heart-count").textContent = totalheartCount
    })
}



// call button:

let totalCoins = 100;
const coinCount = document.getElementById("coin-count")
const callbtns = document.getElementsByClassName("call-btn");

for (let callButton of callbtns) {
    callButton.addEventListener("click",function(){

        if(totalCoins < 20){
            alert("You do not have enough coin, need minimum 20 coins to make a call")
            return;
        }
        let availableCoins = totalCoins
        let coinsDecrese = 20;
        let newAvailableCoins = availableCoins - coinsDecrese
        totalCoins = newAvailableCoins;

        coinCount.textContent = totalCoins

        let card = callButton.closest(".card-body")
        let title = card.querySelector(".card-title").textContent
        let number = card.querySelector(".call-number").textContent
        alert(`📞Calling ${title} - ${number}`)


    })
}