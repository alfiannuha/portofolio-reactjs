import './Home.css'
import { Link } from "react-router-dom";

// import Navbar from '../components/Navbar'
import Skills from '../pages/Skills'
import Project from '../pages/project/Project'

import TextLoop from "react-text-loop"

import Icon from '@mdi/react';
import { mdiCheckDecagram } from '@mdi/js';

import PolygonImage from '../assets/images/polygon.png'
import ProfileImage from '../assets/images/profile.png'
import GithubIcon from '../assets/icons/github.png'
import GitlabIcon from '../assets/icons/gitlab.png'

export default function Home() {
  return (
    <>
     {/* <Navbar></Navbar> */}
      <section className="home" id="home">
        <div className="home-description">
          <div className="description-fullname">
            Hi, I'm Nuha 
            <Icon 
              path={mdiCheckDecagram}
              style={{marginLeft: '10px'}}
              color="#3797F0"
              size={1}/> <br/>
            <TextLoop className="description-jobs" interval={2000}>
              <span>Frontend Web Developer.</span>
            </TextLoop>
          </div>
          {/* <div className="description-jobs">
          </div> */}
          <div className="description-about">
            <p>
              Hallo, nama saya Alfian An - Naufal Nuha dan saya seorang Web
              Development. Saya memiliki kemampuan untuk membuat sebuah Website
              atau Aplikasi berbasis Web. <Link to="/about">see more</Link>
            </p>
          </div>
          <div className="home-icon">
            <a href="https://github.com/alfiannuha" target="_blank" style={{ marginRight: 30}} rel="noreferrer noopener">
              <img src={GithubIcon} alt="Github" />
            </a>
            <a href="https://gitlab.com/alfian.nuha" target="_blank" rel="noreferrer noopener">
              <img src={GitlabIcon} alt="Gitlab" />
            </a>
          </div>
        </div>
        <div className="home-profile">
          <img src={ProfileImage} alt="profile" className="profile-image" />
        </div>
      </section>
      <Project></Project>
      <Skills></Skills>
    </>
  );
}
