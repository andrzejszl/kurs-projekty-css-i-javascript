const spinner = document.querySelector('.v2');

const fps = (1000 / 60).toFixed(2);
let deg = 0;
const degChange = 6; //360 stopni / 60 sekund

const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
}

setInterval(rotate, fps);


const spinnerRAF = document.querySelector('.v3');

let degRAF = 0;
const degChangeRAF = 6; //360 stopni / 60 klatek/sekunde

const rotateRAF = () => {
    degRAF += degChangeRAF;
    spinnerRAF.style.transform = `rotate(${degRAF}deg)`;
    requestAnimationFrame(rotateRAF)
}

rotateRAF()


const spinnerRAF2 = document.querySelector('.v4');

let degRAF2 = 0;
const degChangeRAF2 = 6; //360 stopni / 60 klatek/sekunde
let time = performance.now();
console.log(time);

const rotateRAF2 = (currentT) => {
    if (currentT - time > 16) {
        time = currentT;
        degRAF2 += degChangeRAF2;
        spinnerRAF2.style.transform = `rotate(${degRAF2}deg)`;
    }
    requestAnimationFrame(rotateRAF2)
}

rotateRAF2()