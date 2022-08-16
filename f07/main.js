let addButton = document.getElementById('addButton');
let findButton = document.getElementById('findButton');

let addElement = () => {
    let inputAddElement = document.getElementById('addElement').value;
    let inputAddText = document.getElementById('addText').value;
    let inputAddAtr = document.getElementById('addAtr').value;
    let inputAddAtrVal = document.getElementById('addAtrVal').value;

    let newElement = document.createElement(inputAddElement);
    newElement.textContent = inputAddText;
    newElement.setAttribute(inputAddAtr, inputAddAtrVal);
    document.querySelector('.newElements').appendChild(newElement);
    document.querySelector('.newElements').style.boxShadow = "0 0 1px 1px #ccc"
}

let findElement = () => {
    let inputElementName = document.getElementById('elementName').value;
    let searchedElements = document.querySelectorAll(inputElementName);
    document.querySelector('.foundElements').innerHTML = "";

    let title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `W tym dokumencie znalazłem ${searchedElements.length} elementów ${inputElementName}`;
    document.querySelector('.foundElements').appendChild(title);

    searchedElements.forEach(element => {
        let newItem = document.createElement('div');
        newItem.innerHTML = `<p>${element.tagName}</p>
        <p>klasy: ${element.classList}</p>
        <p>Wysokość elementu (offsetHeight): ${element.offsetHeight}</p>
        <p>Szerokość elementu (offsetWidth): ${element.offsetWidth}</p>
        <p>Odl od lewej krawędzi (offsetLeft): ${element.offsetLeft}</p>
        <p>Odl od górnej krawędzi (offsetTop): ${element.offsetTop}</p>
        <p>Liczba elementów-dzieci (childElementCount): ${element.childElementCount}</p>`;
        document.querySelector('.foundElements').appendChild(newItem);
    })
    searchedElements = "";
}

addButton.addEventListener('click', addElement);
findButton.addEventListener('click', findElement);