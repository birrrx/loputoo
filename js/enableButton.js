/**
 * Created by Birgit on 11.05.2017.
 */

$(document).ready(function() {

    $('#kinnitusNupp').click(function(){
        console.log("Klikk!")
        $("#tulenJargi").removeClass('disabled');
        $("#telliKoju").text("Kahjuks on hetkel kõik autod sõidus!");


    });

});