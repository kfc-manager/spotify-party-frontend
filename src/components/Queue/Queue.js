import axios from "axios";
import { useEffect, useState } from "react";
import QueueTrack from "./QueueTrack";

function queueIndexing(queue) {
    for (let i = 0; i < queue.length; i++) {
        queue[i].index = i;
    }
    return queue;
}

export default function Queue() {

    const [queue, setQueue] = useState([]);

    useEffect(() => {
        axios.get("queue/get")
        .then((response) => setQueue(queueIndexing(response.data)))
        .catch((error) => {
            console.log(error);
        });
    }, []);

    if (queue.error !== undefined) {
        return <div></div> //TODO proper error handling
    }

    return <div>
        {queue.map(track => <QueueTrack key={track.index} track={track}/>)}
    </div>;
}