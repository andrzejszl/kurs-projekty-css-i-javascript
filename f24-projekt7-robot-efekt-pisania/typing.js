const box = document.querySelector(".typing");
const text = [
    "Wow!^Cieszę się, że jesteś.^Lubię mówić do ludzi!",
    "Jak masz na imię? Może Jarosław?^Był tu taki Jarosław kiedyś, spędziliśmy razem piękne wspólne chwile.",
    "Niestety żona kazała mu odejść od monitora i wrzucić węgiele do pieca.^Mam nadzieje, że Ty nie masz pieca!"
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 33;
const pauseTime = 2000;
let activeDOMElement = box;

const typing = (newTime) => {
    if (newTime - oldTime > speed) {
        const letter = text[textIndex].slice(wordIndex, wordIndex + 1);
        if (wordIndex === text[textIndex].length) {
            if (textIndex === text.length - 1) {
                return;
            }
            return setTimeout(() => {
                box.textContent = "";
                wordIndex = 0;
                textIndex++;
                requestAnimationFrame(typing);
            }, pauseTime);
        } else if (wordIndex === 0 || letter === "^") {
            const p = document.createElement('p');
            box.appendChild(p);
            activeDOMElement = p;
        }

        if (!(letter === "^")) {
            activeDOMElement.textContent += letter;
        }
        oldTime = newTime;
        wordIndex++;
    }
    requestAnimationFrame(typing)
}

typing();