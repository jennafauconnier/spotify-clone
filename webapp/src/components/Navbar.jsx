import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'

import { FaSearch } from 'react-icons/fa'

export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider()

  return (
    <Container navBackground={navBackground}>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Artists, song, or podcasts" />
      </div>
      <div className="avatar">
        <img src={userInfo?.picture} alt="profile pic" />
        <a href="#" >
          <span>{userInfo?.username}</span>
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,1)" : "none"};

  .search_bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5 rem;

    input {
      border: none;
      height: 2rem;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  .avatar {
    display: flex;
    align-items: center;
    background-color: #242424;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;

    a {
      text-decoration: none;

      span {
        padding-left: 1rem;
        color: white;
        outline: none;
      }
    }

    

    img {
      background-color: #242424;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      cursor: pointer;
      padding: 2px;
    }
  }
`