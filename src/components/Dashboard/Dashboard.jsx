import { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext.jsx";
import { createPlaylist } from "../../services/playlist.js";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, playlists } = useContext(UserContext);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   img: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await createPlaylist(formData);
  //   setFormData({ name: "", img: "" });
  // };

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome, {user.username}</h1>
        <p>Manage your playlists and start creating new vibes 🎵</p>
      </div>

      <div className="dashboard-content">
        {/* <div className="dashboard-card">
        <h2>Create a Playlist</h2>

        <form onSubmit={handleSubmit} className="playlist-form">
          <label htmlFor="name-input">Playlist Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="img-input">Image URL</label>
          <input
            type="text"
            name="img"
            id="img-input"
            value={formData.img}
            onChange={handleChange}
          />

          <button type="submit">Create Playlist</button>
        </form>
      </div> */}

        <h2>Recent Playlists</h2>
        <div className="dashboard-card-container">
          {playlists.map((playlist) => (
            <div className="dashboard-card" key={playlist._id}>
              <Link to={`/playlist/${playlist._id}`}>
                <h1>{playlist.name}</h1>
                <img src={playlist.img} alt={playlist.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
