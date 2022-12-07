import { useState, useEffect } from "react";
import axios from "axios";
import Queue from "./components/Queue/Queue";

function queueIndexing(queue) {
  for (let i = 0; i < queue.length; i++) {
    queue[i].index = i;
  }
  return queue;
}

export default function App() {

  const [queue, setQueue] = useState([]);

  useEffect(() => {
    axios.get('/queue/get')
    .then((response) => setQueue(queueIndexing(response.data)))
    .catch((error) => {
       //TODO handle error
      });
  }, []);

  return (
    <Queue queue={queue}/>
  );
}
