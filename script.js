document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
});

function visitMyWorks() {
    // Define the function to handle the button click
    window.location.href = '#projects'; // Replace with actual section or URL
    }

