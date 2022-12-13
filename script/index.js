const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  }
  });
  
  let a = document.querySelectorAll(".catalog__item");
  let btn = document.querySelector(".catalog__btn-show-more");
  let btnImg = document.querySelector (".btn-show-more__img");
  
  // let r;
  // let xer;
  // for( r = 6; r < a.length ; r++){
  //   xer = a[r];
  //   console.log(xer);
  // };
  // // console.log (xer);

  function elementHidden() {
    for(let i = 6; i < a.length ; i++){
      if ( a[i].style.display == "none" && document.documentElement.clientWidth < 1120 ) {
        a[i].style.display = "block";
        btnImg.style.rotate = "180deg";
        btn.textContent = "Скрыть";
      }
      else if (a[i].style.display == "block" && document.documentElement.clientWidth < 1120 ) {
        a[i].style.display = "none";
        btn.innerHTML = "Показать все";
        btnImg.style.rotate = "none";
      } 
    }
  };

  function elementHidden1120() {
    for(let i = 8; i < a.length ; i++){
      if ( a[i].style.display == "none" && document.documentElement.clientWidth > 1120 ) {
        a[i].style.display = "block";
        btnImg.style.rotate = "180deg";
        btn.textContent = "Скрыть";
      }
      else if (a[i].style.display == "block" && document.documentElement.clientWidth > 1120 ) {
        a[i].style.display = "none";
        btn.innerHTML = "Показать все";
        btnImg.style.rotate = "none";
      } 
    }
  }


  
//     function elementHidden() {
//       for(var i = 0; i < a.length ; i++){ 
//         if ( a[i].style.display == "none" ) {
//           a[i].style.display = "block";
//           btnImg.style.rotate = "180deg";
//           btn.textContent = "Скрыть";
//         }
//         else if (xer.style.display == "block" && document.documentElement.clientWidth < 1120 ) {
//           xer.style.display = "none";
//           btn.innerHTML = "Показать все";
//           btnImg.style.rotate = "none";
//         } 
//         // // else  {
//         //     a[i].style.display = "none";
//         //     btn.innerHTML = "Показать все";
//         //     btnImg.style.rotate = "none";
//         //   // }
//         }
// };


// function asd() {
//   for(var i = 0; i < a.length ; i++){
//     if ( a[i].style.display == "none" ) {
//       a[i].style.display = "block";
//       btnImg.style.rotate = "180deg";
//       btn.textContent = "Скрыть";
//     }
//   }
// }

  
//   function w768(){
//     for(var i = 6; i < a.length ; i++){
//       a[i].style.display = "block";
//       btnImg.style.rotate = "180deg";
//       btn.textContent = "Скрыть";
//     }
//   }
  
//   function w1120(){
//     for(var i = 8; i < a.length ; i++){
//       if (a[i].style.display == "block"){
//       a[i].style.display = "none";
//       btnImg.style.rotate = "180deg";
//       btn.textContent = "Скрыть";
//       }
//     }
//   }

// && document.documentElement.clientWidth < 1119











if(matchMedia) {
  let screen = window.matchMedia("(min-width:1120px)")
  screen.addListener(ekr)
  ekr(screen)
}
function ekr(screen){
  if(screen.matches) {
    for(var i = 6; i < 8 ; i++){
      a[i].style.display = "block"
      }
      for(var i = 8; i < a.length ; i++){
        a[i].style.display = "none"
        }
    console.log ("больше");
    btn.innerHTML = "Показать все";
    btnImg.style.rotate = "none";
  }
  else{
    for(var i = 6; i < a.length ; i++){
          a[i].style.display = "none"
          };
    console.log("меньше");
    btn.innerHTML = "Показать все";
    btnImg.style.rotate = "none";
  }
}