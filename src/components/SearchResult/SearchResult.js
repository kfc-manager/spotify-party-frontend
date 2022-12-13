import SearchTrack from "../SearchTrack/SearchTrack";

export default function SearchResult({ tracks }) {
    if (tracks.error !== undefined) {
        return <div></div>
    }
    return <div>{tracks.map(track => <SearchTrack key={track.id} track={track}/>)}</div>;
}