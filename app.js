function randomRGB(){
    const r = Math.floor(Math.random() * 256) //random from 0 to 255
    const g = 0;
    const b = Math.floor(Math.random() * 256) //random from 0 to 255
    return `rgb(${r}, ${g}, ${b})`;
}

const letters = document.querySelectorAll('.letter')
 

const intervalId = setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
}, 500);
