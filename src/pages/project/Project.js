import './Project.css'

import { useEffect } from 'react'

import Vector1 from '../../assets/images/Vector.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/effect-flip";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCreative, EffectFlip } from "swiper";

export default function Project() {
  useEffect(() => {
    document.title = `Portofolio | Project`;
  }, []);
  return (
    <section id="project">
      <div style={{ position: 'relative' }}>
        <img src={Vector1} alt="Vector" className="vector-left" />
        <div className="project">
          <div className="project-title">
            My Projects
          </div>
          <div className="project-card">
            <Swiper
              effect={"creative"}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation, EffectCreative]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="https://google.com/">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="project" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Swiper"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Swiper"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Swiper"/>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="project-card-mobile">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              loop={true}
              modules={[Autoplay, EffectFlip, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Swiper" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Swiper" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}