jQuery(document).ready(function($) {
    "use strict"

    // ------- Scroll Top Back ------- //
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.scrollup');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
    // ------- Scroll Top Back ------- //

    // ---------- Banner Slider Fix ---------- //
    $(".nav-nd-search").sticky({topSpacing: 0});
    // ---------- Banner Slider Fix ---------- //

    // ------- Responsive Menu ------- //
    jQuery(".dropdowns").dropdowns();
    // ------- Responsive Menu ------- //

    // ------- Accomodations Slider ------- //
    jQuery('#main-slider').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000000
    });
    // ------- accomodations-slider ------- //

    // ------- Team Slider ------- //
    jQuery('#team-slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ------- Team Slider ------- //

    // ------- Pricing Plan Slider ------- //
    jQuery('#prcing-slider-2').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ------- Pricing Plan Slider ------- //

    // ------- Pricing Plan Slider ------- //
    jQuery('#prcing-slider-3').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ------- Pricing Plan Slider ------- //

    // ------- Recent Post Slider ------- //
    jQuery('#recent-post-slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ------- Recent Post Slider ------- //

    // ------- Sponsers Slider ------- //
    jQuery('.sponsers-slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 412,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ------- Sponsers Slider ------- //

    // ------- Accomodations Slider ------- //
    jQuery('#accomodations-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000
    });
    // ------- accomodations-slider ------- //

    // ------- Accomodations Slider ------- //
    jQuery('#slider-post').slick({
        dots: false,
        infinite: true,
        speed: 700,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    // ------- accomodations-slider ------- //

    // ------- Instagram Slider ------- //
    jQuery('#instagram-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ------- Instagram Slider ------- //

    // ------- Contact Map ------- // 
    jQuery("#contact-map").gmap3({
        map: {
            options: {
                center: [46.578498, 2.457275],
                zoom: 5,
                scrollwheel: false
            }
        },
        marker: {
            values: [{
                    latLng: [48.8620722, 2.352047],
                    data: "Paris !"
                },
                {
                    address: "86000 Poitiers, France",
                    data: "Poitiers : great city !"
                },
                {
                    address: "66000 Perpignan, France",
                    data: "Perpignan ! GO USAP !",
                    options: {
                        icon: "http://maps.google.com/mapfiles/marker_green.png"
                    }
                }
            ],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(marker, event, context) {
                    var map = jQuery(this).gmap3("get"),
                        infowindow = jQuery(this).gmap3({
                            get: {
                                name: "infowindow"
                            }
                        });
                    if (infowindow) {
                        infowindow.open(map, marker);
                        infowindow.setContent(context.data);
                    } else {
                        jQuery(this).gmap3({
                            infowindow: {
                                anchor: marker,
                                options: {
                                    content: context.data
                                }
                            }
                        });
                    }
                },
                mouseout: function() {
                    var infowindow = jQuery(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (infowindow) {
                        infowindow.close();
                    }
                }
            }
        }
    });
    // ------- Contact Map ------- //

    // ------- Accomodations Slider ------- //
    jQuery('#testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    // ------- accomodations-slider ------- //

    // ------- Accomodations Slider ------- //
    jQuery('#img-slider').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    // ------- accomodations-slider ------- //

    // ------- Time Counter ------- //
    jQuery('#countdown-1').countdown({
        date: '7/14/2016 22:00:00',
        offset: -8352,
        day: 'Day',
        days: 'Days'
    });
    // ------- Time Counter ------- //

    // ---------- Wow Animation ---------- //
    var wow = new WOW({
        boxClass: 'animate',
        animateClass: 'animated',
        offset: 50,
        mobile: false
    });
    wow.init();
    // ---------- Wow Animation ---------- //

    // ---------- Full Screen Video ---------- //
    if (jQuery(".video-container").length != '') {
        jQuery(document).ready(function() {
            // Initiate FitVid.js
            jQuery(".video-container").fitVids();

            // Iframe/player variables
            var iframe = jQuery('#video')[0];
            var player = $f(iframe);

            // Open on play
            jQuery('.play').on('click', function() {
                jQuery('.overlay').css('left', 0)
                jQuery('.overlay').addClass('show')
                player.api("play");
            })

            // Closes on click outside
            jQuery('.overlay').on('click', function() {
                jQuery('.overlay').removeClass('show')
                setTimeout(function() {
                    jQuery('.overlay').css('left', '-100%')
                }, 300);
                a
                player.api("pause");
            })
        });
    }
    // ---------- Full Screen Video ---------- //

    // ---------- On Click Show Address ---------- //
    jQuery("#show-map").on('click', function() {
        jQuery(".address-overlay").toggleClass("show-map");
        jQuery(".map-overlay-holder").toggleClass("overlay-dark");
    });
    // ---------- On Click Show Address ---------- //

    // ------- Mesonary ------- //
    var $container = jQuery('.filter-masonry');
    var $optionSets = jQuery('.option-set');
    var $optionLinks = $optionSets.find('a');

    function doIsotopeFilter() {
        if (jQuery().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function() {
                var selector = jQuery(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            $container.isotope({
                itemSelector: '.masonry-grid',
                filter: isotopeFilter
            });
            $optionLinks.each(function() {
                var $this = jQuery(this);
                var selector = $this.attr('data-filter');
                if (selector == isotopeFilter) {
                    if (!$this.hasClass('selected')) {
                        var $optionSet = $this.parents('.option-set');
                        $optionSet.find('.selected').removeClass('selected');
                        $this.addClass('selected');
                    }
                }
            });
            $optionLinks.on('click', function() {
                var $this = jQuery(this);
                var selector = $this.attr('data-filter');
                $container.isotope({
                    itemSelector: '.masonry-grid',
                    filter: selector
                });
                if (!$this.hasClass('selected')) {
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                }
                return false;
            });
        }
    }
    var isotopeTimer = window.setTimeout(function() {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
    }, 1000);
    jQuery('.simple-masonry').isotope({
        itemSelector: '.simple-masonry-grid'
    });
    // ------- Mesonary ------- // 

    // ------- Auto height function ------- //
    var setElementHeight = function() {
        var width = jQuery(window).width();
        /*if (jQuery('.tc-hero-slider li img') >= height) {*/
        var height = jQuery(window).height();
        jQuery('.fullscreen').css('height', (height));
    }
    //       else {
    //            jQuery('.autoheight').css('min-height', (800));
    //        }
    //};
    jQuery(window).on("resize", function() {
        setElementHeight();
    }).resize();
    // ------- Auto height function ------- //

    // ------- Prety Photo ------- //
    jQuery("a[data-rel]").each(function() {
        jQuery(this).attr("rel", jQuery(this).data("rel"));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
    });
    // ------- Prety Photo ------- //

    // ------- PrettyPhoto Video Popup ------- //
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
    // ------- PrettyPhoto Video Popup ------- //

    // ------- Hover Dir Effect ------- //
    $(' #hover-dir .gallary-figure ').each( function() { $(this).hoverdir({
        hoverDelay : 10
    }); } );
    // ------- Hover Dir Effect ------- //

});