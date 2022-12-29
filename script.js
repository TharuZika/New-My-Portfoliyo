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
    sideMenu.css('right', 0);
}

function closeMenu(){
    sideMenu.css('right', '-200px');
}

// mouse animation

window.addEventListener('scroll', function() {
    if (window.scrollY >= 500) {
        document.querySelector('#elementId').classList.add('new-class');
    } else {
        document.querySelector('#elementId').classList.remove('new-class');
    }
});
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#000080",
    "#00008B",
    "#191970",
    "#680060",
    "#1E90FF",
    "#6495ED",
    "#4682B4",
    "#00BFFF",
    "#00FFFF",
    "#7FFFD4",
    "#00CED1",
    "#48D1CC",
    "#40E0D0",
    "#F0FFFF",
    "#E0FFFF",
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


