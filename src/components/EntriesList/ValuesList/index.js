export function valuesList(valuesArray) {
    
    let container = document.createElement("container");
    container.className = "values-list-container";

    let strongElement = document.createElement('strong');
    strongElement.appendChild(document.createTextNode('Values:'));

    container.appendChild(strongElement);

    let divElement = document.createElement('div');
    divElement.className = "values-labels";

    container.appendChild(divElement);

    let inputForm = document.createElement('input');
    inputForm.className = "values-input-form";
    inputForm.setAttribute('type', "text");

    container.appendChild(inputForm);

    return container;
}

