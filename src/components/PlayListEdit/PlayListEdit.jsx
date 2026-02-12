import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  updatePlaylist,
  getPlaylist,
  deletePlaylist,
  removeTrackToPlaylist,
} from "../../services/playlist.js";

const PlayListEdit = () => {
  const [playlist, setPlaylist] = useState({});
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    img: "",
  });

  const navigate = useNavigate();
  const { playlistId } = useParams();

  const fetchPlaylist = async () => {
    const playlistData = await getPlaylist(playlistId);
    setPlaylist(playlistData);

    setEditForm({
      name: playlistData.name,
      img: playlistData.img,
    });
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

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    const updated = await updatePlaylist(playlistId, editForm);

    setPlaylist((prev) => ({
      ...prev,
      name: updated.name,
      img: updated.img,
    }));
    setIsEditingName(false);
    setIsEditingImage(false);
  };

  return (
    <div>
      {isEditingName ? (
        <>
          <input
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save Name</button>
        </>
      ) : (
        <h1 onClick={() => setIsEditingName(true)}>{playlist.name}</h1>
      )}
      {isEditingImage ? (
        <div>
          <input
            type="text"
            name="img"
            value={editForm.img}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSave}>
            Save Image
          </button>
        </div>
      ) : (
        <img
          src={playlist.img}
          alt={playlist.name}
          onClick={() => setIsEditingImage(true)}
          style={{ cursor: "pointer" }}
        />
      )}
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
      <Link to="/playlist">
      <button>Update Playlist</button>
      </Link>
    </div>
  );
};

export default PlayListEdit;
