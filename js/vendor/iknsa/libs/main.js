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
            $(this).addClass( "active" );
        }).stop()
        .mouseout(function() {
            var classe = $(this).removeClass("active");
        }).stop();
// ------------ End footer language change -----------------------
// 
// Icon Links toggle title background change
    $(".ico-links ul li")
        .hover(function() {
            // console.log(this);
            $('span', this).addClass( "active" );
        }).stop()
        .mouseout(function() {
            $('span', this).removeClass("active");
        }).stop();
// ------------ End footer language change -----------------------
// 
// ------------close popin------------
    $('.js-close').click(function(){
        $('.popin').remove();
        $('.disable').remove();
    })
// ------------------------------------------------
// 
// ------------Checkboxes------------
    $('.checkbox span, .radio span').click(function() {
        if($(this).prev('input').prop("checked")) 
        {
            $(this).prev('input').prop("checked", false);
            $(this).removeClass('checked');
        }else {
            $(this).prev('input').prop("checked", true);
            $(this).addClass('checked');
        }
    });
    $('.row-checkbox input:nth-child(4)').nextAll('input').addClass('indent');
});//End annonymous function
