<?php
/**
 * @package     mod_wl_audioplayer
 * @author      Thomas Winterling
 * @email       info@winterling-labs.com
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::_('stylesheet', 'mod_wl_audioplayer/style.css', array('version' => 'auto', 'relative' => true));
JHtml::_('script', 'mod_dd_slider/audiocontrols.js', array('version' => 'auto', 'relative' => true));

?>

<audio id="song">
    <source src="./mp3/test.mp3" type="audio/mp3" />
</audio> <br>
<div id="wl-audioplayer">
    <div class="top">
        <div id="defaultBar" class="defalutBar">
            <div id="progressBar" class="progressBar">
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="image-box">
        </div>
        <div class="userinterface">
            <div class="timeline">
                <div class="timefield">
                    <div class="border">
                        <span id="currentTime">0:00</span>
                        /<span id="fullDuration">0:00</span>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <div id="playButton" class="playbutton">
                    <span>Play</span>
                </div>
                <div id="prev" class="prevbutton">
                    <span>Prev</span>
                </div>
                <div id="next" class="nextbutton">
                    <span>Next</span>
                </div>
                <div id="playlist" class="playlistbutton">
                    <span>Playlist</span>
                </div>
                <div id="muteButton" class="mutebutton">
                    <span>Mute</span>
                </div>
            </div>
            <div id="title" class="titles">
                <div id="titles">
                    <div class="border">
                        <span id="songTitle">Artist - Current Song</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
