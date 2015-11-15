$(document).ready(function(){
    (function($){
        jQuery.fn.iosCheckers = function(){
            var make = function(){
                $(this).each(function(index,elem){
                    var elem = $(elem);
                    var wrapper = $('<div>');
                    var inp = $('<input type="hidden" value="0">');
                        if(elem.attr("id")){
                            inp.attr("id",elem.attr("id"));}
                        if(elem.attr("name")){
                            inp.attr("name",elem.attr("name"));}
                    var check = $('<div>');
                        check.attr('class','unchecked-checkbox');

                    wrapper.append(check);
                    wrapper.append(inp);
                                
                    check.click(function(event){
                        if($(this).attr("class")=="checked-checkbox"){
                            $(this).attr("class","unchecked-checkbox");
                                inp.attr("value",0);
                        }else{
                            $(this).attr("class","checked-checkbox");
                                inp.attr("value",1);
                        }
                    });
                    $(elem).replaceWith(wrapper);
                });
        };
        return this.each(make); 
        // в итоге, метод responsiveBlock вернет текущий объект jQuery обратно
    };  
    })(jQuery);
    
    $("input[type=checkbox]").iosCheckers();
    //aaaaaaaa

});





