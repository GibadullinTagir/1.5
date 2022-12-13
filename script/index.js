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