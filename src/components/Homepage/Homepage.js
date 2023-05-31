import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hola <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Mi nombre es Nicolas Pariona</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/timothy-coder");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            
            <button onClick={() => {
              window.open("https://twitter.com/timothy2614grs");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/nickolas2614grs");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>timothy-coder</span>
        </p>
      </Container>
    </div>
  )
}

export default Home