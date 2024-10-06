const traveler = JSON.parse(localStorage.getItem("traveler"));
console.log("traveler" + traveler);
console.log("traveler.destinationName: " + traveler.destinationName);
console.log("traveler.startDate: " + traveler.startDate);
const destinationName = document.getElementById('destinationNm');
destinationName.textContent = capitalizeFirstLetter(traveler.destinationName);
let imageElement = document.getElementById('cityImage');





function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
startDate.textContent = "Start Date: " + traveler.startDate;
endDate.textContent = "End Date: " + traveler.endDate;
const submitLodging = document.getElementById('submitLodging');
const backCity = document.getElementById('backIndex');

let lodgingContainer = document.getElementById('lodging');
let selectedCheckbox = null; 
let lodgingId = "";

changeImage(destinationName.textContent);


lodgingContainer.addEventListener('click', function(event) {
 
    let checkbox = event.target.closest('.select-checkbox');

    if (checkbox) {
       
        if (selectedCheckbox && selectedCheckbox !== checkbox) {
            selectedCheckbox.checked = false;
            selectedCheckbox.closest('tr').style.backgroundColor = '#ffffff'; // Reset background color
        }

        checkbox.checked = true;
        checkbox.closest('tr').style.backgroundColor = 'lightblue'; 
  
        selectedCheckbox = checkbox;
        lodgingId = checkbox.id; 
        console.log("Selected lodging: " + lodgingId);
    }
});

submitLodging.addEventListener('click', function (event) {
    event.preventDefault();
  
    console.log("lodging name: " + lodgingId.trim());
   // console.log("esta vacio el endDate?: " + isEmpty(endDate));
   // console.log("esta vacio el destinationName?: " + isEmpty(destinationName));
  
    const lodge = {
      nameLodge: lodgingId.trim(),
    };

    localStorage.setItem('lodging', JSON.stringify(lodge));
    if(traveler.destinationName == "belgium"){
        redirectPage("diningBelgium.html");
    }
    else if(traveler.destinationName == "greece"){
        redirectPage("diningGreece.html");
    }
    else if(traveler.destinationName == "london"){
        redirectPage("diningLondon.html");
    }
    else if(traveler.destinationName == "newyork"){
        redirectPage("diningNewYork.html");
    }
    //redirectPage("lodging.html");
   // renderMessage();
  });

  backCity.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage("index.html");
   // renderMessage();
  });

  function changeImage(idImage) {
    console.log("aqui esta el id de la foto: " + idImage);
   if(idImage == "London"){
    imageElement.src = "../Traveler/assets/images/index/london.jpg";
   }
   if(idImage == "Belgium"){
    imageElement.src = "../Traveler/assets/images/index/belgium.jpg";
    console.log("entre a belgica!!");
   }
   if(idImage == "Greece"){
    imageElement.src = "../Traveler/assets/images/index/greece.jpg";
   }
   if(idImage == "Newyork"){
    imageElement.src = "../Traveler/assets/images/index/newyork.jpg";
   }
    
    // Change the src attribute of the image element
  
}

  const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
    };
    
  