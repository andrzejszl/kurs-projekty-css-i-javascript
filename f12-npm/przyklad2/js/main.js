import {
    showInConsole,
    showInDOM
} from "./components/show.js";

import bike from './components/product.js'

showInConsole()
showInDOM(bike.price, 'h1')
showInDOM(bike.age)
showInDOM('informacja3')