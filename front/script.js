function showDiv(id) {
    switch (id) {
        case 1:
            if($('#div1').hasClass('display-flex')){$('#div1').removeClass('display-flex')}
            else{$('#div1').addClass("display-flex");}
            break;
        case 2:
            if($('#div2').hasClass('display-flex')){$('#div2').removeClass('display-flex')}
            else{$('#div2').addClass("display-flex");}
            break;
        case 3:
            if($('#div3').hasClass('display-flex')){$('#div3').removeClass('display-flex')}
            else{$('#div3').addClass("display-flex");}
            break;
        case 4:
            if($('#div4').hasClass('display-flex')){$('#div4').removeClass('display-flex')}
            else{$('#div4').addClass("display-flex");}
    }
}