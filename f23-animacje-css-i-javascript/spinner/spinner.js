const spinner = document.querySelector('.v2');

const fps = (1000 / 60).toFixed(2);
let deg = 0;
const degChange = 6; //360 stopni / 60 sekund

const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
}

setInterval(rotate, fps);