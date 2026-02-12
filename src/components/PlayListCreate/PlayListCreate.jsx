import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createPlaylist } from "../../services/playlist";

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
  return <main></main>;
};

export default PlayListCreate;
