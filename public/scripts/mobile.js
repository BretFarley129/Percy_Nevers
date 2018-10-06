$( document ).ready(function() {
    
    $('audio, video').mediaelementplayer();
    
    // Open navbarSide when button is clicked
    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });

    $('#navbarSideHide').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });

    // Change the music of the audioplayer
    $('#disp').on('click', '#xmas1', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S1.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas2', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S2.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas3', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S3.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas4', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S4.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas5', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/5.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas6', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S6.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers1', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C1.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers2', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C2.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers3', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C3.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers4', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C4.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers5', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C5.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    
});