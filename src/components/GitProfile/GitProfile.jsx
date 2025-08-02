import React, { useState } from "react";
import "./GitProfile.css";

const GitProfile = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      setProfile(null);
      return;
    }

    setLoading(true);
    setError("");
    setProfile(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found.");
        } else {
          throw new Error("Something went wrong. Try again later.");
        }
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="git-container">
      <h2>GitHub Profile Finder</h2>
      <div className="search-box">
        <input
          type="text"
          value={username}
          placeholder="Enter GitHub username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchProfile}>Search</button>
      </div>

      {loading && <p className="info-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {profile && (
        <div className="profile-card">
          <img src={profile.avatar_url} alt={profile.login} />
          <h3>{profile.name || "No Name Available"}</h3>
          <p>@{profile.login}</p>
          <p>{profile.bio || "No bio provided."}</p>
          <div className="stats">
            <span>Followers: {profile.followers}</span>
            <span>Following: {profile.following}</span>
            <span>Repos: {profile.public_repos}</span>
          </div>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitProfile;
