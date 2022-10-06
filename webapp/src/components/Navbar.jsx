import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'

import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
  const [{ userInfo }] = useStateProvider()

  return (
    <Container>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Artists, song, or podcasts" />
      </div>
      <div className="avatar">
        <a href="#" >
          <CgProfile />
          <span>{userInfo?.username}</span>
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`

`