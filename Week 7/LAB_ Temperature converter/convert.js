// this is a window event listener which will set
// all the event listeners once the DOM is loaded
window.addEventListener("DOMContentLoaded", domLoaded);

// function to show image according to temperature, parameter is temperature
// in fahrenheit
function showImage(tempInF) {
    if (tempInF < 32) { // if temperature is less than 32
        weatherImage.src = "cold.png"; // change src attribute of image as id weatherImage
        // to cold.png
    } else if (tempInF >= 32 && tempInF <= 50) { // else if this temperatue
        weatherImage.src = "cool.png";
        // change to cool.png
    } else { // otherwise
        // change to warm.png
        weatherImage.src = "warm.png";
    }
}

function domLoaded() {
    // eventListener in fInput
    fInput.addEventListener("input", () => {
        cInput.value = ""; // when we input in fInput fiels cInput field will be cleared
    })

    // eventListener in fInput
    cInput.addEventListener("input", () => {
        fInput.value = ""; // when we input in cInput fiels fInput field will be cleared
    })

    // event handler on button click
    convertButton.addEventListener("click", (e) => {
        e.preventDefault(); // to stop page from reloading when we click on submit
        errorMessage.innerText = '';

        // if fInput is not empty
        if (fInput.value !== '') {
            // convert string to float using parseFloat
            const tempInF = parseFloat(fInput.value);
            if (isNaN(tempInF)) { // if float number is NaN
                errorMessage.innerText = `${fInput.value} is not a number`;
                // set innerText of div as the message
                errorMessage.style.color = "red";
                // set color of text as red
                return; // return the function
            }
            // call convertFToC() function to get temperature in celsius
            const tempInC = convertFtoC(tempInF);
            cInput.value = tempInC; // set cInput input value as converted temperature

            showImage(tempInF); // call showImage() Function, this will show image
            // according to fahrenheit temperature

        } else if (cInput.value !== '') {
            // convert string to float using parseFloat
            const tempInC = parseFloat(cInput.value);
            if (isNaN(tempInC)) { // if float number is NaN
                errorMessage.innerText = `${cInput.value} is not a number`;
                // set innerText of div as this message
                errorMessage.style.color = "red";
                return; // return the function
            }
            // call convertCToF() function to get temperature in fahrenheit
            const tempInF = convertCtoF(tempInC);

            fInput.value = tempInF; // set fInput input text value as converted temperature

            showImage(tempInF); // call showImage() Function, this will show image
            // according to fahrenheit temperature
        }
    })
}

// function to convert celsius to fahrenheit
function convertCtoF(degreesCelsius) {
    return (degreesCelsius * 9 / 5 + 32);
}

// function to convert fahrenheit to celsius
function convertFtoC(degreesFahrenheit) {
    return ((degreesFahrenheit - 32) * 5 / 9);
}