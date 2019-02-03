! function(e) {
    e.fn.initprogress = function(a) {
        return a = e.extend(defaults = {
            color_type: "",
            speed: 1e3,
            color: "blue",
            barsize: "",
            padding: "small-padding",
            interactive: !1
        }, a || {}), this.each(function() {
            var a = e(this).find(".long-progress").attr("data-width");
            e(this).find(".long-progress").find(".title-label-percent").text();
            if (a >= 0 && a <= 30) {
                defaults.color = "light-danger";
            } else if (a > 20 && a <= 50) {
                defaults.color = "light-warning";
            } else if (a > 50 && a <= 75) {
                defaults.color = "light-primary";
            } else {
                defaults.color = "light-success";
            }
            e(this)
                .addClass("progressbar")
                .addClass(defaults.theme)
                .addClass(defaults.barsize)
                .addClass(defaults.padding),
            e(this).find(".long-progress")
                .addClass(defaults.color)
                .addClass(defaults.color_type), e(this).find(".long-progress").animate({
                    width: a + "%"
            }, defaults.speed).find(".title-label-percent").prop("Counter", 0).animate({
                Counter: a
            }, {
                duration: defaults.speed,
                easing: "swing",
                step: function(a) {
                    e(this).text(this.Counter.toFixed(0) + "%")
                }
            })
        })
    }
}(jQuery);