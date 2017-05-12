/**
 * Created by Birgit on 7.05.2017.
 */


$(document).ready(function() {

    $('a').click(function(){
       var content=$(this).attr('atr');
       console.log("Content: "+ content);

       $("#"+content).show().siblings("div").hide();

    });

});

