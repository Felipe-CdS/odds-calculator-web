import { layout } from './components/Layout/index';

class Main {
    constructor(){
        this.rootEl = document.getElementById('root');

        let layoutEl = layout();
        this.rootEl.appendChild(layoutEl);
    }   
}

new Main();
