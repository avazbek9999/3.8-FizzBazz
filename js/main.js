//Form
var elForm = document.querySelector('.form');
var elUserInput = elForm.querySelector('.input');
var elResultBox = elForm.querySelector('.box');


//Function FizzBazz
function FizzBazz(nam) {
    if (nam % 3 === 0 && nam % 5 === 0) {
        return 'FizzBazz'
    } else if (nam % 3 === 0 && nam % 5 !== 0) {
        return 'Fizz'
    } else if (nam % 5 === 0 && nam % 3 !== 0) {
        return 'Bazz'
    } else {
        return nam
    }
}


//AddEvent
elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var userNamber = elUserInput.value.trim();
    elResultBox.textContent = 'Result: ' + FizzBazz(userNamber);
});