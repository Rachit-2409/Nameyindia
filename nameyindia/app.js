let menu_btn = document.getElementById('menu_btn');
let menu = document.querySelector('.menu_block');

menu_btn.addEventListener('click', ()=>{
    menu.classList.toggle('active_menu')
    menu_btn.classList.toggle('fa-xmark')
    console.log("hello")
})

let menu_items = Array.from(document.querySelectorAll('.menu_block  nav ul li'));
console.log(menu_items)
menu_items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menu.classList.toggle('active_menu');
        menu_btn.classList.toggle('fa-xmark')
    })
})