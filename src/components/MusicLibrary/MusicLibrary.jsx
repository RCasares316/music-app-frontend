import { useState, useEffect } from "react";
import { getTracks } from "../../services/tracks.js";
import { addTrackToPlaylist } from "../../services/playlist.js";
import "./MusicLibrary.css";

const MusicLibrary = () => {
  // make a state for tracks
  const [tracks, setTracks] = useState([]);

  // useeffect - call the getTracks function and set the tracks state
  const fetchTracks = async () => {
    const tracksData = await getTracks();
    setTracks(tracksData);
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const extractTrackId = (streamUrl) => {
    return streamUrl.split("tracks:")[1].split("/")[0];
  };

  return (
    <div>
      <h1>All tracks</h1>
      <div className="tracks-container">
        {tracks?.map((track) => (
          <div key={track._id} className="tracks-card">
            <img src={track.artwork} alt={track.title} />
            <audio
              controls
              src={`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${extractTrackId(track.streamUrl)}`}
            ></audio>
            <div>
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
              <button type="submit">Add to Playlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicLibrary;
