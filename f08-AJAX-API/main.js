const showResults = (json) => {
    const resultsSection = document.querySelector('section.results');
    resultsSection.innerHTML = "";
    console.log(json);
    json.results.forEach(result => {
        const newElement = document.createElement('div');
        newElement.classList = 'result';

        const name = document.createElement('p');
        const img = document.createElement('img');

        name.textContent = `${result.name.title} ${result.name.first} ${result.name.last}`;
        img.setAttribute('src', result.picture.medium);

        newElement.appendChild(name);
        newElement.appendChild(img);

        resultsSection.appendChild(newElement);
    });
}

const getUsers = (e) => {
    e.preventDefault();
    const gender = document.querySelector('.generator__select').value;
    const count = document.querySelector('.generator__input').value;

    const url = `https://randomuser.me/api/?gender=${gender === "both" ? "" : gender}&results=${count}`;

    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error('not 200 response')
            } else {
                return response.json()
            }
        })
        .then(json => showResults(json))
        .catch(err => console.log(err))
}

document.querySelector('.generator').addEventListener('submit', getUsers);