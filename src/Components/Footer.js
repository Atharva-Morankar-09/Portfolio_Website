import React from 'react'

export default function Footer(props) {
  return (
    <section className={props.bg ? 'footerSecW secFooter' : 'footerSecB secFooter'} id='Footer'>
      <footer className='footer'>
        <div className='footerContainer'>
          <h1 className='footerTitle'>Atharva Morankar</h1>

          <ul className='footerList'>
            <li>
              <a href="#About" className='footerLinks'>About</a>
            </li>

            <li>
              <a href="#Qualifications" className='footerLinks'>Qualifications</a>
            </li>

            <li>
              <a href="#Projects" className='footerLinks'>Projects</a>
            </li>
          </ul>

          <div className='footerSocial'>
            <a href='https://www.linkedin.com/in/atharva-morankar-24788421a/' className='footerIcon' target='_blank'>
              <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href='https://github.com/Atharva-Morankar-09' className='footerIcon' target='_blank'>
              <i class="uil uil-github"></i>
            </a>

            <a href='https://twitter.com/atharva_09_' className='footerIcon' target='_blank'>
              <i class="uil uil-twitter-alt"></i>
            </a>
          </div>

          <span className='footerCopyright'>
           &#169; 2022 - Atharva Morankar. All rights reserved.
          </span>
        </div>
      </footer>
    </section>
  )
}
