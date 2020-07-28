getElement('pin-wrong').style.display = "none";
getElement('pin-matched').style.display = "none";

// Function for DRY.
function getElement(id) {
    let value = document.getElementById(id);
    return value;
}

// Function for generate random pin.
function pinGenerator(inputAddress) {
    let pin = "";
    for (let index = 0; index < 4; index++) {
        let randomNumber = Math.round(Math.random() * 9);
        pin = pin + randomNumber;
    }
    getElement(inputAddress).value = pin;
}

// Function for keyboard.
function typePin(key) {
    if (key == '<') {
        let currentPin = getElement('pin-submit').value;
        let newPin = currentPin.slice(0, -1); //For remove last index of String.
        getElement('pin-submit').value = newPin;
    }
    else if (key == 'c') {
        getElement('pin-submit').value = "";
    }
    else {
        let typePin = getElement('pin-submit');
        let keyValue = getElement(key).innerText;
        typePin.value = typePin.value + keyValue;
    }
}

// Function for  pin matching.
function pinChecker() {
    let hitLeft = parseInt(getElement('hit-left').innerText);
    if (hitLeft > 0) {
        let pinFound = getElement('pin-found').value;
        let pinSubmit = getElement('pin-submit').value;
        if (pinFound == pinSubmit) {
            getElement('pin-matched').style.display = "block";
            getElement('pin-wrong').style.display = "none";
        }
        else {
            getElement('pin-wrong').style.display = "block";
            getElement('pin-matched').style.display = "none";
            getElement('hit-left').innerText = hitLeft - 1;
        }
    }
}
