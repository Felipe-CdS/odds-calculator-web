import { teamTable }  from '../TeamTable/index'

import { teamOne, teamTwo } from '../../Calcs';

export function tablesArea(){

    let divEl = document.createElement('div');
    divEl.id = "tables-area";

    let teamTable1 = teamTable(teamOne, teamTwo);
    teamTable1.className = "team-table";
    teamTable1.id = "team-one-table";
    
    let teamTable2 = teamTable(teamTwo, teamOne);
    teamTable2.className = "team-table";
    teamTable2.id = "team-two-table";

    divEl.appendChild(teamTable1);
    divEl.appendChild(teamTable2);

    return divEl;
}