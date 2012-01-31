
Chromeless YouTube Video Player
=============

Implementing a Chromeless YouTube video player and custom controls

Features
-------

* support for mobile browsers and tablets


### Holder Element

    <div id="player"></div>

Here we create an element to house the video we are playing.


### Player Controls

    <div id="player-controls">
        <ul>
            <li class=play><a href="#">play</a></li>
            <li class="pause"><a href="#">pause</a></li>
        </ul>
    </div>

Build out elements to define video play controls


### Video Debug Data

     <div id="videoInfo">
        <p>Current Time: <span id="videoCurrentTime">0</span> | Duration: <span id="videoDuration">0</span></p>

        <p>Bytes Total: <span id="bytesTotal">0</span> | Start Bytes: <span id="startBytes">0</span> | Bytes Loaded: <span id="bytesLoaded">0</span></p>

Show video play time and progress meter data

### Seek through video

      <p class=seek-demo><a href="#">jump to 2:00</a></p>
      <p class=seek-demo2><a href="#">jump to 4:00</a></p>

Create links to skip to designated point in video

### Video progress
      <div id=seek_video_slider>
          <div id="knob"></div>
      </div>

Generate video play progress holder

### Load API

      var tag = document.createElement('script');
      tag.src = "http://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

This code loads the IFrame Player API code asynchronously.


### Load iframe

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

This function creates an <iframe> (and YouTube player) after the API code downloads

### Update player info

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

Update player details and show in DOM


### Player control functions

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

The API will call this function when the video player is ready.

### Handle Player States

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


The API calls this function when the player's state changes.




Contributing
------------

1. Fork it.
2. Create a branch (`git checkout -b git@github.com:brianyang/YouTube-Video-Player.git`)
3. Commit your changes (`git commit -am "added code"`)
4. Push to the branch (`git push origin git@github.com:brianyang/YouTube-Video-Player.git`)
5. Create an Issue with a link to your branch

