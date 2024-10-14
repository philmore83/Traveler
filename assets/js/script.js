const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const submitButton = document.getElementById('submit');

let destinationContainer = document.querySelector('.destination'); 
let selectedImage = null; 
let destinationName = "";


 
destinationContainer.addEventListener('click', function(event) {

    if (event.target.tagName === 'IMG') {
      
        if (selectedImage && selectedImage !== event.target) {
            selectedImage.style.backgroundColor = '#ffffff'; 
        }

        event.target.style.backgroundColor = 'lightblue'; 

        selectedImage = event.target;

        destinationName = event.target.id; 
        console.log("Selected Destination: " + destinationName);
        destinationDisplayNm = event.target.dataset.destinationDisplayNm; 
        console.log("Selected Destination: " + destinationDisplayNm);
    }
});


function isEmpty(obj) {
   // console.log ("el objeto es:" + obj.value.trim());

    return Object.keys(obj.value).length === 0;
    
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

 // console.log("esta vacio el stardate?: " + isEmpty(startDate));
 // console.log("esta vacio el endDate?: " + isEmpty(endDate));
 // console.log("esta vacio el destinationName?: " + isEmpty(destinationName));

  const traveler = {
    startDate: startDate.value.trim(),
    endDate: endDate.value.trim(),
    destinationName: destinationName.trim(),
    destinationDisplayNm: destinationDisplayNm.trim(),
  };
  localStorage.setItem('traveler', JSON.stringify(traveler));
  redirectPage("lodging.html");
 // renderMessage();
});

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
    };
    

