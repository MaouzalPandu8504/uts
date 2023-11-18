let prevScrollPos = window.pageYOffset;
const nav = document.querySelector('.nav');
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        nav.style.top = '0';
    } else {
        nav.style.top = '-75px';
    }
    prevScrollPos = currentScrollPos;
};
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    clearErrors();
    if (name === '') {
        displayError('name', 'Name is required');
        return;
    }
    if (email === '') {
        displayError('email', 'Email is required');
        return;
    } else if (!isValidEmail(email)) {
        displayError('email', 'Invalid email format');
        return;
    }
    alert('Form submitted successfully!');
}
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function displayError(field, message) {
    var errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    document.getElementById(field).parentNode.appendChild(errorElement);
}

function clearErrors() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
    });
}