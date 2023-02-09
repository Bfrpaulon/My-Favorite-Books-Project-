var slideIndex = 1;

//Function to move to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Function to show a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

//Function to show the slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Automatic slideshow
setInterval(function () {
  plusSlides(1);
}, 5000);

// Set the countdown timer to 15 minutes (in seconds)

var countDownTime = 15 * 60;

// Update counter every second
setInterval(function () {
  countDownTime--;
  var minutes = Math.floor(countDownTime / 60);
  var seconds = countDownTime % 60;

  // Add a zero in front of the minute or second values if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update the counter on the page
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
}, 1000);

showSlides(slideIndex);