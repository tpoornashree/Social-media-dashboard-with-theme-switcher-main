const toggles = document.getElementById("checkBox");
const modes = document.getElementById("mode");
const mediaDash = document.getElementById("h2");
const total = document.getElementById("p");
const overToday = document.getElementById("today");


function bgChange() {
    if (toggles.checked == true) {
        setTimeout(function () {
            document.body.style.background = "white";
            var numbers, a;
            numbers = document.querySelectorAll(".count, .heading, .dark-light");
            for (a = 0; a < numbers.length; a++) {
                numbers[a].style.color = "#222";
            }
            modes.textContent = "Dark Mode";
            mediaDash.style.color = 'Black';
            total.style.color = 'Black';
            overToday.style.color = 'Black';
            var topCards, i;
            topCards = document.querySelectorAll("ul");
            for (i = 0; i < topCards.length; i++) {
                topCards[i].style.background = "hsl(227, 47%, 96%)";
            }
            var bottomCards, j;
            bottomCards = document.querySelectorAll(".overview-main div");
            for (j = 0; j < bottomCards.length; j++) {
                bottomCards[j].style.background = "hsl(227, 47%, 96%)";
            }
        }, 50);

    }
    else {

        setTimeout(function () {
            document.body.style.background = "hsl(230, 17%, 14%)";
            var numbers, a;
            numbers = document.querySelectorAll(".count, .heading, .dark-light");
            for (a = 0; a < numbers.length; a++) {
                numbers[a].style.color = "white";
            }
            mediaDash.style.color = 'White';
            total.style.color = 'White';
            overToday.style.color = 'white';
            var topCards, i;
            topCards = document.querySelectorAll(".top ul");
            for (i = 0; i < topCards.length; i++) {
                topCards[i].style.background = "hsl(228, 28%, 20%)";
            }
            var bottomCards, j;
            bottomCards = document.querySelectorAll(".overview-main div");
            for (j = 0; j < bottomCards.length; j++) {
                bottomCards[j].style.background = "hsl(228, 28%, 20%)";
            }
        }, 50);
    }
}