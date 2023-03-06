var tablinks = $(".tab-links");
var tabcontents = $(".tab-contents");

function opentab(tab){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tab).classList.add("active-tab");
}

var sideMenu = $("#sideMenu");

function openMenu(){
    sideMenu.css('right', '-70px');
}

function closeMenu(){
    sideMenu.css('right', '-250px');
}

// mouse animation

window.addEventListener('scroll', function() {
    if (window.scrollY >= 200) {
        document.querySelector('#elementId').classList.add('new-class');
        document.querySelector('.goHomeButton').classList.add('goHomeButtonNew');
    } else {
        document.querySelector('#elementId').classList.remove('new-class');
        document.querySelector('.goHomeButton').classList.remove('goHomeButtonNew');
    }
});
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#010142",
    "#000074",
    "#04048b",
    "#1508a8",
    "#0c5aa7",
    "#1852ba",
    "#277bc1",
    "#2797bd",
    "#27b8b8",
    "#28a4a8",
    "#38a4c4",
    "#48D1CC",
    "#40E0D0",
    "#4bc9c9",
    "#56d5d5",
    "#66CCCC",
    "#87CEFF",
    "#87CEFA",
    "#87CEEB",
    "#AFEEEE",
    "#ADD8E6",
    "#B0E0E6"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();


