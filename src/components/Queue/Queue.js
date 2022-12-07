import './Queue.css';
import Track from '../Track/Track';

export default function Queue({ queue }) {
  return (
    <div className='queue'>
      {queue.map(track => <Track key={track.index} track={track}/>)}
    </div>
  )
}