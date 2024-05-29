const menuButton = document.querySelector(".menu-main")
const body = document.body
const menus = Array.from(document.querySelectorAll(".menu a"))

menuButton.addEventListener("click", ()=>{
body.classList.toggle("active")
})

// menus.forEach(menu =>{
//     menu.addEventListener("click", ()=>{
// body.classList.remove("active")
//     })
// })