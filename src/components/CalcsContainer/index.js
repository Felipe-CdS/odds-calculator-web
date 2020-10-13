import { finalResult } from '../calcsComponents/FinalResult/index';
import { equalValue } from '../calcsComponents/EqualValue/index';

export function calcsContainer() {

    let container = document.createElement('container');
    container.id = "calcs-container";

    let h2Element = document.createElement('h2');
    h2Element.appendChild(document.createTextNode("Calcs"));

    let divElement = document.createElement('div');

    let finalResultElement = finalResult();
    let equalValueElement = equalValue();

    divElement.appendChild(finalResultElement);
    divElement.appendChild(equalValueElement);

    container.appendChild(h2Element);
    container.appendChild(divElement);
    return container;
}