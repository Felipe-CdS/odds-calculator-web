import { twitchViewer } from '../TwitchViewer/index';
import { tablesArea } from '../TablesArea/index';

export function layout(){
    
    let divEl = document.createElement('div');
    divEl.id = "Layout";

    divEl.appendChild(twitchViewer());
    divEl.appendChild(tablesArea());

    return divEl;
}

