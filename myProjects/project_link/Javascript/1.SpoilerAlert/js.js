$(".spoiler").hide();
$(".second").hide();
$(".reveal").click(function(){
    $(".reveal").remove();
    $(".first").remove();
    $(".spoiler").show("slow");
    $(".second").show("slow");
});
