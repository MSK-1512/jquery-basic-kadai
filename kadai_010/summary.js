$(function() {

    $('#change-color').on('click', () =>{
        $('#target').css('color', 'skyblue');
    });
    $('#change-text').on('click', () =>{
        $('#target').text('さようなら！');
    });
    $('#fade-out').on('click', () =>{
        $('#target').fadeOut(2000);
    });
    $('#fade-in').on('click', () =>{
        $('#target').fadeIn();
    });

});