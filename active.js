burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navigation = document.querySelector('.navigation');
namelink = document.querySelector('.name')
burger.addEventListener('click', ()=>
{
    navbar.classList.toggle('exnav');
    navigation.classList.toggle('visibility');
}
)
navigation.addEventListener("click",()=>
{
    navbar.classList.toggle('exnav');
    navigation.classList.toggle('visibility');
})

// Get the container element
var linkcontainer = document.getElementById("container");

// Get all buttons with class="navlink" inside the container
var navlinks = linkcontainer.getElementsByClassName("navlink");

// Loop through the buttons and add the "current" class to the current/clicked link
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current";
  });
}