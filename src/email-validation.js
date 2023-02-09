//in dieser datei könnten gegebenfalls reguläre ausdrücke für passwörter ergänzt werden
const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
    name: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(patterns[e.target.attributes.name.value]);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});