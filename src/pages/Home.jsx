import React from "react"
import styled from "styled-components"
import CoverVideo from "../assets/CoverVideo.mp4"

const GridContainer = styled.div` 
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Home = () => {
  return (
    <GridContainer>
      <h1>Introduction: Tristan Neal</h1>
      <video src={CoverVideo} controls />
    </GridContainer>
  )
}

export default Home
