
// heart count 

let totalheartCount = 0;
const heartbtns = document.getElementsByClassName("heart-btn")

for (let heartButton of heartbtns) {
    heartButton.addEventListener("click", function(){
        totalheartCount++
        document.getElementById("heart-count").textContent = totalheartCount
    })
}