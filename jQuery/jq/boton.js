var elemento = $('#btnClick');
//var ponerClase = true;

elemento.click(function(){
   elemento.addClass('animate__bounce');
   elemento.css('cursor', 'default');
   setTimeout(function(){
        elemento.removeClass('animate__bounce');
        elemento.css('cursor', 'pointer');
   },2000)
});
