import "./SearchTrack.css";
import buttonIcon from "./button.jpeg";
import axios from "axios";

function toMinutes(duration_ms) {
  let minutes = Math.floor(duration_ms/60000);
  let seconds = (duration_ms%60000) + "";

  while (seconds.length < 5) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds.slice(0,2);
}

function artistString(artists) {
  let str = artists[0];
  for (let i = 1; i < artists.length; i++) {
    str = str + ", " + artists[i];
  }
  return str;
}

function addToQueue(trackID) {
    axios.get("/queue/add", { 
      params: { track: trackID }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function Track({ track }) {
  return (
    <div className="searchTrack">
      <img className="icon" src={ track.image } alt=''/>
      <div className="container">
        <div className="name">{ track.name }</div>
        <div className="artists">{ artistString(track.artists) }</div>
      </div>
      <div className="duration">{ toMinutes(track.duration) }</div>
      <img className="addButton" onClick={() => {addToQueue(track.id)}} src={buttonIcon} alt=""/>
    </div>
  )
}