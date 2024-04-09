import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const AthkariAudioPlayer = ({ source }) => {
  return (
    <div dir="ltr">
      <AudioPlayer
        src={source}
        showJumpControls={false}
        preload="none"
        customVolumeControls={[]}
        customAdditionalControls={[]}
        defaultDuration={"00:00"}
        defaultCurrentTime={"00:00"}
      ></AudioPlayer>
    </div>
  );
};

export default AthkariAudioPlayer;
