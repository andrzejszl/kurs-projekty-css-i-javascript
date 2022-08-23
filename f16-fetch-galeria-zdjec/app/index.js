import '../sass/style.scss';

function listBreeds() {
    const apiUrl = "https://dog.ceo/api";
    return fetch(`${apiUrl}/breeds/list/all`)
        .then(resp => resp.json())
        .then(data => data.message);
}

function getRandomImage() {
    const apiUrl = "https://dog.ceo/api";
    return fetch(`${apiUrl}/breeds/image/random`)
        .then(resp => resp.json())
        .then(data => data.message);
}

function getRandomImageByBreed(breed) {
    const apiUrl = "https://dog.ceo/api";
    return fetch(`${apiUrl}/breed/${breed}/images/random`)
        .then(resp => resp.json())
        .then(data => data.message);
}

function showAllBreeds() {
    listBreeds()
        .then(breeds => {
            for (const breed in breeds) {
                if (breeds[breed].length === 0) {
                    // console.log(breed);
                } else {

                    breeds[breed].forEach(subBreed => {
                        console.log(breed + "/" + subBreed)
                    })



                    // for (const subBreed of breeds[breed]) {
                    //     console.log(breed + "/" + subBreed);
                    // }
                }
            }
        })
}

function init() {

    const imgEl = document.querySelector('.featured-dog img');
    const backgroundEl = document.querySelector('.featured-dog__background');
    getRandomImage()
        .then(src => {
            imgEl.setAttribute('src', src);
            backgroundEl.style.background = `url("${src}")`;
        })

    showAllBreeds();
}



document.addEventListener('DOMContentLoaded', init())