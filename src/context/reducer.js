export const initialState = {
  user: null,
  following: null,
  topTracks: {
    long: null,
    medium: null,
    short: null
  },
  topArtists: {
    long: null,
    medium: null,
    short: null
  },
  playlists: null,
  token: null
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    // set user data
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_FOLLOWING":
      return {
        ...state,
        following: action.following,
      };  

    // set top tracks
    case "SET_TOPTRACKS_LONG":
      return {
        ...state,
        topTracks: {
          ...state.topTracks,
          long: action.topTracks
        }
      };  

    case "SET_TOPTRACKS_MED":
      return {
        ...state,
        topTracks: {
          ...state.topTracks,
          medium: action.topTracks
        }
      }; 
    
    case "SET_TOPTRACKS_SHORT":
      return {
        ...state,
        topTracks: {
          ...state.topTracks,
          short: action.topTracks
        }
      };   
    
    // set top artists
    case "SET_TOPARTISTS_LONG":
      return {
        ...state,
        topArtists: {
          ...state.topArtists,
          long: action.topArtists
        }
      };

    case "SET_TOPARTISTS_MED":
      return {
        ...state,
        topArtists: {
          ...state.topArtists,
          medium: action.topArtists
        }
      }; 
    
    case "SET_TOPARTISTS_SHORT":
      return {
        ...state,
        topArtists: {
          ...state.topArtists,
          short: action.topArtists
        }
      };   
    
    // set playlists
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;