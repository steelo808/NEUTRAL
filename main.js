//hamburger menu toggle 
const open = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.toggle');


open.addEventListener('click', ()=>{
    menu.style.display = 'flex';
    open.style.display = 'none';
});

close.addEventListener('click', ()=>{
    menu.style.display = 'none';
    open.style.display = 'block';
});

//image size on click
