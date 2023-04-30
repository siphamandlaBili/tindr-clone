'use strict'

let product = document.querySelector('.hov-pro');
let showPro = document.querySelector(".on-hover");

let safety = document.querySelector('.hov-me');
let showMe = document.querySelector('.safety')

product.addEventListener('mouseover', function(){
    showPro.classList.add('show');
})


product.addEventListener("mouseout", function(){
    showPro.classList.remove('show');
})

showPro.addEventListener("mouseover", function(){
    showPro.classList.add('show');  
})

showPro.addEventListener("mouseout", function(){
    showPro.classList.remove('show');
    
})
// safety
safety.addEventListener('mouseover', function(){
    showMe.classList.add('show');
})

safety.addEventListener("mouseout", function(){
    showMe.classList.remove('show');
})

showMe.addEventListener("mouseover", function(){
    showMe.classList.add('show');  
})

showMe.addEventListener("mouseout", function(){
    showMe.classList.remove('show');
    
})