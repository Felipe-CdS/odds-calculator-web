export function oddsList(oddsArray) {
    
    let container = document.createElement("container");
    container.className = "odds-list-container";

    let strongElement = document.createElement('strong');
    strongElement.appendChild(document.createTextNode('Odds:'));

    container.appendChild(strongElement);

    let divElement = document.createElement('div');
    divElement.className = "odds-labels";

    container.appendChild(divElement);

    let inputForm = document.createElement('input');
    inputForm.className = "odds-input-form";
    inputForm.setAttribute('type', "text");

    container.appendChild(inputForm);

    return container;
}
