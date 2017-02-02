$(document).ready(function () {
    //Aqui va todo el codigo Javascript y jQuery
    $("header#home nav ul li a.menu").click(function () {
        var link = $(this).attr("href");
        var destination = $(link), y = 0, offset;
        if (link != "" && destination.length) {
            offset = destination.offset();
            if (offset != null) {
                y = offset.top;
                scroll(y);
            }
        }
        
        return false;
    });
});

function scroll(y) {
    $("html,body").animate({scrollTop: y}, 2500);
}