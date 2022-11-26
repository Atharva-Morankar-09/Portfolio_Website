import React from 'react'

export default function About(props) {
  return (
    <section className={props.bg ? 'aboutSecW' : 'aboutSecB'} id='About'>
      <div className={props.bg?'aboutMainW':'aboutMainB'}>
        <h2 className='aboutTitle'><u>About</u></h2>
        <div className='aboutData'>
          <div className='aboutAboutMe'>
          <div className='barLengthAboutMe'><h3 className={props.bg?'aboutHeadingW':'aboutHeadingB'}>About Me</h3></div>
            <div className='aboutInfo'>
              <p>Hey, I'm Atharva, a 20 year old currently pursuing B.E. in Computer Science.
              I have a keen interest in Problem solving and Building projects. I enjoy to explore 
              different domains and contribute to open source. I have also conducted various events,
              workshops and lectures in collaboration with different colleges and students.
              As a fresher there is a lot for me to learn but I am always up for challenges and leap 
              at any opportunity to learn something new. 
              </p>
              <a href='https://drive.google.com/file/d/1KeGJcPGcAT907b4P49EiwEWE3PRthYpl/view?usp=sharing' target='__blank' className='resume'>Resume</a>
            </div>
          </div>
          <div className='aboutSkills'>
            <div className='barLengthSkills'><h3 className={props.bg?'aboutHeadingW':'aboutHeadingB'}>Skills</h3></div>
            <div className='aboutInfo'>
              <div className='skillBars'>
              <div className='bar'>
                <div className='info'>
                  <span>C++</span>
                </div>
                <div className='progressLine'><span className='cpp'/></div>
              </div>
              <div className='bar'>
                <div className='info'>
                  <span>Python</span>
                </div>
                <div className='progressLine'><span className='python'/></div>
              </div>
              <div className='bar'>
                <div className='info'>
                  <span className='js'>JavaScript</span>
                </div>
                <div className='progressLine'><span className='js'/></div>
              </div>
              <div className='bar'>
                <div className='info'>
                  <span className='reactjs'>ReactJS</span>
                </div>
                <div className='progressLine'><span className='reactjs'/></div>
              </div>
              <div className='bar'>
                <div className='info'>
                  <span className='sql'>SQL</span>
                </div>
                <div className='progressLine'><span className='sql'/></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
