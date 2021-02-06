// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "daee4e7eb5eb43fb9a235021b91e1d7f";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-follow-read",
  "playlist-read-private",
  "playlist-read-collaborative"
];

export const getTokenFromResponse = () => {
  const hashParams = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;