const menu = document.querySelector(".menu-icon")
const resNav=document.querySelector("ul")

menu.addEventListener("click", () =>{
    resNav.classList.toggle('open')
});
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
