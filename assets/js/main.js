/*===== carousel start =====*/
let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");

function nextSlide() {
    currentIndex++;
    carousel.style.transition = "transform 1s ease-in-out";
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset back to first slide after the last one
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            carousel.style.transition = "none"; // Remove transition for instant jump
            carousel.style.transform = "translateX(0%)";
            currentIndex = 0;
        }, 1000); // Wait for animation to finish
    }
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
/*===== carousel end =====*/


/*===== Contact form start =====*/
let contactMeForm = document.getElementById("contactMeForm");

contactMeForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Get form values
  const name = contactMeForm.elements['name'].value;
  const email = contactMeForm.elements['email'].value;
  const phone = contactMeForm.elements['phone'].value;
  const project = contactMeForm.elements['project'].value;
  const subject = contactMeForm.elements['subject'].value;
  const message = contactMeForm.elements['message'].value;

  // Format the message
  let messageText = `Hi, I'm ${name} and my email address is ${email}.`;
  if (phone) {
    messageText += ` My phone number is ${phone}.`;
  }
  if (project) {
    messageText += ` I would like to discuss with you regarding a visa and its details are as follows:\n ${project}.`;
  }
  if (subject) {
    messageText += `\n Subject: ${subject}.`;
  }
  if (message) {
    messageText += `\n Also, please find my comments as follows:\n ${message}`;
  }

  // Encode the message for the URL
  const encodedText = encodeURIComponent(messageText);

  // Replace with your WhatsApp number (with country code)
  const whatsappNumber = "+918247634398"; // Example WhatsApp number

  // Create the WhatsApp URL
  const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Open the URL in a new tab
  window.open(url, '_blank');
});
/*===== Contact form end =====*/
