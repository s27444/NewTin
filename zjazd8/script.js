$(document).ready(function () {
    $.getJSON("https://jsonplaceholder.typicode.com/albums", function (albums) {
        $.each(albums, function (i, album) {
            $(".gallery").append(`<a href='#' data-album-id='${album.id}'><img src='https://picsum.photos/200?random=${album.id}' alt='${album.title}'></a>`);
        });

        $(".gallery a").click(function (e) {
            e.preventDefault();
            var albumId = $(this).data("album-id");

            $.getJSON(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, function (photos) {
                $(".gallery").empty();

                $.each(photos, function (i, photo) {
                    $(".gallery").append(`<a href='${photo.url}' data-lightbox='gallery'><img src='${photo.thumbnailUrl}'></a>`);
                });

                lightbox.option({
                    'resizeDuration': 200,
                    'wrapAround': true
                });
            });
        });
    });
});
