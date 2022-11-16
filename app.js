

//This is the function I made for clicking the first button on the list called "Bitcoin"

function btcClicked(){
    let currentClicked = Cookies.get(`crypto`);
    if(currentClicked == `Bitcoin`){
        Cookies.set(`secondcrypto`, `Ethereum`);
    } else {
        Cookies.set(`selection`, `Bitcoin`);
    }
}

//This is the function i made for clicking the second button on the lisr called "Ethereum"
function ethClicked(){
    let currentClicked = Cookies.get(`crypto`);
    if(currentClicked == `Ethereum`){
        Cookies.set(`firstcrypto`, `Bitcoin`);
    } else {
        Cookies.set(`selection`, `Ethereum`);
    }
}

//This is the function I made for clicking the third button on the list called "Cardano"
function carClicked(){
    let currentClicked = Cookies.get(`crypto`);
    if(currentClicked == `Cardano`){
        Cookies.set(`secondcrypto`, `Ethereum`);
    } else {
        Cookies.set(`selection`, `Cardano`);
    }
}

//The logic i used was to equate both the cookie name & value to the else statement of my functions.
//I did this by equation my variablename to a string which is logically false.
// I also used the cookie.set function to overwrite to the cookie value and name that i specified within said function

//The event listeners were just click only and targeted towards the button id's  
document.getElementById(`bitButton`).addEventListener(`click`, btcClicked);
document.getElementById(`ethButton`).addEventListener(`click`, ethClicked);
document.getElementById(`carButton`).addEventListener(`click`, carClicked);


// location.href = `selection.html`;
// let firstChoice = {
//     name: `selection`,
//     crypto: `Bitcoin`
// };

// let first_choice_json = JSON.stringify(firstChoice);
// Cookies.set(`first`, first_choice_json);

// // let coin_json = Cookies.get(`coin`);
// // let coin =  JSON.parse(coin_json);
// // document.body.insertAdjacentHTML(`beforeend`, `<h1>WTF</h1>`);



