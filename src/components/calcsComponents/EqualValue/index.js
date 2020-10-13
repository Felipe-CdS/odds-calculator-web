export function equalValue(){

    let container = document.createElement("container");
    container.id = "equal-value-container";

    let strongElement = document.createElement('strong');
    strongElement.appendChild(document.createTextNode('Equal Value:'));

    container.appendChild(strongElement);

    let divElement = document.createElement('div');
    divElement.id = "equal-value-labels";

    let teamTag = document.createElement("strong");
    teamTag.appendChild(document.createTextNode("Team: "));

    let spanElement1 = document.createElement("span");
    spanElement1.appendChild(document.createTextNode("Value: R$ 0.00"));

    let spanElement2 = document.createElement("span");
    spanElement2.appendChild(document.createTextNode("odd: 0.00"));

    

    divElement.appendChild(teamTag);
    divElement.appendChild(spanElement1);
    divElement.appendChild(spanElement2);

    container.appendChild(divElement);

    return container;
}