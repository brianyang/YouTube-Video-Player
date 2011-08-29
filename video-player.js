/**
 * Created by JetBrains PhpStorm.
 * Author: Brian Yang
 * http://brianyang.com/
 * Agency: Ogilvy Interactive
 * http://ogilvy.com/
 * Date: 8/29/11 Time: 12:58 PM
 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    ytplayer = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'uu9J0c97fB0',
        playerVars: { 'autoplay': 1, 'controls': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function updateHTML(elmId, value) {
    document.getElementById(elmId).innerHTML = value;
}
function updatePlayerInfo() {
    // Also check that at least one function exists since when IE unloads the
    // page, it will destroy the SWF before clearing the interval.
    if (ytplayer && ytplayer.getDuration) {
        updateHTML("videoDuration", ytplayer.getDuration());
        updateHTML("videoCurrentTime", ytplayer.getCurrentTime());
        updateHTML("bytesTotal", ytplayer.getVideoBytesTotal());
        updateHTML("startBytes", ytplayer.getVideoStartBytes());
        updateHTML("bytesLoaded", ytplayer.getVideoBytesLoaded());

        var sliderWidth = $('#seek_video_slider').width();
        var videoDuration = ytplayer.getDuration();
        var videoCurrent = ytplayer.getCurrentTime();
        var videoSec = videoDuration / sliderWidth;

        var updatedVideoLen = videoCurrent * videoSec * 100;
        $('#knob').css('margin-left', '' + updatedVideoLen + '%');
    }
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
//        event.target.playVideo();

    setInterval(updatePlayerInfo, 250);

    function playVideo() {
        $('#player-controls .play a').live('click', function() {
            event.target.playVideo();
        });
    }

    playVideo();

    function pauseVideo() {
        $('#player-controls .pause a').live('click', function() {
            event.target.pauseVideo();
        })
    }

    pauseVideo();

    function seekDemo() {
        $('.seek-demo a').live('click', function() {
            console.log('foo')
            event.target.seekTo('2')
        });
    }

    seekDemo();
    function seekDemo2() {
        $('.seek-demo2 a').live('click', function() {
            console.log('foo')
            event.target.seekTo('4')
        });
    }

    seekDemo2();


}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    console.log(event);
    console.log(event.target.a.currentTime);

//        if (event.data == YT.PlayerState.PLAYING && !done) {
//          setTimeout(stopVideo, 6000);
//          done = true;
//        }
}
function stopVideo() {
    player.stopVideo();
}