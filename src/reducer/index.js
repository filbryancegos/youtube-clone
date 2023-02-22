import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  videos: [],
  name: 'Amang',
  isSideBar: false,
  category: 'new',
  videoId: null,
  videoDetails: [],
};

const youtubeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      }

    case ACTION_TYPES.SET_SIDEBAR:
      return {
        ...state,
        isSideBar: action.payload,
      }
    case ACTION_TYPES.SET_SELECTED_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case ACTION_TYPES.SET_VIDEO_ID:
      return {
        ...state,
        videoId: action.payload,
      }
    case ACTION_TYPES.SET_VIDEO_DETAILS:
      return {
        ...state,
        videoDetails: action.payload,
      }
    default:
     return state;
  }
}

export {
  INITIAL_STATE,
  youtubeReducer,
}
