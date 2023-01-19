import { useState } from 'react'
import './Navbar.css'
import Logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

import GithubIcon from '../assets/icons/github.png'
import GitlabIcon from '../assets/icons/gitlab.png'
import LinkedInIcon from '../assets/icons/linkedin.png'
import WhatsAppIcon from '../assets/icons/whatsapp.png'
import TelegramIcon from '../assets/icons/telegram.svg'

import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';

const SOSMED = [
  {
    name: "Github",
    icon: GithubIcon,
    link: 'https://github.com/alfiannuha'
  },
  {
    name: "Gitlab",
    icon: GitlabIcon,
    link: 'https://gitlab.com/alfian.nuha'
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/alfian-an-naufal-nuha-9046a91b6'
  },
  {
    name: "Whatsapp",
    icon: WhatsAppIcon,
    link: 'https://wa.me/62895392685163'
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    link: 'https://t.me/aa_nuha'
  },
]

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleMenu = (state) => {
    if (!state) {
      setShowNavbar(true)
    }else {
      setShowNavbar(false)
    }
  }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-item">
          <ul>
            <li>
              <a href="/#home" onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}>Home</a></li>
            <li><a href="/#project">Project</a></li>
            <li><a href="/#skills">Skills</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-icon">
        {
          SOSMED.map((item) => {
            return (
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                <img key={item.name} src={item.icon} alt={item.name} />
              </a>
            )
  
          })
        }
      </div>
      {/* IS MOBILE SCREEN */}
      <div className="navbar-humberger">
        <Icon
          path={mdiMenu}
          size={1.5}
          onClick={() => handleMenu(false)}
          color="#d9d9d9"
        />
      </div>
      {
        showNavbar &&
        <div 
          style={{
            height: '500px', 
            marginBottom: '300px', 
            backgroundColor: '#282c34', 
            position: 'absolute', 
            width: '100%'}}>
          {/* ITEM LINKS */}

          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '450px', 
           }}>
            <ul style={{ 
              listStyle: 'none',
              paddingTop: '30px',
              textAlign: 'center',
              padding: 0,
            }}>
              <li 
                style={{ marginBottom: '20px', fontSize: '20px' }}
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                  setShowNavbar(false)
                }}>
                <a href="/#home">Home</a>
              </li>
              <li 
                style={{ marginBottom: '20px', fontSize: '20px' }}
                onClick={() => setShowNavbar(false)}>
                <a href="/#project">Project</a>
              </li>
              <li 
                style={{ marginBottom: '20px', fontSize: '20px' }}
                onClick={() => setShowNavbar(false)}>
                <a href="/#skills">Skills</a>
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {
                SOSMED.map((item) => {
                  return (
                    <a href={item.link} target="_blank" rel="noreferrer noopener">
                      <img key={item.name} src={item.icon} alt={item.name} style={{ zIndex: 9, width: '40px', height: '40px', margin: '0px 10px', borderRadius: '10px' }}/>
                    </a>
                  )
        
                })
              }
            </div>
          </div>
          <div className="navbar-icon">
            {
              SOSMED.map((item) => {
                return (
                  <a href={item.link} target="_blank" rel="noreferrer noopener">
                    <img key={item.name} src={item.icon} alt={item.name} style={{ zIndex: 9}}/>
                  </a>
                )
      
              })
            }
          </div>

          {/* MENU NAVBAR */}
          <div style={{height: '60px', width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', bottom:0, position:'fixed'}}>
            <div style={{ marginLeft: '3%' }}>
              <a href="/">
                <img src={Logo} alt="Logo" style={{ width: '52px', height: '52px' }} />
              </a>
            </div>
            <div onClick={() => handleMenu(true)} style={{ marginTop: '2%', marginRight: '20px', }}>
            <Icon
              path={mdiClose}
              size={1.5}
              onClick={() => handleMenu(false)}
              color="#d9d9d9"
            />
            </div>
          </div>
        </div>
      }
    </div>
  )
}