import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { getTracks } from "../../services/tracks.js";
import { addTrackToPlaylist } from "../../services/playlist.js";
import "./MusicLibrary.css";

const MusicLibrary = () => {
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { playlists } = useContext(UserContext);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");
  const [selectedTrackId, setSelectedTrackId] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const openModal = (clickedTrackId) => {
    setError("");

    // preselect first playlist if it exists
    const firstId = playlists?.length ? playlists[0]._id : "";
    setSelectedPlaylistId(firstId);
    setSelectedTrackId(clickedTrackId);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSaving(false);
    setError("");
  };

  const handleConfirm = async () => {
    if (!selectedPlaylistId) {
      setError("Please choose a playlist.");
      return;
    }

    try {
      setIsSaving(true);
      setError("");

      await addTrackToPlaylist(selectedPlaylistId, selectedTrackId);

      closeModal();
    } catch (e) {
      setIsSaving(false);
      setError(
        e?.response?.data?.message || e.message || "Failed to add track.",
      );
    }
  };

  const fetchTracks = async () => {
    const tracksData = await getTracks();
    setTracks(tracksData);
    setFilteredTracks(tracksData);
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const extractTrackId = (streamUrl) => {
    return streamUrl.split("tracks:")[1].split("/")[0];
  };

  const hasPlaylists = playlists && playlists.length > 0;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);

    const updatedTracks = tracks.filter((track) => {
      return (
        track.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        track.artist.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setFilteredTracks(updatedTracks);
  };

  return (
    <div>
      <h1>All tracks</h1>
      <div className="searchbar-container">
        <label htmlFor="searchBar"></label>
        <input
          type="text"
          id="searchBar"
          name="searchTerm"
          placeholder="Search Your Favorite Song"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="tracks-container">
        {filteredTracks?.map((track) => (
          <div key={track._id} className="tracks-card">
            <img src={track.artwork} alt={track.title} />
            <audio
              controls
              src={`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${extractTrackId(track.streamUrl)}`}
            ></audio>
            <div>
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
              <button type="submit" onClick={() => openModal(track._id)}>
                Add to Playlist
              </button>
            </div>
          </div>
        ))}
      </div>
      {!hasPlaylists && (
        <p className="no-playlists">Create a playlist first to add tracks.</p>
      )}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h4>Add to playlist</h4>

            <label className="modal-label">Choose a playlist:</label>

            <select
              className="playlist-select"
              value={selectedPlaylistId}
              onChange={(e) => setSelectedPlaylistId(e.target.value)}
              disabled={isSaving}
            >
              {playlists.map((pl) => (
                <option key={pl._id} value={pl._id}>
                  {pl.name || pl.title || "Untitled Playlist"}
                </option>
              ))}
            </select>

            {error && <p className="error">{error}</p>}

            <div className="modal-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={closeModal}
                disabled={isSaving}
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirm-button"
                onClick={handleConfirm}
                disabled={isSaving}
              >
                {isSaving ? "Adding..." : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicLibrary;
