$(function main() {

    $('.thumbnail').attr('aria-pressed', false);
    $('.hero img').attr('aria-pressed', true);

    $('.thumbnails').on('click', 'a', function(event) {
        const clickedCat = $(event.currentTarget).find('img');
        $('.hero img').attr('src', clickedCat[0].src);
        $('.hero img').attr('alt', clickedCat[0].alt);
    });
});