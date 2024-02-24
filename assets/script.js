 // JavaScript code for infinite image slider
 const images = [
    "assets/slide1.jpg",
    "assets/slide2.jpg",  // Add more image URLs as needed
    "assets/slide3.jpg",
    "assets/slide4.jpg",
    "assets/slide5.jpg",
    "assets/slide6.jpg",
    "assets/slide7.jpg",
    "assets/slide8.jpg",
    "assets/slide9.jpg",
];

let currentIndex = 0;
const bannerImage = document.getElementById("banner");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    bannerImage.src = images[currentIndex];
}

// Change image every 3 seconds (adjust as needed)
setInterval(showNextImage, 3500);


var typed = new Typed(".text", {
    strings: ["School Of Economics", "School of Computer and Information Sciences", "Department of Anthropology"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
});
