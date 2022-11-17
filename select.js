//Made sure to connect both scripts to selection.html page including a new js file
// I had to use the insertadjacentHTML function to add text before and after my element ID's
//Also used text "PLACEHOLDER" to be able to click something for my function to be called
// as well as to have a location point in which to insert my html onto the page   
//Used if/else statement as a way to remove my h2 and h3 tags when my h1 tag was selected.
// Utilized same logic for the other functions as well, just removed the h tags that were not being rendered by said function
//Utilized the remove function that we learned in class too.
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

//Commented out these functions as I'm using them as an if/else statement within my functions.

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

//Commented out these functions as I'm using them as an if/else statement within my functions.

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

//Commented out these functions as I'm using them as an if/else statement within my functions.

// function removeFirst(){
//     let removeOne = document.getElementById(`unoHeader`);
//     removeOne.remove();
// }

// function removeSecond(){
//     let removeTwo = document.getElementById(`deuxHeader`);
//     removeTwo.remove();
// }

//Corresponded a variable name of my choosing to the element id on my html page then,
//I just added a basic eventlistener `click' followed by my functions
let firstH1 = document.getElementById(`unoHeader`);
let secondH2 = document.getElementById(`deuxHeader`);
let thirdH3 = document.getElementById(`troisHeader`);
firstH1.addEventListener(`click`, renderFirst);
secondH2.addEventListener(`click`, renderSecond);
thirdH3.addEventListener(`click`, renderThird);