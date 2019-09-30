// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
// On the fly - validering
let nameField = document.querySelector('#name');
let emailField = document.querySelector('#email');
let submitField = document.querySelector('#submit');
let phoneField = document.querySelector('#phone');
nameField.addEventListener('blur', function () {
    document.querySelector('.nameField').classList.add('was-validated');
}, false);
emailField.addEventListener('blur', function () {
    document.querySelector('.emailField').classList.add('was-validated');
}, false);
phoneField.addEventListener('blur', function () {
    document.querySelector('.phoneField').classList.add('was-validated');
}, false);