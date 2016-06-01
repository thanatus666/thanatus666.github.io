$(function () {
    $('.button').click(function () {
        $('.google').remove();
        $('img').remove();
        $('#box').html('');
        var QUERY = $('.search').val();
        var API_KEY = '2642645-cf42d869fc25a73a97a804db7';
        var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + QUERY;
        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function (i, hit) {
                    console.log(hit.webformatURL);
                    if (i < 6) {
                        $("<img/>").attr("src", hit.webformatURL).appendTo("#box");
                    }
                });
            else
                $('#box').html('Ничего не найдено');
                console.log('No hits');
        });

    });

    $('body').keypress(function (e) {
        if (e.which == 13) {
            $('.button').click();
        }
    });
});