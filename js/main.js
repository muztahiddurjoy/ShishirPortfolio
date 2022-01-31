var pre = document.getElementById('loader');
window.addEventListener('load',function(){
    pre.classList.add('diss');
});
AOS.init();
$(document).ready(function(){

    $('.hidden').css('display','none');
  
    $( "#filter button" ).each(function() {
  
      $(this).on("click", function(){
  
           var filter = $(this).attr('class');         
  
        if ( $(this).attr('class') == 'all' ) {
           $('.hidden').contents().appendTo('#posts').hide().show('slow');
           $( "#filter button" ).removeClass('active');
           $(this).addClass('active');
           $("#filter button").attr("disabled", false);
           $(this).attr("disabled", true);
        }
        else {
           $('.post').appendTo('.hidden');
           $('.hidden').contents().appendTo('#posts').hide().show('slow');
           $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
           $( "#filter button" ).removeClass('active');
           $(this).addClass('active');
           $("#filter button").attr("disabled", false);
           $(this).attr("disabled", true);
        };
        
        });
  
    });
  $('#selectAll').click(function(){
   shuffleInstance.filter('');
  });
  $('#mini').click(()=>{
   shuffleInstance.filter('mini');
  });
  });
    

var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});

var btnFil = document.getElementById('filterMama');
btnFil.addEventListener('click',()=>{
shuffleInstance.filter('city');
});