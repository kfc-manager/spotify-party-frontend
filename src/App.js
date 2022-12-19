import { Link, Route, Routes } from "react-router-dom";
import Queue from "./components/Queue/Queue";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import "./App.css";


export default function App() {
  return (<div>
  <nav className="navbar">
    <ul className="list">
        <Link className="queue" to="/queue">Queue</Link>
        <Link className="search" to="/search">Add Song</Link>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/queue" element={<Queue/>}/>
    <Route path="/search" element={<Search/>}/>
  </Routes>
</div>);
}
