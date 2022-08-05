import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Dictionary.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  function listen(event) {
    event.preventDefault();
  }
  return (
    <div className="Phonetic">
      <ReactAudioPlayer src={props.phonetic.audio} onPlay={listen} controls />
      <span className="Text">{props.phonetic.text}</span>
    </div>
  );
}
