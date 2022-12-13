import Track from "../Track/Track";

export default function Queue({ queue }) {
  if (queue.error !== undefined) {
    return <div></div>
  }
  return (
    <div className="queue">
      {queue.map(track => <Track key={track.index} track={track}/>)}
    </div>
  )
}