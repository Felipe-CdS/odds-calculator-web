export let teamOne = {
    name: "Team One",
    odds: [],
    values: [],
    totalSpent: 0,
    totalReturn: 0,
    liquidIncome: 0,
    oddsListPath: document.getElementsByClassName("odds-list-container")[0],
    valuesListPath: document.getElementsByClassName("values-list-container")[0],
    resultsPath: document.getElementsByClassName("results-list-container")[0]
};

export var teamTwo = {
    name: "Team Two",
    odds: [],
    values: [],
    totalSpent: 0,
    totalReturn: 0,
    liquidIncome: 0,
    oddsListPath: document.getElementsByClassName("odds-list-container")[1],
    valuesListPath: document.getElementsByClassName("values-list-container")[1],
    resultsPath: document.getElementsByClassName("results-list-container")[1]
};

export function enterInput(team){

    function returnMethod(){
        if((team.odds).length < 5){
        const teamOneOddsList = document.getElementsByClassName("odds-list-container")[0];
        const teamOneValuesList = document.getElementsByClassName("values-list-container")[0];
        const teamTwoOddsList = document.getElementsByClassName("odds-list-container")[1];
        const teamTwoValuesList = document.getElementsByClassName("values-list-container")[1];

        if(team.name == "Team One"){
            if( teamOneOddsList.querySelector(".odds-input-form").value != "" && teamOneValuesList.querySelector(".values-input-form").value != ""){

                (teamOne.odds).push(inputTreatement(teamOneOddsList.querySelector(".odds-input-form").value));
                teamOneOddsList.querySelector(".odds-input-form").value = "";

                (teamOne.values).push(inputTreatement(teamOneValuesList.querySelector(".values-input-form").value));
                teamOneValuesList.querySelector(".values-input-form").value = "";

                teamOneUpdate(teamOneOddsList, teamOneValuesList);
            }   
        }
        else{
            if(teamTwoOddsList.querySelector(".odds-input-form").value != "" && teamTwoValuesList.querySelector(".values-input-form").value != ""){

                teamTwo.odds.push(inputTreatement(teamTwoOddsList.querySelector(".odds-input-form").value));
                teamTwoOddsList.querySelector(".odds-input-form").value = "";
                
                teamTwo.values.push(inputTreatement(teamTwoValuesList.querySelector(".values-input-form").value));
                teamTwoValuesList.querySelector(".values-input-form").value = "";

                teamTwoUpdate(teamTwoOddsList, teamTwoValuesList);
            }    
        }  

        totalSpentCalc(team);
        totalReturnCalc(team);
        liquidIncome(team);

        }
    }
    return returnMethod;
}

export function revert(team) {

    function returnMethod(){

        const teamOneOddsList = document.getElementsByClassName("odds-list-container")[0];
        const teamOneValuesList = document.getElementsByClassName("values-list-container")[0];
        const teamTwoOddsList = document.getElementsByClassName("odds-list-container")[1];
        const teamTwoValuesList = document.getElementsByClassName("values-list-container")[1];

        if(team.name == "Team One"){
            (teamOne.odds).pop();
            (teamOne.values).pop();
            teamOneUpdate(teamOneOddsList, teamOneValuesList);
        }
        else{
            (teamTwo.odds).pop();
            (teamTwo.values).pop();
            teamTwoUpdate(teamTwoOddsList, teamTwoValuesList);
        }

        totalSpentCalc(team);
        totalReturnCalc(team);
        liquidIncome(team);
    
    }
    return returnMethod;
}

export function reset(team) {

    function returnMethod(){

        const teamOneOddsList = document.getElementsByClassName("odds-list-container")[0];
        const teamOneValuesList = document.getElementsByClassName("values-list-container")[0];
        const teamTwoOddsList = document.getElementsByClassName("odds-list-container")[1];
        const teamTwoValuesList = document.getElementsByClassName("values-list-container")[1];

        if(team.name == "Team One"){
            (teamOne.odds) = [];
            (teamOne.values) = [];
            teamOneUpdate(teamOneOddsList, teamOneValuesList);
        }
        else{
            (teamTwo.odds) = [];
            (teamTwo.values) = [];
            teamTwoUpdate(teamTwoOddsList, teamTwoValuesList);
        }

        totalSpentCalc(team);
        totalReturnCalc(team);
        liquidIncome(team);
    
    }
    return returnMethod;
}

function totalSpentCalc(team){
    var resultsPath = "";

    if(team.name == "Team One"){
        resultsPath = document.getElementsByClassName("results-list-container")[0];
    }else{
        resultsPath = document.getElementsByClassName("results-list-container")[1];
    }
    
    team.totalSpent = 0;

    (team.values).forEach(element => {
        team.totalSpent += parseFloat(element);
    });

    team.totalSpent = team.totalSpent.toFixed(2);

    resultsPath.querySelector(".total-spent").innerHTML = "";
    resultsPath.querySelector(".total-spent").innerHTML = `R$ ${team.totalSpent}`;
    
}

function totalReturnCalc(team){
    var resultsPath = "";

    if(team.name == "Team One"){
        resultsPath = document.getElementsByClassName("results-list-container")[0];
    }else{
        resultsPath = document.getElementsByClassName("results-list-container")[1];
    }
    
    team.totalReturn = 0;

    for(let i = 0; i < (team.values).length; i++){
        team.totalReturn += (team.values[i] * team.odds[i]);
    }

    team.totalReturn =  (team.totalReturn).toFixed(2);

    resultsPath.querySelector(".total-return").innerHTML = "";
    resultsPath.querySelector(".total-return").innerHTML = `R$ ${team.totalReturn}`;
    
}

function liquidIncome(team){
    var resultsPath = "";

    if(team.name == "Team One"){
        resultsPath = document.getElementsByClassName("results-list-container")[0];
    }else{
        resultsPath = document.getElementsByClassName("results-list-container")[1];
    }
    
    team.liquidIncome = (team.totalReturn) - (team.totalSpent);

    team.liquidIncome = team.liquidIncome.toFixed(2);

    resultsPath.querySelector(".liquid-income").innerHTML = "";
    resultsPath.querySelector(".liquid-income").innerHTML = `R$ ${team.liquidIncome}`;
    
}

function inputTreatement(entry){

    if(entry.includes(",")){
        var a = entry.replace(",", ".");
       return a;
    }
    else{
        return entry;
    }
}

function teamOneUpdate(teamOneOddsList, teamOneValuesList){
    teamOneOddsList.querySelector(".odds-labels").innerHTML = "";

                let teamOddsArray = teamOne.odds;
                teamOddsArray.forEach(element => {
                    let input = document.createElement('span');
                    input.appendChild(document.createTextNode(element));
                    teamOneOddsList.querySelector(".odds-labels").appendChild(input);
                });

                teamOneValuesList.querySelector(".values-labels").innerHTML = "";
                let teamValuesArray = teamOne.values;
                teamValuesArray.forEach(element => {
                    let input = document.createElement('span');
                    input.appendChild(document.createTextNode(element));
                    teamOneValuesList.querySelector(".values-labels").appendChild(input);
                });
}

function teamTwoUpdate(teamTwoOddsList, teamTwoValuesList){
    teamTwoOddsList.querySelector(".odds-labels").innerHTML = "";
                let teamOddsArray = teamTwo.odds;
                teamOddsArray.forEach(element => {
                    let input = document.createElement('span');
                    input.appendChild(document.createTextNode(element));
                    teamTwoOddsList.querySelector(".odds-labels").appendChild(input);
                });

                teamTwoValuesList.querySelector(".values-labels").innerHTML = "";
                let teamValuesArray = teamTwo.values;
                teamValuesArray.forEach(element => {
                    let input = document.createElement('span');
                    input.appendChild(document.createTextNode(element));
                    teamTwoValuesList.querySelector(".values-labels").appendChild(input);
                });
}

