$(document).ready(function () {

    /* Audioplayer */

    var song = document.getElementById('song');
    var playbutton = document.getElementById('playButton');
    var mutebutton = document.getElementById('muteButton');

    var duration = document.getElementById('fullDuration');
    var currentTime = document.getElementById('currentTime');

    /* Progressbar */
    var barsize = 800;
    var defaultBar = document.getElementById('defaultBar');
    var progressBar = document.getElementById('progressBar');

    playbutton.addEventListener('click',playAndPause,false);
    mutebutton.addEventListener('click',soundOnOff,false);
    defaultBar.addEventListener('click',progressClickBar,false);

    function playAndPause() {
        if(!song.paused && !song.ended){
            song.pause();
            window.clearInterval(animate());

        }else {
            song.play();
            setInterval(animate,0);
        }
    }

    function soundOnOff() {
        if(song.muted === true){
            song.muted = false;
        }else {
            song.muted = true;
        }
    }

    function animate() {
        if(!song.ended){
            var playedMinutes = parseInt(song.currentTime/60);
            var playedSeconds = parseInt(song.currentTime%60);

            $('#playButton').on('click',function () {

                saveTime = playedMinutes + ':' + playedSeconds;

            });

            currentTime.innerHTML = playedMinutes + ':' + playedSeconds;

            if (playedSeconds <= 9){
                currentTime.innerHTML = playedMinutes + ':' + '0'  + playedSeconds;
            }

            var minutes = parseInt(song.duration/60);
            var seconds = parseInt(song.duration%60);

            duration.innerHTML = minutes + ':' + seconds;

            /* Progressbar */
            var size = parseInt(song.currentTime*barsize/song.duration);
            progressBar.style.width = size + 'px';

        }else {
            currentTime.innerHTML = 0.00;
            play.style.backgroundImage = 'url(../images/play.png)';
            setInterval(animate,0);
        }

    }

    function progressClickBar(e) {
        if(!song.ended){
            var mouseX =  e.pageX - defaultBar.offsetLeft;
            var newtime = mouseX*song.duration/barsize;
            song.currentTime = newtime;
            progressBar.style.width = mouseX + 'px';
        }
    }

    /* Playlist */
    $('#playList').on('click',function () {

        $('#wl-audioplayer ul').css('display','block');

    });

    /* Control */

    function autoplay() {

        aktive = $('.aktive');

        if(aktive.next().hasClass('song')){
            next_aktive = aktive.next();
        }else {
            next_aktive = $('.song').first();
        }

        aktive.removeClass('aktive');
        next_aktive.addClass('aktive');

        if(next_aktive.hasClass('aktive')){
            aktive.removeAttr('id','currentSong');
            next_aktive.attr('id','currentSong');
        }


        /* Show Song Title */
        currentSong = document.getElementById('currentSong');
        songTitle = currentSong.textContent;
        output = document.getElementById('songTitle').textContent = songTitle;


        /* Song change */
        link = $('ul li#currentSong a').attr('href');
        output = $('#song')[0].src = link;

        setTimeout(function () {
            autoplay();
        },5000);

    }


    /* autoplay(); */

    /* Next Song */

    $('#next').on('click',function () {

        aktive = $('.aktive');

        if(aktive.next().hasClass('song')){
            next_aktive = aktive.next();
        }else {
            next_aktive = $('.song').first();
        }

        aktive.removeClass('aktive');
        next_aktive.addClass('aktive');

        if(next_aktive.hasClass('aktive')){
            aktive.removeAttr('id','currentSong');
            next_aktive.attr('id','currentSong');
        }

        /* Show Song Title */
        currentSong = document.getElementById('currentSong');
        songTitle = currentSong.textContent;
        output = document.getElementById('songTitle').textContent = songTitle;

        /* Song change */
        link = $('ul li#currentSong a').attr('href');
        output = $('#song')[0].src = link;


    });

    /* prev Song */

    $('#prev').on('click',function () {

        aktive = $('.aktive');

        if(aktive.prev().hasClass('song')){
            next_aktive = aktive.prev();
        }else {
            next_aktive = $('.song').last();
        }

        aktive.removeClass('aktive');
        next_aktive.addClass('aktive');

        if(next_aktive.hasClass('aktive')){
            aktive.removeAttr('id','currentSong');
            next_aktive.attr('id','currentSong');
        }

        /* Show Song Title */
        currentSong = document.getElementById('currentSong');
        songTitle = currentSong.textContent;
        output = document.getElementById('songTitle').textContent = songTitle;

        /* Song change */
        link = $('ul li#currentSong a').attr('href');
        output = $('#song')[0].src = link;

    });




});