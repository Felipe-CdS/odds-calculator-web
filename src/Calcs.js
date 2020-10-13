export let teamOne = {
    name: "Team One",
    odds: [],
    values: [],
    totalSpent: 0,
    totalReturn: 0,
    liquidIncome: 0,
    finalResult: 0,
    equalPoint: {
        odd: 0,
        value: 0
    },
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
    finalResult: 0,
    equalPoint: {
        odd: 0,
        value: 0
    },
    oddsListPath: document.getElementsByClassName("odds-list-container")[1],
    valuesListPath: document.getElementsByClassName("values-list-container")[1],
    resultsPath: document.getElementsByClassName("results-list-container")[1]
};

export function enterInput(team, enemyTeam){

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
        finalResultUpdate();
        equalValueCalc(team, enemyTeam);

        }
    }
    return returnMethod;
}

export function revert(team, enemyTeam) {

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
        finalResultUpdate();
        equalValueCalc(team, enemyTeam);
    
    }
    return returnMethod;
}

export function reset(team, enemyTeam) {

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
        finalResultUpdate();
        equalValueCalc(team, enemyTeam);
    
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

function finalResultUpdate() {
    let finalResultDiv = document.getElementById("final-result-labels");
    finalResultDiv.innerHTML = "";

    let teamOneCalc = (teamOne.liquidIncome - teamTwo.totalSpent);
    teamOneCalc = teamOneCalc.toFixed(2);
    let teamTwoCalc = (teamTwo.liquidIncome - teamOne.totalSpent);
    teamTwoCalc = teamTwoCalc.toFixed(2);

    let teamOneTag = document.createElement("strong");
    teamOneTag.appendChild(document.createTextNode("Team One:"));

    let spanElement1 = document.createElement("span");
    spanElement1.appendChild(document.createTextNode("R$ " + teamOneCalc));
    if(teamOneCalc < 0){
        spanElement1.style.backgroundColor = "red";
    }
    else if(teamOneCalc > 0) {
        spanElement1.style.backgroundColor = "green";
    }
    
    let teamTwoTag = document.createElement("strong");
    teamTwoTag.appendChild(document.createTextNode("Team Two:"));

    let spanElement2 = document.createElement("span");
    spanElement2.appendChild(document.createTextNode("R$ " + teamTwoCalc));
    if(teamTwoCalc < 0) {    
        spanElement2.style.backgroundColor = "red";
    }
    else if(teamTwoCalc > 0){
        spanElement2.style.backgroundColor = "green";
    }

    finalResultDiv.appendChild(teamOneTag);
    finalResultDiv.appendChild(spanElement1);
    finalResultDiv.appendChild(teamTwoTag);
    finalResultDiv.appendChild(spanElement2);
}

function equalValueCalc(teamOne, teamTwo) {
    let equalValueDiv = document.getElementById("equal-value-labels");
    equalValueDiv.innerHTML = "";

    let result = 0;
    let teamOneFinalResult = (teamOne.liquidIncome - teamTwo.totalSpent);
    let teamTwoFinalResult = (teamTwo.liquidIncome - teamOne.totalSpent);

    let teamTag, spanElement1, spanElement2;

    if(teamOneFinalResult < 0) {
        result = Math.abs(teamOneFinalResult) / teamTwoFinalResult;
        result++;
        result = result.toFixed(2);

        teamTag = document.createElement("span");
        teamTag.appendChild(document.createTextNode(teamOne.name));
        spanElement1 = document.createElement("span");
        spanElement1.appendChild(document.createTextNode("Value: R$ " + teamTwoFinalResult));
        spanElement2 = document.createElement("span");
        spanElement2.appendChild(document.createTextNode("odd: " + result));
    }

    else if(teamTwoFinalResult < 0){
        result = Math.abs(teamTwoFinalResult) / teamOneFinalResult;
        result++;
        result = result.toFixed(2);

        teamTag = document.createElement("span");
        teamTag.appendChild(document.createTextNode(teamTwo.name));
        spanElement1 = document.createElement("span");
        spanElement1.appendChild(document.createTextNode("Value: R$ " + teamOneFinalResult));
        spanElement2 = document.createElement("span");
        spanElement2.appendChild(document.createTextNode("odd: " + result));
    }

    else {
        teamTag = document.createElement("span");
        teamTag.appendChild(document.createTextNode("-"));
        spanElement1 = document.createElement("span");
        spanElement1.appendChild(document.createTextNode("Value: R$ 0.00"));
        spanElement2 = document.createElement("span");
        spanElement2.appendChild(document.createTextNode("odd: 0.00"));
    }

    equalValueDiv.appendChild(teamTag);
    equalValueDiv.appendChild(spanElement1);
    equalValueDiv.appendChild(spanElement2);
}