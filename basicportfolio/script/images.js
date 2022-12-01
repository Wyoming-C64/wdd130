// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var cards = document.getElementsByClassName("mySlides");
    var slides = document.getElementsByClassName("slide-img");
    var captionText = document.getElementById("caption");
    if (n > cards.length) {slideIndex = 1}
    if (n < 1) {slideIndex = cards.length}
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].onmouseup = closeModal;
      }
    cards[slideIndex-1].style.display = "block";
    captionText.innerHTML = slides[slideIndex-1].alt;
  }