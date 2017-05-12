
$(".carousel slide").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log("Swipe");
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

});