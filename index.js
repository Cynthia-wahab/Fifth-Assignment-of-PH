
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
let callHistoryContainer = document.getElementById("call-history-container")
const callHistoryData = []

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

        const data = {
            name: title,
            number: number,
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML = `
        <div class="bg-[#fafafa] p-5 mb-3 flex justify-between items-center rounded-2xl">
                        <div>
                            <h2 class="text-[#151515] font-semibold text-[18px]">${data.name}</h2>
                            <p class="text-gray-400">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>`
                callHistoryContainer.appendChild(div)
    })
}
// clear call history 

const clearHistoryButton = document.getElementById("clear-btn")

clearHistoryButton.addEventListener("click", function(){
    callHistoryData.length = 0;
    callHistoryContainer.innerHTML = ""

})


// copy button feature

let totalCopyCount = 0;
const copybtns = document.getElementsByClassName("copy-btn")


for (let copyButton of copybtns) {
    copyButton.addEventListener("click", function(){
        totalCopyCount++
        document.getElementById("copy-count").textContent = totalCopyCount
        let card = copyButton.closest(".card-body")
        let number = card.querySelector(".call-number").textContent
        alert(`Number copied - ${number}`)

        navigator.clipboard.writeText(number)
    })
}
