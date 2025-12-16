let ayrw = document.getElementById("ayrw")
let qoww = document.getElementById("qoww")
let mqdor = document.getElementById("mqdor")
let cost = document.getElementById("cost")
cost.innerHTML = 25000  
let count = 1
mqdor.textContent = count


ayrw.addEventListener("click", () => {
    if (count > 1) {
        count--
        mqdor.textContent = count
    }
    cost.innerHTML = cost.innerHTML / 2
})


qoww.addEventListener("click", () => {
    count++
    mqdor.textContent = count
    cost.innerHTML = cost.innerHTML * 2
})


