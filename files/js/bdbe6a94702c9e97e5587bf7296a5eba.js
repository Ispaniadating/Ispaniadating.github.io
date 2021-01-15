
$(document).ready(function() {
    function scroll() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1700);
    }
    scroll();
    var $btnNext = $('.step-btn');
    var currentStep = 0;
    var $step = $('.step-item');
    $btnNext.not('.submit-btn').on('click', function() {
        currentStep++;

        if(currentStep == 0){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_2.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 1){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_2.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 2){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_2.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 3){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_2.jpg)');
            console.log('muda imagem');
        }

         if(currentStep == 4){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_3.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 5){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_3.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 6){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_4.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 7){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_4.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 8){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_5.jpg)');
            console.log('muda imagem');
        }

        if(currentStep == 9){
            $('.slider-item.item2').css('background-image','url(./index_files/img/bg_5.jpg)');
            console.log('muda imagem');
        }

        $step.hide().eq(currentStep).fadeIn();
        scroll();
    });
    $('.checkbox-item').on('click', function() {
        $(this).toggleClass('checked tr-selected');
    });
    var $loaderOverlay = $('.loader-overlay');
    $('.popup-btn').on('click', function() {
        $(this).closest('.popup-block').hide();
        $('.step-block').fadeIn();
        $('.slider-item').removeClass('visible').next().addClass('visible');
        scroll();

    });
});