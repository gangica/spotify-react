export const initialState = {
  user: null,
  following: null,
  topTracks: {
    long: null,
    medium: null,
    short: null
  },
  topArtists: null,
  playlists: null,
  recent: null,
  token: null
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
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
    
    case "SET_TOPARTISTS":
      return {
        ...state,
        topArtists: action.topArtists,
      };
    
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_RECENT":
        return {
          ...state,
          recent: action.recent,
        };  

    default:
      return state;
  }
};

export default reducer;