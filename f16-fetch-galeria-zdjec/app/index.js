import '../sass/style.scss';


function showLoading() {
    const spinnerEl = document.querySelector('.spinner');
    spinnerEl.classList.add('spinner--visible');
}

function hideLoading() {
    const spinnerEl = document.querySelector('.spinner');
    spinnerEl.classList.remove('spinner--visible');
}


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
                    addBreed(breed);
                } else {
                    breeds[breed].forEach(subBreed => {
                        addBreed(breed, subBreed)
                        // console.log(breed + "/" + subBreed)
                    })

                    // for (const subBreed of breeds[breed]) {
                    //     console.log(breed + "/" + subBreed);
                    // }
                }
            }
        })
}

function showImageWhenReady(image) {
    const backgroundEl = document.querySelector('.featured-dog__background');
    const imgEl = document.querySelector('.featured-dog img');
    imgEl.setAttribute('src', image);
    backgroundEl.style.background = `url("${image}")`;
    hideLoading();
}

function addBreed(breed, subBreed) {
    const tilesEl = document.querySelector('.tiles');
    let name;
    let type;

    if (typeof subBreed === 'undefined') {
        name = breed;
        type = breed;
    } else {
        name = `${breed} ${subBreed}`;
        type = `${breed}/${subBreed}`;
    }

    const tile = document.createElement('div');
    tile.classList.add('tiles__tile');

    const backgroundEl = document.querySelector('.featured-dog__background');
    const imgEl = document.querySelector('.featured-dog img');
    const tileContent = document.createElement('div');
    tileContent.classList.add('tiles__tile-content');
    tileContent.innerText = name;
    tileContent.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        showLoading();
        getRandomImageByBreed(type)
            .then(showImageWhenReady)
    })



    tile.appendChild(tileContent);
    tilesEl.appendChild(tile)

}

function init() {
    showLoading();
    const imgEl = document.querySelector('.featured-dog img');
    const backgroundEl = document.querySelector('.featured-dog__background');
    getRandomImage()
        .then(showImageWhenReady)
    showAllBreeds();
}



document.addEventListener('DOMContentLoaded', init())