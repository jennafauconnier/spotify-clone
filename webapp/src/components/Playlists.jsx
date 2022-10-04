import React, { useEffect } from 'react'
import { useStateProvider } from "../utils/StateProvider"
import axios from "axios"
import { reducerCases } from '../utils/Constants'

export default function Playlists() {
    // I destructur the token from the state
    // I need the token & dispatch 
    const [{token, playlists}, dispatch] = useStateProvider()

    // I pass the token here in the token to make my API call. 
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            const { items } = response.data
            const playlists = items.map(({ name, id, owner }) => {
                return { name, id }
            })
            dispatch({ type:reducerCases.SET_PLAYLISTS, playlists })
        }
        getPlaylistData()
    }, [token, dispatch])
  return (
    <div>
        <ul>
            {playlists.map(({ name, id }) => {
                return(
                    <li key={id}>{name}</li>
                )
            })}
        </ul>
    </div>
  )
}
