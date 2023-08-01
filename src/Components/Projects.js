import React, { useRef }  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Projects(props) {

  const swipeNavPrevRef = useRef(null)
  const swipeNavNextRef = useRef(null)

  return (
    <section className={props.bg ? 'projSecW' : 'projSecB'} id='Projects'>
      <h2 className='projTitle'><u>Projects</u></h2>
      {/* <div className='projSecContainer'>
        <div className='projContainer'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={5}
            slidesPerView={1}
            loop={true}
            speed={550}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
            <div className='projData'> */}

      {/* project 1 */}
      {/* <SwiperSlide>
              <i class="uil uil-angle-left swiper-button-prev"></i>
                <div className='projContent'>
                  <img src='assets/datadrive.jpg' alt='Data Drive' className='projImg'></img>
                  <div className='projInfo'>
                    <h2 className='projName'><u>Data Drive</u></h2>
                    <span className='projDesc'>Data drive is a website where you can store 
                    <br/>your files in any format in a secure manner. <br/>You can store your 
                    data in your existing account <br/>or create a new account. This website 
                    is created <br/>using ReactJS, Bootstrap & Firebase.
                     </span><br />
                    <a href='https://data-drive-09.web.app/' target='_blank' className='projLink'>
                    Check out <i class="uil uil-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <i className="uil uil-angle-right swiper-button-next"></i>
              </SwiperSlide> */}

      {/* project  2*/}
      {/* <SwiperSlide>
                <div className='projContent'>
                  <img src='assets/rapidnotes.jpg' alt='Rapid Notes' className='projImg'></img>
                  <div className='projInfo'>
                    <h2 className='projName'><u>Rapid Notes</u></h2>
                    <span className='projDesc'>Rapid Notes is a simple way to keep track of <br/>notes.
                    Light, clean and free. It contains Add, <br/>Search and Delete functionalities. It is built using<br/> HTML, JavaScript & Bootstrap.</span><br />
                    <a href='https://rapid-notes.vercel.app/' target='_blank' className='projLink'>
                      Check out <i class="uil uil-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide> */}

      {/* project  3*/}
      {/* <SwiperSlide>
                <div className='projContent'>
                  <img src='assets/blackjack.jpg' alt='Blackjack Game' className='projImg'></img>
                  <div className='projInfo'>
                    <h2 className='projName'><u>Blackjack</u></h2>
                    <span className='projDesc'>Blackjack is a classic casino game of luck and <br/>strategy. Your goal is to draw cards with a value <br/>of 21 to win. If the value of your cards exceed 21 <br/>then you lose. This game is built using simple <br/> HTML,CSS & JavaScript.</span><br />
                    <a href='https://blackjack-zeta-olive.vercel.app/' target='_blank' className='projLink'>
                    Check out <i class="uil uil-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>

          </Swiper>
        </div>
      </div> */}


      <div className='projContainer'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          speed={550}
          navigation={{
            prevEl: swipeNavPrevRef.current,
            nextEl: swipeNavNextRef.current,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}

          onInit={(swiper)=>{
            swiper.params.navigation.prevEl = swipeNavPrevRef.current;
            swiper.params.navigation.nextEl = swipeNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          <div className='projResp'>

            {/* project 1 */}
            <SwiperSlide>
  
              <div className='projContent'>
                <img src='assets/rapidnotes.jpg' alt='Rapid Notes' className='projImg'></img>

                <div className='projData'>
                  <h3 className='projName'>Rapid Notes</h3>
                  <p className='projDesc'>Rapid Notes is a simple way to keep track of notes.
                    Light, clean and free. It contains Add, Search and Delete functionalities.
                    It is built using HTML, JavaScript & Bootstrap.</p>
                  <a href='https://rapid-notes.vercel.app/' target='_blank' className='projLink'>
                    Check out <i class="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>

            </SwiperSlide>

            {/* project 2 */}
            <SwiperSlide>

              <div className='projContent'>
                <img src='assets/datadrive.jpg' alt='Data Drive' className='projImg'></img>

                <div className='projData'>
                  <h3 className='projName'>Data Drive</h3>
                  <p className='projDesc'>Data drive is a website where you can store
                    your files in any format in a secure manner. You can store your
                    data in your existing account or create a new account. This website
                    is created using ReactJS, Bootstrap & Firebase.</p>
                  <a href='https://data-drive-09.web.app/' target='_blank' className='projLink'>
                    Check out <i class="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>

            </SwiperSlide>

            {/* project 3 */}
            <SwiperSlide>

              <div className='projContent'>
                <img src='assets/lexicon.jpg' alt='Lexicon' className='projImg'></img>

                <div className='projData'>
                  <h3 className='projName'>Lexicon</h3>
                  <p className='projDesc'>The lexicon is user-friendly and comprehensive online dictionary 
                  that aims to provide with quick and accurate word definitions, synonyms, antonyms, usage examples, and 
                  audio pronunciation. It is developed using HTML, CSS & JavaScript.</p>
                  <a href='https://lexicon-jade.vercel.app/' target='_blank' className='projLink'>
                    Check out <i class="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>

            </SwiperSlide>

            {/* project 4 */}
            <SwiperSlide>

              <div className='projContent'>
                <img src='assets/blackjack.jpg' alt='Blackjack' className='projImg'></img>

                <div className='projData'>
                  <h3 className='projName'>Blackjack</h3>
                  <p className='projDesc'>Blackjack is a classic casino game of luck and strategy.
                    Your goal is to draw cards with a value of 21 to win. If the value of your cards
                    exceed 21 then you lose. This game is built using simple HTML,CSS & JavaScript.</p>
                  <a href='https://blackjack-zeta-olive.vercel.app/' target='_blank' className='projLink'>
                    Check out <i class="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>

            </SwiperSlide>
          </div>
          <div className='swiper-button-prev' ref={swipeNavPrevRef}>
            <i class="uil uil-angle-left-b swiper-icon"></i>
          </div>
          <div className='swiper-button-next' ref={swipeNavNextRef}>
            <i class="uil uil-angle-right-b swiper-icon"></i>
          </div>
        </Swiper>
      </div>

    </section>
  )
}
