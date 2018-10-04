// BACK TO TOP BUTTON
$(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {        
        $('#return-to-top').fadeIn(1000);   
    } else {
        $('#return-to-top').fadeOut(1000);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
// END OF BACK TO TOP BUTTON

// THIS BIT MAKES IT SO THAT I CAN DISPLAY THE TEXTAREA CODE ON NEW LINES WITHOUT AFFECTING THE SPACE PLACEMENT. WITHOUT IT, THE PLACEHOLDER IN THE TEXT AREA WILL NOT SHOW UP

$('textarea').each(function(i) { 
    if ($.trim($(this).text()) == '') 
    $(this).text('').trigger('blur'); 
});



//SMOOTHS OUT THE TRANSITION DOWN TO THE CONTACT FORM
$('#top').click(function() {      // When arrow is clicked
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactcontainer").offset().top
    }, 700);
});