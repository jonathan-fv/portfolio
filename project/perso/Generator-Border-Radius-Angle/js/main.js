const canvas = document.getElementById('canvas');
const cdeToCopy = document.getElementById('codeToCopy');

let radius = 0;
let angle = 0;

function resultDisplay(){
    if(angle > 0){
        canvas.style.borderRadius =angle + "% /" + radius + 'px';
        codeToCopy.value = `border-radius: ${angle}% / ${radius}px;`
    }
    else{
        canvas.style.borderRadius = radius + 'px';
        codeToCopy.value = `border-radius: ${radius}px;`
    };
};

document.addEventListener('input', (e) => {
    switch(e.target){
        case document.getElementById('radiusRange'):
        case document.getElementById('radiusDisplay'):
            radius = e.target.value;
            break;

        case document.getElementById('angleRange'):
        case document.getElementById('angleDisplay'):
            angle = e.target.value;
            break;
    }
    resultDisplay();
});

function copyCode(){
    codeToCopy.select();
    document.execCommand('copy');
    alert('Votre code est copier !');
};