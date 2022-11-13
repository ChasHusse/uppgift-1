const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
let slideBox = document.querySelector("#slideBox")
const bodyHtml = document.querySelector("body")


const projekt1 = document.querySelector("#projekt-1")
const projekt2 = document.querySelector("#projekt-2")
const projekt3 = document.querySelector("#projekt-3")

boxArray = [projekt1, projekt2, projekt3]

nextBtn.addEventListener("click", changeNextImage)

prevBtn.addEventListener("click", changePrevImage)

let order = ""
slideBox.innerHTML = boxArray[order].innerHTML

function changeNextImage() {
    console.log(order)
    ++order
    if (order < boxArray.length) {
        slideBox.innerHTML = boxArray[order].innerHTML

    } else if (order >= boxArray.length) {
        order = 0
        slideBox.innerHTML = boxArray[order].innerHTML
    }
}

function changePrevImage() {
    console.log(order)
    --order
    if (order < 0) {
        order = boxArray.length - 1
        slideBox.innerHTML = boxArray[order].innerHTML
    } else {
        slideBox.innerHTML = boxArray[order].innerHTML
    }
}