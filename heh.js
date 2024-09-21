

document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('ro-RO', options);
});


function updateCountdown() {
    const now = new Date();
    let targetTime = new Date();
    
    // Set the target time to 3 PM today
    targetTime.setHours(15, 0, 0, 0);
    
    
    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const timeDifference = targetTime - now;
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    document.getElementById('countdown-timer').innerHTML =
        `Timp ramas pana la urmatoarea actualizare: ${hours}h ${minutes}m ${seconds}s`;
}


setInterval(updateCountdown, 1000);


updateCountdown();




document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-btn'); // Selecting by class

    // Show the popup when the page loads if it hasn't been closed before
    if (!localStorage.getItem('popupClosed')) {
        popup.style.display = 'block';
    }

    closeButton.addEventListener('click', function() {
        // Hide the popup
        popup.style.display = 'none';
        // Save the state in localStorage
        localStorage.setItem('popupClosed', 'true');
        // Scroll to the math section
        const mathSection = document.getElementById('test-help');
        if (mathSection) {
            mathSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const coll = document.getElementsByClassName("collapsible");
    
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_7ytbwmb', 'template_fmikp0m', this)
        .then(function() {
            alert('Question sent successfully!');
        }, function(error) {
            alert('Failed to send question. Please try again later.');
        });
});
