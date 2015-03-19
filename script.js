$(document).ready(function() {
    
    
   $("#flashing img:gt(0)").hide();
   
   setInterval(function() {
    
    var current = $('#flashing img:visiblie');
   
    var next = current.next() .length ? current.next() : $('flashing img:eq(0)');
    current.fadeOut(1000);
    next.fadeIn(1000);
   
   }, 3000);
});