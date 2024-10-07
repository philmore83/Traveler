const backCity = document.getElementById('backIndex');

function renderItinerary() {
    const traveler = JSON.parse(localStorage.getItem("traveler"));
    const lodging = JSON.parse(localStorage.getItem("lodging"));
    const diningListData = JSON.parse(localStorage.getItem("dining")) ; 
    const diningListElement = document.getElementById('dining-list'); 

    if (traveler !== null || lodging !== null ||diningListData !== null) {
        document.getElementById('destination').innerHTML = traveler.destinationName;
        document.getElementById('date-in').innerHTML = traveler.startDate;
        document.getElementById('date-out').innerHTML = traveler.endDate;
        document.getElementById('lodging').innerHTML = lodging.nameLodge;

        diningListElement.innerHTML = "";
        console.log("Length of dining list: " + diningListData.length);

     
        for (let i = 0; i < diningListData.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = diningListData[i]; 
            console.log("List item content: " + diningListData[i]);
            diningListElement.appendChild(listItem); 
        }
    }
}
backCity.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage("index.html");
   // renderMessage();
   localStorage.clear(); // clear all local storage
  });
  const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
    };

  renderItinerary();