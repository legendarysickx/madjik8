var responses = [
    " I'll try again when i feel like it" ,
    "Ima going to be a software architect", 
    " im going to make inventions that change the world",
    "i  want to make more legendary video games than rockstar north",
    "i want to move to texas",
    " i want to own 50 business in the next 5 years 10 a year",
    "i want to travel around the world",
    "i want to master software engineering",
    "i want food",
    "idk man",
    "ima be the george washington carver of engineering and stem",
    " i want to go to a waffle house with a bad bitch rite now",
    "i want to be the youngest trillionaire by 29 ",
    "oop",
    "c#",
    "pythons"
];

window.onload = function() {
    var result = document.getElementById("message");
    result.onclick = giveResponse;
}

function giveResponse() {
    var index = Math.floor(Math.random() * responses.length);
    alert(responses[index]);
}

function changeColor() {
    var colorChange = document.getElementById('eye');
    var colorNow = colorChange.style.backgroundColor;
    if(colorNow == "purple") {
        colorChange.style.backgroundColor = "darkblue";
    } else{
        colorChange.style.backgroundColor = "purple"
    }
}