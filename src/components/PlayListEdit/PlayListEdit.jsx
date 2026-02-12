import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  updatePlaylist,
  getPlaylist,
  deletePlaylist,
  removeTrackToPlaylist,
} from "../../services/playlist.js";
import "./PlayListEdit.css"

const PlayListEdit = () => {
  const [playlist, setPlaylist] = useState({});

  const navigate = useNavigate();

  const { playlistId } = useParams();

  const fetchPlaylist = async () => {
    const playlistData = await getPlaylist(playlistId);
    setPlaylist(playlistData);
  };

  useEffect(() => {
    fetchPlaylist();
  }, [playlistId]);

  const extractTrackId = (streamUrl) => {
    if (!streamUrl) return "";

    return streamUrl.split("tracks:")[1].split("/")[0];
  };

  const handleRemoveTrack = async (trackId) => {
    await removeTrackToPlaylist(playlistId, trackId);

    setPlaylist((prev) => ({
      ...prev,
      tracks: prev.tracks.filter((track) => track._id !== trackId),
    }));
  };

  return (
    <div>
      <h1>{playlist.name}</h1>
      <img src={playlist.img} alt={playlist.name} />
      {playlist.tracks?.map((track) => (
        <div key={track._id} className="tracks-card">
          <img src={track.artwork} alt={track.title} />
          <audio
            controls
            src={`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${extractTrackId(track.streamUrl)}`}
          ></audio>
          <div>
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <button type="submit" onClick={() => handleRemoveTrack(track._id)}>
              Remove From Playlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayListEdit;
