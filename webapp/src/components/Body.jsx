import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AiFillClockCircle } from 'react-icons/ai'
import axios from 'axios'

import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/Constants'

export default function Body() {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider()

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
      },
      })
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a") ? "" : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map(( artist ) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_url: track.album.uri,
          track_number: track.track_number
        })),
      }
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist})
    }

    getInitialPlaylist()
  }, [token, dispatch, selectedPlaylistId])
  

  return (
    <Container>
      {
        selectedPlaylist && (
          <>
          <div className="playlist">
            <div className="image">
              <img src={selectedPlaylist.image} alt="image" />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{selectedPlaylist.name}</h1>
            </div>
          </div>
          </>
        )
      }
    </Container>
  )
}


const Container = styled.div`

`