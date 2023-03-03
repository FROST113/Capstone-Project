// jQuery Functions

// Hide/Show function
$(document).ready(function() {
    $("#showHideBtn").click(function() {
       $("#commentList").toggle();
    });
  });
  
  
  // drop-down
  $(document).ready(function() {
    // Hide the dropdown menu by default
    $('.dropdown ul').hide();
    
    // Show/hide the dropdown menu on hover
    $('.dropdown').hover(function() {
      $(this).children('ul').stop(true, true).slideDown(200);
    }, function() {
      $(this).children('ul').stop(true, true).slideUp(200);
    });
  });



//   Fade in on scroll animation

$(document).ready(function() {
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        let position = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200) {
          $(this).addClass('fade-in-animation');
        }
      });
    });
  });


//   chained effect on about button on home page
$(document).ready(function() {
    $("#myBtn")
      .fadeOut(2000)
      .delay(500)
      .fadeIn(2000)
      .delay(500)
      .slideUp(2000)
      .delay(500)
      .slideDown(2000);
  });