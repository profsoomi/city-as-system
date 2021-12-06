var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
}

    $('.aesthetics-header').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.1,
    });

      $(function(){  // $(document).ready shorthand
        $('.monster').fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.clothing-1').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'left':'260px', 'opacity': '1'},2500);
                          
                  }
                  
              }); 
          
          });
          
      });

      $(function(){  // $(document).ready shorthand
        $('.monster').fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.clothing-2').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'left':'200px', 'opacity': '1'},2500);
                          
                  }
                  
              }); 
          
          });
          
      });

      $(function(){  // $(document).ready shorthand
        $('.monster').fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.clothing-3').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'right':'10px', 'opacity': '1'},2500);
                          
                  }
                  
              }); 
          
          });
          
      });


      $(function(){  // $(document).ready shorthand
        $('.monster').fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.clothing-4').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'right':'10px', 'opacity': '1'},2500);
                          
                  }
                  
              }); 
          
          });
          
      });