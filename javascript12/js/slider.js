(function( $ ) {
    $.fn.myPlugin = function() {

        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
        var elementsWiev = 3;

        var pixelsOffset = 210;
        var currentLeftValue = 0;

        var elementsCount = elementsList.find('li').length;

        var minimumOffset = -((elementsCount - elementsWiev) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        });

        rightUIEl.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        });
        return this;
    }
})(jQuery);

$('.carousel-arrow-left,.carousel-arrow-right').myPlugin();