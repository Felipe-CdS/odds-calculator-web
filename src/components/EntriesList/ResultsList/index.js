import { enterInput, reset, revert } from "../../../Calcs";

export function resultsList(team){
    let container = document.createElement("container");
    container.className = "results-list-container";

    let strongElement1 = document.createElement('strong');
    strongElement1.appendChild(document.createTextNode('Total Spent:'));
    container.appendChild(strongElement1);

    let spanElement1 = document.createElement('span');
    spanElement1.className = "total-spent";
    spanElement1.appendChild(document.createTextNode('R$ 0.00'));
    container.appendChild(spanElement1);

    let strongElement2 = document.createElement('strong');
    strongElement2.appendChild(document.createTextNode('Total Return:'));
    container.appendChild(strongElement2);

    let spanElement2 = document.createElement('span');
    spanElement2.className = "total-return";
    spanElement2.appendChild(document.createTextNode('R$ 0.00'));
    container.appendChild(spanElement2);

    let strongElement3 = document.createElement('strong');
    strongElement3.appendChild(document.createTextNode('Liquid Income:'));
    container.appendChild(strongElement3);

    let spanElement3 = document.createElement('span');
    spanElement3.className = "liquid-income";
    spanElement3.appendChild(document.createTextNode('R$ 0.00'));
    container.appendChild(spanElement3);

    let divElement = document.createElement('div');

    let enterButton = document.createElement('button');
    enterButton.appendChild(document.createTextNode('Enter Input'));
    enterButton.onclick = enterInput(team);

    let revertButton = document.createElement('button');
    revertButton.appendChild(document.createTextNode('Revert'));
    revertButton.onclick = revert(team);

    let resetButton = document.createElement('button');
    resetButton.appendChild(document.createTextNode('Reset'));
    resetButton.onclick = reset(team);

    divElement.appendChild(enterButton);
    divElement.appendChild(revertButton);
    divElement.appendChild(resetButton);

    container.appendChild(divElement);

    return container;
}


