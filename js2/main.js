$(document).ready(function(){
$("#carousel1").owlCarousel({
    
items: 5,
loop: true,
 nav: true,
 dots: false,
 
 responsive:{
        0:{
            items:1,
             dots: true,
             nav: false,
        },
        
        768:{
            items:3
           
        },
        992:{
            
        items:5
            
    },
    
    1200:{
    
    items:5
   
    },
 
 }

    

});
    
    


});
