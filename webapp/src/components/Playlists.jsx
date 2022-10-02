import React, { useEffect } from 'react'
import { useStateProvider } from "../utils/StateProvider"
import axios from "axios"

export default function Playlists() {
    // I destructur the token from the state
    // I need the token & dispatch 
    const [{token, dispatch}] = useStateProvider()

    // I pass the token here in the token to make my API call. 
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            console.log("RES", response)
        }
        getPlaylistData()
    }, [token, dispatch])
  return (
    <div>Playlists</div>
  )
}
