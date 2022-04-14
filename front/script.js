function showDiv(id) {
    switch (id) {
        case 1:
            if ($('#div1').hasClass('d-flex')) {
                $('#div1').removeClass('d-flex')
                $('#div1').removeClass("animation")
            }
            else {
                $('#div1').addClass("d-flex").then(
                    $('#div1').addClass("animation")
                )
            }
            break;
        case 2:
            if ($('#div2').hasClass('d-flex')) {
                $('#div2').removeClass('d-flex')
                $('#div2').removeClass("animation")
            }
            else {
                $('#div2').addClass("d-flex").then(
                    $('#div2').addClass("animation")
                )
            }
            break;
        case 3:
            if ($('#div3').hasClass('d-flex')) {
                $('#div3').removeClass('d-flex')
                $('#div3').removeClass("animation")
            }
            else {
                $('#div3').addClass("d-flex").then(
                    $('#div3').addClass("animation")
                )
            }
            break;
        case 4:
            if ($('#div4').hasClass('d-flex')) {
                $('#div4').removeClass('d-flex')
                $('#div4').removeClass("animation")
            }
            else {
                $('#div4').addClass("d-flex").then(
                    $('#div4').addClass("animation")
                )
            }
    }
}

function showVideo(id) {
    switch (id) {
        case 1:
            document.getElementById("video").src = "https://www.youtube.com/embed/Ds1n6aHchRU";
            break;
        case 2:
            document.getElementById("video").src = "https://www.youtube.com/embed/JLlTo3SwxJE";
            break;
        case 3:
            document.getElementById("video").src = "https://www.youtube.com/embed/8dPpZsC6Vg8";
            break;
        case 4:
            document.getElementById("video").src = "https://www.youtube.com/embed/DK1SZOpz2W8";
            break;
        case 5:
            document.getElementById("video").src = "https://www.youtube.com/embed/r11FflkQqJs";
            break;
        case 6:
            document.getElementById("video").src = "https://www.youtube.com/embed/vwbegraDXD8";
            break;
        case 7:
            document.getElementById("video").src = "https://www.youtube.com/embed/wUA5mkosxmU";
            break;
        case 8:
            document.getElementById("video").src = "https://www.youtube.com/embed/ipHuSfOYhwA";
    }
}