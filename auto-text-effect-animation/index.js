//DOM reading
const containerEl = document.querySelector(".container");
//array to show text
const text = ["Randa Hamdan", "Student", "Fashionista", "An Icon"];

//starting point of read array
let startIndex = 0;
let charIndex = 0;

function updateText() {
    charIndex++;
    containerEl.innerHTML = `<h1>I am ${text[startIndex].slice(0, 1) === "!" ? "am" : "a"} ${text[startIndex].slice(0, charIndex)}</h1>`;

    //keep reading the array unless charIndex becomes 0
    if (charIndex === text[startIndex].length) {
        startIndex++;
        charIndex = 0;
    }

    //if it reads all start from beginning
    if (startIndex === text.length) {
        startIndex = 0;
    }

    setTimeout(updateText, 400);
}

updateText(); // Call the function to start updating text
