////////////////////Variables//////////////////////////////////////
const $=document
let contextMenuTag=_q('.context-menu')
let liItems=_qAll('.context-menu ul li')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
///////////////////////// fire on body //////////////////////////
document.body.addEventListener('contextmenu',function (event) {
    event.preventDefault()
    let pageXValue=event.pageX
    let pageYValue=event.pageY
    contextMenuTag.style.left=`${pageXValue}px`
    contextMenuTag.style.top=`${pageYValue}px`
    contextMenuTag.style.display='block'
})
document.body.addEventListener('click',function () {
    contextMenuTag.style.display='none'
})
/////////////////////////// fire on li ////////////////////////////
liItems.forEach(function (li) {
    li.addEventListener('click',function () {
        contextMenuTag.style.display='none'
    })
})
////////////////////////// fire by esc button ////////////////////////
document.body.addEventListener('keydown',function (event) {
    if(event.key==='Escape'){
        contextMenuTag.style.display='none'
    }
})

