let currentIndex = 0;
const images = document.querySelectorAll('.lightbox');

images.forEach((image, index) => {
    image.addEventListener('click', function () {
        currentIndex = index;
        openLightbox(image);
    });
});
function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const captionText = document.getElementById('caption');

    lightbox.style.display = "block";
    lightboxImage.src = image.querySelector('img').src;
    captionText.innerHTML = image.getAttribute('data-caption');
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}
document.querySelector('.close').onclick = closeLightbox;
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    openLightbox(images[currentIndex]);
}
document.getElementById('lightbox').onclick = function (event) {
    if (event.target === this) {
        closeLightbox();
    }
};

// script.js

function validateForm(event) {
    // Get form elements
    var fullName = document.getElementById('full-name').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if all fields are filled
    if (fullName === "" || phoneNumber === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); 
    } else {
        
        document.getElementById('confirmation-message').style.display = 'block';
        document.getElementById('confirmation-message').innerText = 'Thanks for reaching out, we will be in contact soon.';
        event.preventDefault(); 
    }
}

function clearForm() {
    document.getElementById("full-name").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}


