const backCity = document.getElementById('backIndex');
const backLodging =document.getElementById("backLodging");
const submitDining =document.getElementById("submit-dining");

submitDining.addEventListener("click", function() {
    const checkedCheckboxes = document.querySelectorAll('.select-checkbox'); // Replace with your actual selector
const selectedIds = [];


for (let i = 0; i < checkedCheckboxes.length; i++) {
    if (checkedCheckboxes[i].checked) {
        selectedIds.push(checkedCheckboxes[i].id);
    }

}

  localStorage.setItem('dining', JSON.stringify(selectedIds));
  redirectPage("itinerary.html");
console.log(selectedIds);
});

backCity.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage("index.html");
   // renderMessage();
  });
backLodging.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage("lodging.html");
   // renderMessage();
  });

  
  const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
    };