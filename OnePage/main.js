/* 
   Template Name: {{ #  }}
    Template URL: {{ # }}
    Description: {{ # }}
    Author: DesignToCodes
    Author URL: https://www.designtocodes.com
    Text Domain: {{ CSume }}
*/

    $(window).on("load",function(){
          $(function(){
            $('#d2c_main_nav').on('activate.bs.scrollspy')
         });
        // Preloader Js
        $("#preloader").fadeOut(1500);

        // Silk Carousel slick
        function slickCarousel() {

            // Testimonial Slider
            $('.d2c_testimonial_slider').slick({
                slidesToShow: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-img',
                autoplay: true
            });
            // Testimonial Slider
            $('.slider-img').slick({
              slidesToShow: 8,
              asNavFor: '.d2c_testimonial_slider',
              dots: false,
              arrows: false,
            //   centerMode: true,
              focusOnSelect: true,
            });

        }
        slickCarousel();  

        // bottom to top scroll js
        function scrollToTop(){
            //Get the button
            var mybutton = document.getElementById("scrollToTopBtn");
        
            // When the user scrolls down 150px from the top of the document, show the button
            window.onscroll = function () { scrollFunction() };
        
            function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
            }
        
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }
            document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);
        }scrollToTop();

        // Navbar Toggle Icon
        function navbar_toggler(){
            $('.navbar-toggler[data-bs-toggle=collapse]').click(function () {
                if( $(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars') ) {

                    $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-bars");
                    $(".navbar-toggler[data-bs-toggle=collapse] i").addClass("fa-times");
                    $('.navbar-nav ').addClass('show');
                }
                else {      
                    $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
                    $(".navbar-toggler[data-bs-toggle=collapse] i").addClass("fa-bars");
                }
            });
        }
        navbar_toggler();
        // Navbar Clone In Mobile Device
        function navClone(){
            $('.js-clone-nav').each(function(){
                var $this = $(this);
                $this.clone().attr('class', 'navbar-nav').appendTo('.d2c_mobile_view_body');
            });

            $('.d2c_mobile_view .nav-link').click(function(){
                $(".nav-link").removeClass("active");
                $('.d2c_mobile_view').removeClass('show');
                $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
                $(".navbar-toggler[data-bs-toggle=collapse] i").addClass("fa-bars");
                $(this).toggleClass('active');
            });
        }
        navClone();
    });

    // Form Validation js
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('form_validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
    })();


    // counter js
    $(function () {
        let visibilityIds = ['#counters_1']; 
        let counterClass = '.count';
        let defaultSpeed = 3000;

        $(window).on('scroll', function () {
            getVisibilityStatus();
        });
        getVisibilityStatus();

        function getVisibilityStatus() {
            elValFromTop = [];
            var windowHeight = $(window).height(),
                windowScrollValFromTop = $(this).scrollTop();

            visibilityIds.forEach(function (item, index) {
                try {
                    elValFromTop[index] = Math.ceil($(item).offset().top);
                } catch (err) {
                    return;
                }
                if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                    counter_init(item);
                }
            });
        }

        function counter_init(groupId) {
            let num, speed, direction, index = 0;
            $(counterClass).each(function () {
                num = $(this).attr('data-TargetNum');
                speed = $(this).attr('data-Speed');
                direction = $(this).attr('data-Direction');
                easing = $(this).attr('data-Easing');
                if (speed == undefined) speed = defaultSpeed;
                $(this).addClass('c_' + index);
                doCount(num, index, speed, groupId, direction, easing);
                index++;
            });
        }

        function doCount(num, index, speed, groupClass, direction, easing) {
            let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
            if(easing == undefined) easing = "swing";
            $(className).animate({
                num
            }, {
                duration: +speed,
                easing: easing,
                step: function (now) {
                    if (direction == 'reverse') {
                        $(this).text(num - Math.floor(now));
                    } else {
                        $(this).text(Math.floor(now));
                    }
                },
                complete: doCount
            });
        }
    });

    $(document).ready(function() { 
        $(".d2c_logo_wrapper").on("mouseenter",(e)=>{   
            IMAGE_URL = $(e.target).children().attr("src").replace('.png','_hover.png');
            $(e.target).children().attr("src",IMAGE_URL);  
        })
        
        $(".d2c_logo_wrapper").on("mouseleave",(e)=>{
                IMAGE_URL = $(e.target).children().attr("src").replace('_hover.png','.png');
                $(e.target).children().attr("src",IMAGE_URL);
        })
    });


/* 
   Template Name: {{ #  }}
    Template URL: {{ # }}
    Description: {{ # }}
    Author: DesignToCodes
    Author URL: https://www.designtocodes.com
    Text Domain: {{ CSume }}
*/