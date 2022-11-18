import React, { useState } from 'react'

export default function Qualifications(props) {

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  }

  return (
    <section className={props.bg ? 'qualSecW' : 'qualSecB'} id='Qualifications'>
      <h2 className='qualTitle'><u>Qualifications</u></h2>
      {/* <span className='qualSubTitle'>My Journey</span> */}

      <div className='qualCont'>
        <div className='qualTabs'>
          <div className={toggle===1?'qualBtn qualActive': 'qualBtn'}
            onClick={()=>toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualIcon'></i>Education
          </div>

          <div className={toggle===2?'qualBtn qualActive': 'qualBtn'}
             onClick={()=>toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualIcon'></i>Experience
          </div>
        </div>

        <div className='qualInfo'>
          <div className={toggle===1?'qualContent qualContentActive':'qualContent'}>
            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>B.E. in Computer Science</h3>
                <span className='qualDataSubTitle'>Dr. D.Y. Patil Institute of Technology, Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2020 - Present
                </div>
              </div>

              <div>
                <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>

            <div className='qualData'>

              <div></div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>Junior College</h3>
                <span className='qualDataSubTitle'>Modern College of Arts, Science And Commerce, Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2018 - 2020
                </div>
              </div>

            </div>

            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>10th Grade</h3>
                <span className='qualDataSubTitle'>Bharatiya Vidya Bhavan SNVM, Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2008 - 2018
                </div>
              </div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>

            {/* <div className='qualData'>

              <div></div>

              <div>
                <span className='qualRounder'></span>
                <span className='qualLine'></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>BVB</h3>
                <span className='qualDataSubTitle'>11 & 12</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2020 - Present
                </div>
              </div>

            </div> */}

          </div>

          <div className={toggle===2?'qualContent qualContentActive':'qualContent'}>
            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>Competitive Programming Lead</h3>
                <span className='qualDataSubTitle'>Google Developer Student Clubs, DIT Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>July 2022 - Present
                </div>
              </div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>

            <div className='qualData'>

              <div></div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>Sr. ACES Representative</h3>
                <span className='qualDataSubTitle'>Association of Computer Engineering students, DIT Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>Aug 2022 - Present
                </div>
              </div>

            </div>

            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>Amazon ML Summer School</h3>
                <span className='qualDataSubTitle'>Apprenticeship, Amazon</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>June 2022 - July 2022
                </div>
              </div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>

            {/* <div className='qualData'>

              <div></div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>Jr. Data Manager</h3>
                <span className='qualDataSubTitle'>Association of Computer Engineering students, DIT Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>Sept 2021 - Aug 2022
                </div>
              </div>

            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}
