jQuery(document).ready(function(){
    // header-sub-menu hover effect
    $('#header-sub-menu ul li:not(.name)').hover(
        function(){
            if(screen.width > 960) {
                $(this).css('background', '#DBDBE0');
            }else {
                $(this).css('background', '#2C2C30');
            }
            // console.log('in');
        }, 
        function(){
            if(screen.width > 960) {
                $(this).css('background', '#E9E9ED');
            }else {
                $(this).css('background', 'inherit');
            }
            // console.log('out');
        }
    );
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

// --------------------------------------------------------
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
// ------------close popin and slide down------------
    if ($(document).find('.popin').length != 0) {
        if($(document).find('.popin.slide-down').length == 0) {
            $('.js-close').click(function(){
                $('.popin').remove();
                $('.disable').remove();
                // console.log('no slide down close');
            });
        }
        else {
            
            $('#show-popin').click(function(){
                $('.disable.slide-down').slideDown();
                $('.popin.slide-down').slideDown();
                // console.log('slide down');
            });
            // Close popin slide down way
            $('.popin.slide-down .js-close').click(function(){
                $('.popin.slide-down').css('display', 'none');
                $('.disable.slide-down').css('display', 'none');
                // console.log('slide down close');
            })
        }
    }
// ------------------------------------------------
    // Popin Vertical center of one element in the left part of the page.
    if($('.popin .left div:only-child')){
        leftHeight = $('.popin .left div:only-child').parent().outerHeight();
        divHeight = $('.popin .left div:only-child').outerHeight();

        marginTop = (leftHeight - divHeight) / 2;

        $('.popin .left div:only-child').css('margin-top', marginTop);

    }

// ------------Checkboxes and Radios------------
// align radio and checkboxes if there are more than 2 éléments
    $('.row-checkbox input:nth-child(4), .row-radio input:nth-child(4)').nextAll('input').addClass('indent');

    // sync real checkbox and radios with their fake
    
    $('input[type=checkbox], input[type=radio]').each(function(i) {
        if($(this).is(':checked')) {
            $(this).next('span').addClass('checked');
            // console.log($(this).val());
        }
        if(!$(this).is(':checked')) {
            if($(this).next('span').hasClass('checked')) {
                $(this).next('span').removeClass('checked');
            }
        }
    });

    // onclick event on checkboxes
    $('.checkbox span').click(function() {
        if($(this).hasClass('checked')) {
            $(this).removeClass('checked');
            $(this).prev('input[type=checkbox]').prop("checked", false);
            // console.log('uncheck');
        }else {
            $(this).addClass('checked');
            $(this).prev('input[type=checkbox]').prop("checked", true);
            // console.log('check');
        }
    });
    
    $('.radio span').click(function() {
        var radioName = $(this).prev('input[type=radio]').attr('name');
        if(!$(this).prev('input[type=radio]').is(':checked')) {
            $('input[name=' + radioName + ']').prop('checked', false);
            $('input[name=' + radioName + ']').next('span').removeClass('checked');
            $(this).prev('input[type=radio]').prop("checked", true);
            $(this).addClass('checked');
        }
        if($(this).prev('input[type=radio]').prop("checked", true)) {
        }
        // console.log($(this).prev('input[type=radio]').attr('name'));
    });

// ------------------------------------------------
// Call request page
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
    function checkTelNow(){
        if($('span.tel.now').hasClass("checked"))
        {
            // console.log('checkTelNow');
            $('.tel.now.message').slideDown(300);
            $('.call input[type=radio]:nth-child(odd)').css('margin-top', '50px');
        }
        else {
            $('.tel.now.message').slideUp(300);
            $('.call input[type=radio]:nth-child(odd)').css('margin-top', '20px');
        }
    }
    function checkTelLater() {
        // console.log('checkTelLater');
        if($('span.tel.later').hasClass("checked"))
        {
            $('section.date-time').slideDown(300);
        }
        else {
            $('section.date-time').slideUp(300);
        }
    }
    checkTelNow();
    checkTelLater();
    $('span.tel.now').click(function(){
        checkTelNow();
        checkTelLater();
    });
    // callback later radio button
    $('span.tel.later').click(function(){
        checkTelLater();
        checkTelNow();
    });

    // Touch to call us
    if($(window).width() < 960) {
        $('.touch-to-call').attr('href', 'tel:0970818283');
    }
// --------------------------------------------
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
// If no nav (page connexion) we must increase top for the sub header

    
    
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
        if(!$('header nav').length) {
            $('#header-sub-menu').css('top', '91px');
        }
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
    function move_ico_top () {
        $('div.ico').prependTo('main .container');

        // calc of left margin for logo
        // var marginLeft = ($(document).width() / 2) - 120;
        // $('header .content .logo').resize().css('margin-left', marginLeft);
        }

    if($(document).width() < 920)
    {
        move_ico_top();
    }

    // set min width to 640 for mobile devices.
    if(/mobile/i.test(navigator.userAgent)){
        $('body,header,main,aside,footer').css('min-width', '640px');
    }
// alert(navigator.userAgent);
    // phones resolutions
    var viewport = $('meta[name="viewport"]');
    if (!/iPhone/i.test(navigator.userAgent) || screen.width < 640) {
        if(window.matchMedia("(orientation: portrait)").matches) {
            viewport.attr("content", "initial-scale=0.5, width=device-width, user-scalable = yes");
            window.addEventListener("orientationchange", function() {
                viewport.attr("content", "initial-scale=1, width=device-width, user-scalable = yes");
            }, false);
        } 
        // if(window.matchMedia("(orientation: landscape)").matches) {
        //     viewport.attr("content", "initial-scale=1, width=device-width, user-scalable = yes");
        //     window.addEventListener("orientationchange", function() {
        //         viewport.attr("content", "initial-scale=0.5, width=device-width, user-scalable = yes");
        // }
    // console.log(screen.width);
    }
// alert(navigator.userAgent);
    if (/iPhone/i.test(navigator.userAgent)){
        if(window.matchMedia("(orientation: portrait)").matches) {
            viewport.attr("content", "initial-scale=0.5, width=device-width, user-scalable = yes");
            window.addEventListener("orientationchange", function() {
                viewport.attr("content", "initial-scale=1, width=device-width, user-scalable = yes");
            }, false);
        }
    }
    if(/iPad/i.test(navigator.userAgent)){
        $('body,header,main,aside,footer').css('max-width', '960px');
        if(window.matchMedia("(orientation: portrait)").matches) {
            viewport.attr("content", "initial-scale=1, user-scalable = yes");
            // window.addEventListener("orientationchange", function() {
            //     viewport.attr("content", "initial-scale=2 width=device-width, user-scalable = yes");
            //     console.log(viewport.attr("content"));
            // }, false);
        }
    }


    // change top margin only on mobile devices
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if(!$('header nav').length > 0) {
            $('header .content #header-sub-menu').css('top', '91px');
        }
    }
});//End main function all()

// jQuery(document).ready(all());
