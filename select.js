//Made sure to connect both scripts to selection.html page including a new js file
// I had to use the insertadjacentHTML function to add text before and after my element ID's
//Also used text "PLACEHOLDER" to be able to click something for my function to be called
// as well as to have a location point in which to insert my html onto the page   

function renderFirst(){
    if(1 === 1){
        let heading = document.getElementById(`unoHeader`);
        heading.insertAdjacentHTML("beforebegin",`<h1>User chose BTC!</h1>`);
        alert(`BTC`);
        let removeTwo = document.getElementById(`deuxHeader`);
        removeTwo.remove();
        let removeThree = document.getElementById(`troisHeader`);
        removeThree.remove();
    } else {}
}

// function removeSecond(){
//     let removeTwo = document.getElementById(`deuxHeader`);
//     removeTwo.remove();
// }

// function removeThird(){
//     let removeThree = document.getElementById(`troisHeader`);
//     removeThree.remove();
// }


function renderSecond() {
    if(2 === 2){
        let heading = document.getElementById(`deuxHeader`);
        heading.insertAdjacentHTML("beforeend",`<h2>User chose Ethereum!</h2>`);
        alert(`ETH`);
        let removeOne = document.getElementById(`unoHeader`);
        removeOne.remove();
        let removeThree = document.getElementById(`troisHeader`);
        removeThree.remove();
    } else {}
}

// function removeFirst(){
//     let removeOne = document.getElementById(`unoHeader`);
//     removeOne.remove();
// }

// function removeThird(){
//     let removeThree = document.getElementById(`troisHeader`);
//     removeThree.remove();
// }

function renderThird() {
    if (3 === 3){
        let heading = document.getElementById(`troisHeader`);
        heading.insertAdjacentHTML("afterend",`<h3>User chose Cardano</h3>`);
        alert(`ADA`);
        let removeOne = document.getElementById(`unoHeader`);
        removeOne.remove();
        let removeTwo = document.getElementById(`deuxHeader`);
        removeTwo.remove();
    } else {}
}

// function removeFirst(){
//     let removeOne = document.getElementById(`unoHeader`);
//     removeOne.remove();
// }

// function removeSecond(){
//     let removeTwo = document.getElementById(`deuxHeader`);
//     removeTwo.remove();
// }

let firstH1 = document.getElementById(`unoHeader`);
let secondH2 = document.getElementById(`deuxHeader`);
let thirdH3 = document.getElementById(`troisHeader`);
firstH1.addEventListener(`click`, renderFirst);
secondH2.addEventListener(`click`, renderSecond);
thirdH3.addEventListener(`click`, renderThird);