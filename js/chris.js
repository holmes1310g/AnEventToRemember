$(document).ready(function(){
 
  // hide our element on page load
  $('.up').css('opacity', 0);
  $('.down').css('opacity', 0);
    $('.service-box').css('opacity', 0);
 
  $('.down').waypoint(function() {
      $('.down').css('opacity', 1);
      $('.down').addClass('fadeInDown');	  
  }, { offset: '75%' });
  
  
   $('.up').waypoint(function() {
      $('.up').css('opacity', 1);
      $('.up').addClass('fadeInUp');
  }, { offset: '100%' });
  
   $('.service-box').waypoint(function() {
      $('.service-box').css('opacity', 1);
      $('.service-box').addClass('zoomIn');
  }, { offset: '80%' });
  
});