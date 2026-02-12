import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createPlaylist } from "../../services/playlist";
import "./PlayListCreate.css";

////Do we need this page if its in the dashboard
const PlayListCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPlaylist(formData);
    navigate("/playlists");
  };
  return (
    <main className="playlist-create-page">
      <div className="vinyl-bg"></div>

      <div className="playlist-create-card">
        <h1>Create New Playlist</h1>

        <form onSubmit={handleSubmit} className="playlist-create-form">
          <label htmlFor="name-input">Playlist Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="img-input">Image URL</label>
          <input
            type="text"
            name="img"
            id="img-input"
            value={formData.img}
            onChange={handleChange}
          />

          <div className="playlist-create-buttons">
            <button type="submit">Create Playlist</button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/playlists")}
            >
              Cancel
            </button>
          </div>
        </form>
        {/* <div className="music-bg-global">
          <span className="note">♪</span>
          <span className="note">♫</span>
          <span className="headphones">🎧</span>
          <span className="mic">🎤</span>
          <span className="mic">🎙️</span>
        </div> */}
      </div>
    </main>
  );
};

export default PlayListCreate;
