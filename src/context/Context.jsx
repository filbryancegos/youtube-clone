import React, { useContext, createContext, useReducer, useEffect, useRef, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchApi'
import { ACTION_TYPES } from '../actions';
import { youtubeReducer, INITIAL_STATE } from '../reducer'
const YouTubeContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(youtubeReducer, INITIAL_STATE)
  
  useEffect(() => {
    const fetchVideo = async (url) => {
      try {
        const res = await fetchFromAPI(url);
        dispatch({
          type: ACTION_TYPES.SET_VIDEOS,
          payload: res.items
        })
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchVideo(`search?part=snippet&q=${state.category}`);
  }, [state.category])

  const handleOpenSidebar = () => {
    dispatch({
      type: ACTION_TYPES.SET_SIDEBAR,
      payload: true,
    })
  }

  const handleCloseSidebar = () => {
    dispatch({
      type: ACTION_TYPES.SET_SIDEBAR,
      payload: false
    })
  }

  const setSelectedCategory = (name) => {
    console.log(name);
    dispatch({
      type: ACTION_TYPES.SET_SELECTED_CATEGORY,
      payload: name
    })
  }
  
  return (
    <YouTubeContext.Provider
      value={{
        state,
        handleOpenSidebar,
        handleCloseSidebar,
        setSelectedCategory,
      }}
    >
      {children}
    </YouTubeContext.Provider>
  )
}

export const useYouTubeContext = () => {
  return useContext(YouTubeContext)
}


export { YouTubeContext, AppProvider };
