import "./Search.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

export default function Search() {

  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") return;
    let cancel;
    axios.get("/search", { 
      params: { q: query },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then((response) => setTracks(response.data))
    .catch((error) => {
      if (axios.isCancel(error)) return;
      console.log(error);
    });
    return () => cancel();
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  }


  return  <div className="searchContainer">
      <input type="text" placeholder="Search.." onChange={handleChange}/>
      <SearchResult tracks={tracks}/>
  </div> ;
}