import { finalResultUpdate } from '../../../Calcs';
export function finalResult(){

    let container = document.createElement("container");
    container.id = "final-result-container";

    let strongElement = document.createElement('strong');
    strongElement.appendChild(document.createTextNode('Final Result:'));

    container.appendChild(strongElement);

    let divElement = document.createElement('div');
    divElement.id = "final-result-labels";

    let teamOneTag = document.createElement("strong");
    teamOneTag.appendChild(document.createTextNode("Team One:"));

    let spanElement1 = document.createElement("span");
    spanElement1.appendChild(document.createTextNode("R$ 0.00"));
    
    let teamTwoTag = document.createElement("strong");
    teamTwoTag.appendChild(document.createTextNode("Team Two:"));

    let spanElement2 = document.createElement("span");
    spanElement2.appendChild(document.createTextNode("R$ 0.00"));

    divElement.appendChild(teamOneTag);
    divElement.appendChild(spanElement1);
    divElement.appendChild(teamTwoTag);
    divElement.appendChild(spanElement2);

    container.appendChild(divElement);

    return container;
}