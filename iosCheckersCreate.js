(function ($) {
    window.iosCheckersCreator =  function() {};
    
     /**
     * OnClick IOSCheckbox handler
     */
    function iosCheckersOnClickHandler(event) {
        $checker = $(this);
        $inp = $checker.children('input[type=hidden]');
        if( $checker.hasClass('checked') ) {
            $checker.removeClass('checked');
            $inp.attr("value",0);
        }else {
            $checker.addClass('checked');
            $inp.attr("value", 1);
        }
        $checker.trigger('change', $inp.val());
    };
    
    /*
     *   
     * @param {type} jQuerySelector
     * @returns {unresolved}
     */    
    iosCheckersCreator.prototype.render = function(jQuerySelector) {
        var $elems = $(jQuerySelector);
        var self = this;
        //
        var make = function() {
            $elems.each(function(index, elem) {
                var $elem = $(elem);
                self.$check = iosCheckerViewMake($elem);
                //
                // init events
                $elem.replaceWith(self.$check);
            });
        };
                
        /**
         * Checker View
        **/
        function iosCheckerViewMake($elem) {
            //
            var $inp = $('<input type="hidden" value="0" >');
                if( $elem.attr("name") ) {
                    $inp.attr("name",$elem.attr("name") );
                };
            //
            var $check = $('<div>');
                $check.attr('class','checkbox');
            //
            var elem_attr = $elem.prop("attributes");
                $.each(elem_attr, function() {
                    if(this.name !== "id" || this.name !== "type") {
                        $check.attr(this.name, this.value);
                    };
                });
            //
            return $check.append($inp);
        };
        //    
        return $elems.each(make);
    };




    iosCheckersCreator.prototype.initEvents = function() {
        this.$check.on('click', iosCheckersOnClickHandler);
    };

    iosCheckersCreator.prototype.destroy = function() {
        this.$check.off('click', iosCheckersOnClickHandler);
    };

})(jQuery);

