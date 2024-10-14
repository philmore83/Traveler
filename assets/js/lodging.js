const traveler = JSON.parse(localStorage.getItem("traveler"));
// console.log("traveler" + traveler);
// console.log("traveler.destinationName: " + traveler.destinationName);
// console.log("traveler.startDate: " + traveler.startDate);
// const destinationName = document.getElementById('destinationNm');
// destinationName.textContent = capitalizeFirstLetter(traveler.destinationName);
const destinationDisplyNm = document.getElementById('destinationDisplayNm')
destinationDisplyNm.textContent = traveler.destinationDisplayNm;
const modalDestinationDisplyNm = document.getElementById('destinationDisplayNm')
modalDestinationDisplyNm.textContent = traveler.destinationDisplayNm;
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
let property = ""
let price = "";
let rating = "";
let lodgingSrc = "";

changeImage(traveler.destinationName);
// console.log("Traveler:")

lodgingContainer.addEventListener('click', function (event) {

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
        // console.log("Selected lodging: " + lodgingId);
        property = checkbox.dataset.property;
        // console.log("data-property = " + property);
        price = checkbox.dataset.price;
        // console.log("data-price = " + price);
        rating = checkbox.dataset.rating;
        // console.log("data-rating = " + rating);
        lodgingSrc = checkbox.dataset.lodgingSrc;
        // console.log("data-lodging-src = " + lodgingSrc);

    }
});

const lodgingModal = document.getElementById('lodgingModal');
if (lodgingModal) {
    lodgingModal.addEventListener('show.bs.modal', event => {
        // Checkbox that triggered the modal
        const checkbox = event.relatedTarget
        // Extract info from data-bs-* attributes
        const property = checkbox.getAttribute('data-property');
        const price = checkbox.getAttribute('data-price');
        const rating = checkbox.getAttribute('data-rating');
        const lodgingSrc = checkbox.getAttribute('data-lodging-src');
        // console.log("lodgingSrc = " + lodgingSrc);
        // Update the modal's content.
        const modalTitle = lodgingModal.querySelector('.modal-title')
        const modalBodyInput = lodgingModal.querySelector('.modal-body input')
        const modalProperty = document.getElementById('property');
        const modalPrice = document.getElementById('price');
        const modalRating = document.getElementById('rating');
        const modalLodgingImage = document.getElementById('lodgingImage');
        const modalStoreLodging = document.getElementById('storeLodging');
        modalStoreLodging.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedProperty = document.getElementById('selectedProperty');
            selectedProperty.textContent = "Selected Lodging: " + property.trim();
            // console.log("modalStoreLodging Clicked Event");
            localStorage.setItem('lodging', JSON.stringify(property));
        })
        modalTitle.textContent = `Your Lodging Choice`;
        // console.log("modalProperty.textContent " + modalProperty.textContent);
        modalProperty.textContent = 'Property: ' + property;
        modalPrice.textContent = 'Price: ' + price;
        modalRating.textContent = 'Rating: ' + rating;
        modalLodgingImage.src = lodgingSrc;


    })
};
submitLodging.addEventListener('click', function (event) {
    event.preventDefault();

    // console.log("lodging name: " + lodgingId.trim());
    // console.log("esta vacio el endDate?: " + isEmpty(endDate));
    // console.log("esta vacio el destinationName?: " + isEmpty(destinationName));

    const lodge = {
        nameLodge: lodgingId.trim(),
    };

    localStorage.setItem('lodging', JSON.stringify(lodge));
    if (traveler.destinationName == "Belgium") {
        redirectPage("diningBelgium.html");
    }
    else if (traveler.destinationName == "Greece") {
        redirectPage("diningGreece.html");
    }
    else if (traveler.destinationName == "London") {
        redirectPage("diningLondon.html");
    }
    else if (traveler.destinationName == "New York") {
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
    // Change the src attribute of the image element
    // console.log("aqui esta el id de la foto: " + idImage);
    if (idImage == "London") {
        imageElement.src = "../Traveler/assets/images/index/london.jpg";
    }
    if (idImage == "Belgium") {
        imageElement.src = "../Traveler/assets/images/index/belgium.jpg";
        // console.log("entre a belgica!!");
    }
    if (idImage == "Greece") {
        imageElement.src = "../Traveler/assets/images/index/greece.jpg";
    }
    if (idImage == "New York") {
        imageElement.src = "../Traveler/assets/images/index/newyork.jpg";
    }

    // console.log("End Function changeImage");

}

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

