jQuery(document).ready(function(){
// nav icons hover and active. Rename the src by adding -active to the png
    $("nav > ul > li")
        .mouseover(function() { 
            if(!$(this).hasClass('active')){

                var src = $('img', this).attr("src").replace(".png", "-active.png");
                $('img', this).attr("src", src);
            }
        }).stop()
        .mouseout(function() {
            if(!$(this).hasClass('active')){
                var src = $('img', this).attr("src").replace("-active.png", ".png");
                $('img', this).attr("src", src);
            }
        }).stop();

    $("nav > ul > li").each(function(i){
        if($(this).hasClass('active')) {
            var src = $('img', this).attr("src").replace(".png", "-active.png");
            $('img', this).attr("src", src);
        }
    })

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

    // Center li when less than four éléments by applying left margin on the ul
    function icoLinksLeftMargin() {

        ulWidth = $(".ico-links ul").width();
        liWidth = 0;
        $(".ico-links ul li").each(function(i) {
            liWidth += $(this).outerWidth();
        })
        marginLeft = (ulWidth - liWidth) / 2;

        $(".ico-links ul").css('margin-left', marginLeft)
    }

    if($(".ico-links ul").size() < 4 && $(window).width() > 920) {
        icoLinksLeftMargin();
    }

// ------------ End footer language change -----------------------
// 
// ------------close popin------------
    $('.js-close').click(function(){
        $('.popin').remove();
        $('.disable').remove();
    })
// ------------------------------------------------
    // Popin Vertical center of one element in the left part of the page.
    if($('.popin .left div:only-child')){
        leftHeight = $('.popin .left div:only-child').parent().outerHeight();
        divHeight = $('.popin .left div:only-child').outerHeight();

        marginTop = (leftHeight - divHeight) / 2;

        $('.popin .left div:only-child').css('margin-top', marginTop);

    }

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
    
    $('input[type=email]').focusout(function(){
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
    $('input[type=password]').focusout(function(){
        if(!$(this).val().match(/[a-z0-9]{3,}/))
        {
            $(this).addClass('i-error');
            $('.mdp.error').slideDown(400);
        }else {
            $(this).removeClass('i-error');
            $('.mdp.error').slideUp(200);
        }
    });
    // select error
    $('select').each(function(e) {
        $(this).change(function(){
            if($(this).hasClass('i-error')) {
                $(this).removeClass('i-error');
                if($(this).parent().next('.error').css('display', 'block')) {
                    $(this).parent().next('.error').css('display', 'none');
                }
            }
        })
    });
    $('form').submit(function(e){
        $('select').each(function(i){
            if($(this).val() == "default") {
                $(this).addClass('i-error');
                $(this).parent().next('.error').css('display', 'block');
                e.preventDefault();
            }
        });
    });

    
// Carousel
    if($(document).width() > 930)
    {
        $('.carousel').slick({
                dots: true,
                autoplay: true,
                draggable: true,
                slidesToShow: 4,
                slidesToScroll: 4,
        });
    }else {
        $('.carousel').slick({
                dots: true,
                autoplay: true,
                draggable: true,
                slidesToShow: 3,
                slidesToScroll: 3,
        });
    }

    // Responsive
    // Nav toggle
    // 
    // $("nav").prepend("<div id='responsive-nav-icon'></div>");
    // $('nav').addClass('test');
    $('#responsive-nav-icon').click(function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $('nav').slideUp(300);
            $('#header-sub-menu').slideUp(200);
        }else {
            $(this).addClass('active');
            $('#header-sub-menu').slideDown(100).css('display', 'inline-block');
            $('nav').slideDown(400).css('display', 'inline-block');
        }
    });

    // move div.ico from after footer to after header
    function center_logo () {
        $('div.ico').prependTo('main .container');

        // calc of left margin for logo
        var marginLeft = ($(document).width() / 2) - 120;
        $('header .content .logo').resize().css('margin-left', marginLeft);
        }

    if($(document).width() < 920)
    {
        center_logo();
    }

});//End annonymous function