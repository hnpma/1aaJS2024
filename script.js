function youRang() {
    document.getElementById("main-text").innerHTML += "you rang...";
    console.log("you rang...");
}
// Obtain a reference to the button element
const button = document.getElementById("ring-button");
// Set named function youRang as the click event handler
button.addEventListener("click", youRang);
