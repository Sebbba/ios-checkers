(function ($) {
    jQuery.fn.iosCheckers = function () {
        var make = function () {
            $(this).each(function (index, elem) {
                var $elem = $(elem);

                var $inp = $('<input type="hidden" value="0">');
                if ($elem.attr("name")) {
                    $inp.attr("name", $elem.attr("name"));
                }

                var $check = $('<div>');
                $check.attr('class', 'checkbox');

                var elem_attr = $elem.prop("attributes");
                $.each(elem_attr, function () {
                    if (this.name !== "id" || this.name !== "type") {
                        $check.attr(this.name, this.value);
                    }
                });
                $check.append($inp);

                $check.on('click', function (event) {
                    var $checker = $(this);
                    if ($checker.hasClass('checked')) {
                        $checker.removeClass('checked');
                        $inp.attr("value", 0);
                    } else {
                        $checker.addClass('checked');
                        $inp.attr("value", 1);
                    }
                    $checker.trigger('change', $inp.val());
                });
                $(this).replaceWith($check);
            });
        };
        return this.each(make);
    };
})(jQuery);
