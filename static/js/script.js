(function (a) {



    var n = a(".quote-wrapper");
    if (n.length > 0) {
        n.owlCarousel({
            loop: true,
            autoplayTimeout: 3500,
            nav: false,
            margin: 30,
            responsive: {
                320: {
                    items: 1
                },
                681: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        })
    }

    new WOW().init();


    var c = a(".right-nav a, .demo a");
    if (c.length > 0) {
        c.on("click", function (d) {
            a(document).off("scroll");
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var t = a(this.hash)
                    , m = a(".navbar").height() - 2;
                t = t.length ? t : a("[name=" + this.hash.slice(1) + "]");
                if (t.length) {
                    a("html,body").animate({
                        scrollTop: t.offset().top - m
                    }, 1000);
                    return false
                }
            }
        })
    }


}
)(jQuery);
