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
