let design= document.getElementById('part')
const innitial= design.innerHTML
console.log(part);

let winner= document.getElementsByClassName('textnet')
console.log(winner);

let whyne= document.getElementsByTagName('h1')
console.log(whyne);

let add= document.querySelector('h1')
console.log(add);

let whyt= document.querySelectorAll('h1')
console.log(whyt);

design.style.color=`red`;
design.style.fontSize= `40px`;
// design.innerHTML = `i am <em>good to go</em> trust me`
// let boi = document.getElementById('win')
// boi.removeChild(design)

let changeimg = document.getElementById('dera')
// changeimg.onclick= boi
changeimg.addEventListener('click', boi)

function boi() {
    if (design.innerHTML== 'lets try and see') {
        design.innerHTML='i am <em>good to go</em> trust me'
    } else {
        design.innerHTML= 'lets try and see'
    }
    changeimg.setAttribute('src', './res/img_7816.jpg')
}
const arr = ["gabby","madam","just cool","stressed"]
let counter = 0

function boi() {
//     if (design.innerHTML== innitial) {
//         design.innerHTML='i am <em>good to go</em> trust me'
//     } else if( design.innerHTML=='i am <em>good to go</em> trust me'){
//         design.innerHTML='just me'
// } else if ( design.innerHTML=='just me'){
//     design.innerHTML='this is nice '
// } else if(design.innerHTML=='this is nice'){
//     design.innerHTML='amazing'
// }else if(design.innerHTML='amazing'){
//     design.innerHTML='just stressed'
// } else {
//         design.innerHTML= innitial
//     } 

design.innerHTML= arr[counter]
if (counter<arr.length){
    counter
}

    changeimg.setAttribute('src', './res/img_7816.jpg')
}