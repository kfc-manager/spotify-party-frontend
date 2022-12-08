import { useEffect, useState } from "react";
import axios from "axios";
import Queue from "./components/Queue/Queue";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Seach";

function queueIndexing(queue) {
  for (let i = 0; i < queue.length; i++) {
    queue[i].index = i;
  }
  return queue;
}

export default function App() {

  const [queue, setQueue] = useState([]);

  useEffect(() => {
  axios.get("/queue/get")
  .then((response) => setQueue(queueIndexing(response.data)))
  .catch((error) => {
      //TODO handle error
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <ul className="test">
            <Link className="queue" to="/">Queue</Link>
            <Link className="search" to="/addtrack">Add Song</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Queue queue={queue}/>}/>
        <Route path="/addtrack" element={<Search/>}/>
      </Routes>
    </div>);

}
