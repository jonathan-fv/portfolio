function allCr(){
    let a = document.getElementById('all_corners').value
    let b = document.getElementById('block').style
    b.borderRadius = `${a}px`
}

function topLft(){
    let a = document.getElementById('top_left').value
    let b = document.getElementById('block').style
    b.borderTopLeftRadius = `${a}px`
}


function topRt(){
    let a = document.getElementById('top_right').value
    let b = document.getElementById('block').style
    b.borderTopRightRadius = `${a}px`
}

function BottomLft(){
    let a = document.getElementById('bottom_left').value
    let b = document.getElementById('block').style
    b.borderBottomLeftRadius = `${a}px`
}

function BottomRt(){
    let a = document.getElementById('bottom_right').value
    let b = document.getElementById('block').style
    b.borderBottomRightRadius = `${a}px`
}

function clrChange(){
    let x = document.getElementById('clr')
    let b = document.getElementById('block').style
    b.backgroundColor =  `${x.value}`
}