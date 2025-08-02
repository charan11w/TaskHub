import React, { useState } from "react";
import "./GitProfile.css";

const GitProfile = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      setProfile(null);
      return;
    }

    setLoading(true);
    setError("");
    setProfile(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("User not found.");
        } else {
          throw new Error("Failed to fetch user. Try again later.");
        }
      }
      const data = await res.json();
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
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {profile && (
        <div className="profile-card">
          <img src={profile.avatar_url} alt={profile.login} />
          <h3>{profile.name || profile.login}</h3>
          <p className="bio">{profile.bio || "No bio provided."}</p>
          <p className="location">
            📍 {profile.location || "Location not available"}
          </p>
          <div className="stats">
            <span>Followers: {profile.followers}</span>
            <span>Public Repos: {profile.public_repos}</span>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default GitProfile;
