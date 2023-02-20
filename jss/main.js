window.onload=function(){
    var slides=document.querySelectorAll(".carrusel-elemento");
    var foto=0;
    mostrarSlides();
    function mostrarSlides(){
      for(var i=0;i<slides.length;i++){
        slides[i].style.display="none";
      }
      foto++;
      if(foto>slides.length){
        foto=1;
      }
      slides[foto-1].style.display="block";
      setTimeout(mostrarSlides,4000);
    }
  };