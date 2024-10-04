const traveler = JSON.parse(localStorage.getItem("traveler"));
console.log("traveler" + traveler);
console.log("traveler.destinationName: " + traveler.destinationName);
console.log("traveler.startDate: " + traveler.startDate);
const destinationName = document.getElementById('destinationNm');
destinationName.textContent = capitalizeFirstLetter(traveler.destinationName);
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
startDate.textContent = "Start Date: " + traveler.startDate;
endDate.textContent = "End Date: " + traveler.endDate;
