var $overlay = $('<div id="overlay"></div>');
var $image = $("<img/>");
var $caption = $("<p></p>")
    
    //Adding the image within the overlay
    $overlay.append($image);
    $overlay.append($caption);
    //Adding the overlay at the end of the body
    $("body").append($overlay);

$("#imageGallery a").click(function(){
    //Preventing the default redirection to the original image.
    event.preventDefault();
    
    //Getting the image 'src' in the href variable.
    var imageLocation = $(this).attr("href");
    
    //Update the overlay with an image.
    $image.attr("src", imageLocation);
    
    //Showing the overlay as it was hidden through CSS.
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

$('#overlay').click(function(){
   $('#overlay').hide(); 
});