function iosCheckersClass() {
    this.render = function(jQuerySelector) {
        var $elems = $(jQuerySelector);
        
        var make = function(){
            $elems.each(function(index,elem) {
                var $elem = $(elem);
                var $inp = $('<input type="hidden" value="0">');
                    if($elem.attr("name")){
                        $inp.attr("name",$elem.attr("name"));}
                var $check = $('<div>');
                    $check.attr('class','checkbox');
                var elem_attr = $elem.prop("attributes");
                    $.each(elem_attr, function() {
                        if(this.name !== "id" || this.name !== "type"){
                            $check.attr(this.name, this.value);
                        }
                    });

                $check.wrap($inp);
                    $check.on('click',function(event) {
                        if($(this).hasClass('checked')){
                            $(this).removeClass('checked');
                            $inp.attr("value",0);
                        }else {
                            $(this).addClass('checked');
                            $inp.attr("value",1);
                        }
                    });
                $(this).replaceWith($check);
                });
        }
        return $elems.each(make);
    }
}


