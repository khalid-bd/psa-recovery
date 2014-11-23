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
    $('.row-checkbox input:nth-child(4), .row-radio input:nth-child(4)').nextAll('input').addClass('indent');

// Call back page
//  tel number section
//  .match(/^0[1-9]([-. ]?[0-9]{2}){4}$/)

    $('input.tel').focusout(function(){
        var num = $(this).val().replace(/ /g, '');
        if(!num.match(/^0[1-9]([-. ]?[0-9]{2}){4}$/))
        {
            $('.call h2.error').css('display', 'block');
            $(this).addClass('i-error');
            $('.tel.error').css('display', 'inline-block');
        }else {
            $('.call h2.error').css('display', 'none');
            $(this).removeClass('i-error');
            $('.tel.error').css('display', 'none');
        }
    });
    // callback now radio button
    $('span.tel.now').click(function(){
        if($(this).hasClass("checked"))
        {
            $('.tel.now.message').slideDown(400);
            $('.call input[type=radio]:nth-child(odd)').css('margin-top', '50px');
        }
        else {
            $('.tel.now.message').slideUp(200);
            $('.call input[type=radio]:nth-child(odd)').css('margin-top', '20px');
        }
    });
    // callback later radio button
    $('span.tel.later').click(function(){
        if($(this).hasClass("checked"))
        {
            $('section.date-time').slideDown(400);
        }
        else {
            $('section.date-time').slideUp(400);
        }
    });

    // Email input error
    
    $('input.mail').focusout(function(){
        if(!$(this).val().replace(/ /g, '').match(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/))
        {
            $(this).addClass('i-error');
            $('.mail.error').slideDown(400);
        }else {
            $(this).removeClass('i-error');
            $('.mail.error').slideUp(200);
        }
    });
    // MDP error at least 3 char
    $('input.mdp').focusout(function(){
        if(!$(this).val().match(/[a-z0-9]{3,}/))
        {
            $(this).addClass('i-error');
            $('.mdp.error').slideDown(400);
        }else {
            $(this).removeClass('i-error');
            $('.mdp.error').slideUp(200);
        }
    });
// Carousel
    $('.carousel').slick({
            dots: true,
            autoplay: true,
            draggable: true,
            slidesToShow: 4,
            slidesToScroll: 4,
    });
});//End annonymous function