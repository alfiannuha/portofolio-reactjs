import './Skills.css'

import VectorR from '../assets/images/Vector_skill_r.png'
import VectorL from '../assets/images/Vector_skill_l.png'


import HTML from '../assets/icons/html.png'
import CSS from '../assets/icons/css.png'
import JavaScript from '../assets/icons/js.png'
import NodeJS from '../assets/icons/nodejs.png'
import Git from '../assets/icons/git.png'
import VueJS from '../assets/icons/vuejs.png'
import NuxtJS from '../assets/icons/nuxtjs.png'
import ReactJS from '../assets/icons/reactjs.png'
import Docker from '../assets/icons/docker.png'
import PHP from '../assets/icons/php.png'

export default function Skills() {
  
  return (
    <div id="skills">
      <div style={{ position: 'relative', height: '200px'}}>
        <img src={VectorR} alt="Vector Right" className="vector-right" />
        <div className="skills">
          <div className="skills-title">
            Keahlian yang dimiliki
          </div>
        </div>
      </div>
      <div className="skills-images">
        <img src={HTML} alt="Hyper Text Markup Language" />
        <img src={CSS} alt="Cascading Style Sheet" />
        <img src={JavaScript} alt="JavaScript" />
        <img src={NodeJS} alt="Node JS" />
        <img src={Git} alt="Git" />
        <img src={VueJS} alt="Vue JS" />
        <img src={NuxtJS} alt="Nuxt JS" />
        <img src={ReactJS} alt="React JS" />
        <img src={Docker} alt="Docker" />
        <img src={PHP} alt="PHP" />
      </div>
      <img src={VectorL} alt="Vector Left" className="vector-left-skills" />
    </div>
  );
}