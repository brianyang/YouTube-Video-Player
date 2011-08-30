
    
<h2>Create player holder and chrome</h2>
<pre>
    <div id="player"></div>
    <div id="player-controls">
        <ul>
            <li class=play><a href="#">play</a></li>
            <li class="pause"><a href="#">pause</a></li>
        </ul>
    </div>
</pre>

<h2>create video play indicator and debug info</h2>
<pre>
  <div id="videoInfo">
        <p>Current Time: <span id="videoCurrentTime">0</span> | Duration: <span id="videoDuration">0</span></p>

        <p>Bytes Total: <span id="bytesTotal">0</span> | Start Bytes: <span id="startBytes">0</span> | Bytes Loaded: <span id="bytesLoaded">0</span></p>

      <p class=seek-demo><a href="#">jump to 2:00</a></p>
      <p class=seek-demo2><a href="#">jump to 4:00</a></p>

      <div id=seek_video_slider>
          <div id="knob"></div>
      </div>
  </div>
</pre>
  </body>
</html>
