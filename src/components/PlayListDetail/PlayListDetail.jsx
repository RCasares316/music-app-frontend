import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getPlaylist } from "../../services/playlist.js";

const PlayListDetail = () => {
  const [playlist, setPlaylist] = useState({});

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
          </div>
        </div>
      ))}
      <Link to={`/playlist/${playlistId}/edit`}>
      <button>Edit Playlist</button>
      </Link>
    </div>
  );
};

export default PlayListDetail;
