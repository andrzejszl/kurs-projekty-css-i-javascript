import product from './product.js'

export const showInConsole = (info) => {
    console.log(info);
}

export const showInDOM = (info, tag = product.HTMLElement) => {
    const element = document.createElement(tag);
    element.textContent = info;
    document.body.appendChild(element);
}