import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { createPlaylist } from "../../services/playlist.js";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) =>{
  e.preventDefault();
  await createPlaylist(formData);
  setFormData({ name:"", img: ""});
}

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
      <div>
        <h2>Create a Playlist</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name-input">Playlist Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="img-input">Image URL</label>
          <input type="text" name="img" id="img-input" value={formData.img} onChange={handleChange}/>
          <button type="submit">Create</button>
        </form>
        <h2>Recent Playlists</h2>
      </div>
    </main>
  );
};

export default Dashboard;
