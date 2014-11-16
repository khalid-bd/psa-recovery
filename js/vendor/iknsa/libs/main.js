jQuery(document).ready(function(){
// nav icons hover and active. Rename the src by adding -active to the png
    $("nav > ul > li")
        .mouseover(function() { 
            var src = $('img', this).attr("src").replace(".png", "-active.png");
            $('img', this).attr("src", src);
        }).stop()
        .mouseout(function() {
            var src = $('img', this).attr("src").replace("-active.png", ".png");
            $('img', this).attr("src", src);
        }).stop();
// -------------------END NAV ICONS---------------------
// 
// Toggle footer language change
    $("footer .content .opt .lang")
        .mouseover(function() { 
            var classe = $(this).attr("class").replace("lang", "lang active");
            $(this).attr("class", classe);
        }).stop()
        .mouseout(function() {
            var classe = $(this).attr("class").replace("lang active", "lang");
            $(this).attr("class", classe);
        }).stop();
// ------------ End footer language change -----------------------
});