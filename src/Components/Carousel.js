import { React } from "react";
import './Styles/Carousel.css'
import { Image, Container } from 'react-bootstrap';
import Navigation from './Navigation';
import NewsList from './NewsList'

import { Link } from 'react-router-dom';


// Importing images
import vaccine from './assets/vaccine.jpg';
import bhm from './assets/bhm.jpg'
import code from './assets/code.jpg'
import lockdown from './assets/lockdown.jpg';
import mask from './assets/mask.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination
  } from 'swiper/core';

SwiperCore.use([Pagination]);

export default function Carousel() {

    return(
      <>
        <Container fluid className="container-flex mainContainer">

            <div className="brandName">
                <span className="pocketSized">Pocket-Sized</span>
                <FontAwesomeIcon className="mobileIcon" icon={faMobileAlt}/>
                <div className="tagline">Your curated list of byte sized content.</div>
            </div>

            <p className="containerTitle">
              Trending this week
            </p>
            <Swiper
                breakpoints={{
                  "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 20
                  },
                  "700": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 20
                  }
                }} 
                centeredSlides={true}
                grabCursor={true}
                loop={true}
            className="mySwiper">
    
            <SwiperSlide>
              <Link to="/article">
              <div className="textContent">
                <Image src={vaccine} />
                <p className="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                  felis iaculis nec.
                </p>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="/article">
              <div className="textContent">
                <Image src={bhm} />
                <p className="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                  felis iaculis nec.
                </p>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="/article">
              <div className="textContent">
                <Image src={lockdown} />
                <p className="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                  felis iaculis nec.
                </p>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="/article">
              <div className="textContent">
                <Image src={code} />
                <p className="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                  felis iaculis nec.
                </p>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
               <Link to="/article"></Link>
              <div className="textContent">
                <Image src={mask} />
                <p className="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                  felis iaculis nec.
                </p>
              </div>
            </SwiperSlide>

            </Swiper>

            <NewsList />

        </Container>

          <Navigation />
        </>
    );
}