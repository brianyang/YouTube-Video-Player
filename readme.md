
    
<h2>Create player holder and chrome</h2>
<pre>
  <code>
    <div id="player"></div>
    <div id="player-controls">
        <ul>
            <li class=play><a href="#">play</a></li>
            <li class="pause"><a href="#">pause</a></li>
        </ul>
    </div>
  </code>
</pre>

<h2>create video play indicator and debug info</h2>
<pre>
  <code>
  <div id="videoInfo">
        <p>Current Time: <span id="videoCurrentTime">0</span> | Duration: <span id="videoDuration">0</span></p>

        <p>Bytes Total: <span id="bytesTotal">0</span> | Start Bytes: <span id="startBytes">0</span> | Bytes Loaded: <span id="bytesLoaded">0</span></p>

      <p class=seek-demo><a href="#">jump to 2:00</a></p>
      <p class=seek-demo2><a href="#">jump to 4:00</a></p>

      <div id=seek_video_slider>
          <div id="knob"></div>
      </div>
  </div>
  </code>
</pre>
  </body>
</html>

Chromeless YouTube Video Player
=============

Implementing a YouTube video player with custom controls

Features
-------

* support for mobile browsers and tablets


### Commands


    <div id="player"></div>

Here we create an element to house the video we are playing. 

Contributing
------------

1. Fork it.
2. Create a branch (`git checkout -b my_markup`)
3. Commit your changes (`git commit -am "added code"`)
4. Push to the branch (`git push origin my_markup`)
5. Create an [Issue][1] with a link to your branch


[r2h]: http://github.com/github/markup/tree/master/lib/github/commands/rest2html
[r2hc]: http://github.com/github/markup/tree/master/lib/github/markups.rb#L13
[1]: http://github.com/github/markup/issues

