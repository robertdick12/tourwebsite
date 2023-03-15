let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

 var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlide: true,  
  autoplay:{
  delay: 7500,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
loop: true,
});

//var img = document.getElementsByClassName("swiper-wrapper");

//var sliding = ['north.jpg','nkrumah-house.jpg','cccastle1.jpg','heritage.jpg','star-house.jpg'];

//let start = 0;

//function slider() {
//  if (start<slider.lenght) {
  //  start=start+1;
    
 // }  else{
   // start=1;
 // }
 // console.log(img);
   // img.innerHTML = "<img src="+slides[Start-1]+">";
//};