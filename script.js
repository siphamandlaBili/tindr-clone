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

// pop up

let opButton = document.querySelectorAll('.log1');
let viewContent = document.querySelector('.overlay-pop')
let close = document.querySelector('.close')

viewContent.addEventListener('click', function(){
    viewContent.classList.remove('open-pop')
})

opButton.forEach(function(draw){
 close.addEventListener('click', function(){
    viewContent.classList.remove('open-pop')
 })   
 draw.addEventListener('click', function(){
    viewContent.classList.add('open-pop')
 })
})