let inputs = document.querySelectorAll('input')
let divs = document.querySelectorAll('.div')
let container = document.querySelector('.container')
let red = document.querySelector('.r')
let green = document.querySelector('.g')
let blue = document.querySelector('.b')
let rColor = 0
let gColor = 0
let bColor = 0

inputs.forEach((input) => {
   input.addEventListener('input',()=>{
   if (input.className == 'red') {
    rColor = input.value
    red.innerText = rColor
   }
   if (input.className == 'green') {
    gColor = input.value
    green.innerText = gColor
   }
   if (input.className == 'blue') {
    bColor = input.value
    blue.innerText = bColor
   }
   document.body.style.backgroundColor = `rgb(${rColor},${gColor},${bColor})`
   })
})





// window.onload = ()=>{
//     // let color = 0
//     let div = document.createElement('div')
//     let span = document.createElement('span')
//     span.innerHTML = `<div>rgba(${rColor},${gColor},${bColor})</div>`
//     div.appendChild(span)
//     div.style.textAlign = 'center'
//     div.style.fontSize = '25px'
//     div.style.fontWeight = 'bold'
//     container.appendChild(div)
//     // divs.forEach((div) => {
        
//     // })
    

// }