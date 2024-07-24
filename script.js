function youRang() {
    document.getElementById("main-text").innerHTML += "you rang...";
}
function myGreetings() {
   document.getElementById("main-text").innerHTML += "Hello! ";
}

const button = document.getElementById("ring-button");
button.addEventListener("click", youRang);// Set named function 
                                          //youRang as the click event handler

const greet =document.getElementById("greet-friend");//Obtain a reference to
                                                    // the button greet-friend 
                                                    //element
greet.addEventListener('click', myGreetings);




