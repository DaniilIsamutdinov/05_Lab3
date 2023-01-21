let active = 0
let curDivs = document.getElementsByTagName('div')
function activeCur(active) {
    console.log('Сейчас активный - div' + (active-1))
    let activeDiv = document.getElementById('div' + active)
    curDivs = document.getElementsByTagName('div')
    for (let curDiv of curDivs) {
        curDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
    curDivs[active].style.backgroundColor = '#00f'
    //console.dir(curDivs)
}

function upCurDiv(){
    let curDiv = curDivs[active]
    //console.dir(curDiv)
    console.dir(curDivs)
    //console.dir(curDivs[curDivs.length-1])
    if (active == 1) {
        for (let i=0; i<5; i++) downCurDiv()
    }
    else {
        [curDiv.innerHTML, curDiv.previousElementSibling.innerHTML] = [curDiv.previousElementSibling.innerHTML, curDiv.innerHTML]
        active -= 1
    }
    activeCur(active)
}
function downCurDiv(){
    let curDiv = curDivs[active]
    //console.dir(curDiv)
    //console.dir(curDivs)
    //console.dir(curDivs[curDivs.length-1])
    if (active == curDivs.length-1) {
        for (let i=0; i<5; i++) upCurDiv()
    }
    else {
        [curDiv.innerHTML, curDiv.nextElementSibling.innerHTML] = [curDiv.nextElementSibling.innerHTML, curDiv.innerHTML]
        active += 1
    }
    activeCur(active)
}

function changeWidth(){
    //console.dir(curDivs[active].firstChild)
    let curImg = curDivs[active].firstChild
    //console.log(curImg.width) 
    //console.dir(curImg.width)
    curImg.style.width = prompt('Введіть потрібне значення ширини:', curImg.width + 'px')
}

function changeHeight(){
    let curImg = curDivs[active].firstChild
    curImg.style.height = prompt('Введіть потрібне значення висоти, чи натисніть "Отмена" для повернення до параметру за замовчуванням:', curImg.height + 'px')
}

function changeMargin(){
    console.dir(curDivs[active].firstChild)
    let curImg = curDivs[active].firstChild
    curImg.style.margin = prompt('Введіть потрібне значення ширини, чи натисніть "Отмена" для повернення до параметру за замовчуванням:', whichMarg(curImg))
}
function whichMarg(curImg){
    if (curImg.style.margin) return(curImg.style.margin)
    else return('5px')
}
function changeAlt(){
    let curImg = curDivs[active].firstChild
    curImg.alt = prompt('Введіть потрібне значення ширини:', curImg.alt)
}
function refresh() {
    window.location = window.location.href
}