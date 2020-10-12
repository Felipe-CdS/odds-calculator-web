import { swapTest } from '../../Calcs'

export function twitchViewer(){
    
    let divEl = document.createElement('div');
    divEl.id = "twitch-viewer";
    let pEl = document.createElement('h1');
    pEl.appendChild(document.createTextNode("Twitch"));

    let buttonTest = document.createElement('button');
    buttonTest.appendChild(document.createTextNode("test"));
    buttonTest.onclick = swapTest;
    
    divEl.appendChild(pEl);
    divEl.appendChild(buttonTest);
    return divEl;
}


