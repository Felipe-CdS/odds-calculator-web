import { oddsList } from '../EntriesList/OddsList/index';
import { valuesList } from '../EntriesList/ValuesList/index';
import { resultsList } from '../EntriesList/ResultsList/index';

export function teamTable(team, enemyTeam){
    let container = document.createElement('container');
    container.id = "team-table";

    let h2Element = document.createElement('h2');
    h2Element.appendChild(document.createTextNode(team.name));

    let divElement = document.createElement('div');
    divElement.appendChild(oddsList(team.odds));
    divElement.appendChild(valuesList(team.values));
    divElement.appendChild(resultsList(team, enemyTeam));


    container.appendChild(h2Element);
    container.appendChild(divElement);
    return container;
}