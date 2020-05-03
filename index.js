// document.querySelector("button").addEventListener("click", function () {


//     alert("I got clicked");
// });

for (var i = 0; 1 < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        this.style.color = "white";
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();

        // document.querySelector(".first").addEventListener("click", function () {
        //     var audio = new Audio('sounds/tom-3.mp3');
        //     audio.play();

        // document.querySelectorAll(".a drum")[i].addEventListener("click", function () {
        //     var audio = new Audio('sounds/crash.mp3');
        //     audio.play();


    });

}