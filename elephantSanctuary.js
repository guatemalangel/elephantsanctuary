window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
}

// Start of adoptElephant section  
function toggleAdoptDropdown(dropdownId) {
    console.log("im here")
    var i;
    var dropdowns = document.getElementsByClassName("adopt-dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id !== dropdownId && openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    document.getElementById(dropdownId).classList.toggle("show");
}

function selectOption(buttonId, option) {
    var btn = document.getElementById(buttonId);
    var originalQuestion = btn.getAttribute('data-question');
    btn.textContent = originalQuestion + option;
    var dropdowns = document.getElementsByClassName("adopt-dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.adopt-dropbtn')) {
        var dropdowns = document.getElementsByClassName("adopt-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// end of adoptElephant section  