import React, { useRef, useState } from "react";

import { Image, Navbar } from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./Styles/Article.css";

//Importing images
import vaccine from './assets/vaccine.jpg';
import bhm from './assets/bhm.jpg'
import code from './assets/code.jpg'
import lockdown from './assets/lockdown.jpg';
import mask from './assets/mask.jpg'


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {
  
  
  
  return (
    <div className="articleContainer container-fluid">

            <Navbar>
                <a href="/">
                <FontAwesomeIcon size="lg" icon={faArrowLeft} className="backArrow" />
                </a>
            </Navbar>


        <Swiper 
            direction={'vertical'} 
            loop={true}
            pagination={{
            "clickable": true
            }} 
            className="articleSwiper">

        <SwiperSlide>
            <div className="articleDiv">
                <Image className="articleImage" src={vaccine} />
                <p className="articleTitle">Article Title</p>
                <p className="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus massa, volutpat non magna nec, vestibulum hendrerit eros. Quisque ac dui porttitor, lobortis tellus quis, maximus leo. Fusce ut quam dictum diam imperdiet scelerisque. Sed molestie molestie tortor eget rhoncus. Donec congue lobortis nisi, vitae ultrices nisl ultricies et.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="articleDiv">
                <Image className="articleImage" src={bhm} />
                <p className="articleTitle">Article Title</p>
                <p className="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus massa, volutpat non magna nec, vestibulum hendrerit eros. Quisque ac dui porttitor, lobortis tellus quis, maximus leo. Fusce ut quam dictum diam imperdiet scelerisque. Sed molestie molestie tortor eget rhoncus. Donec congue lobortis nisi, vitae ultrices nisl ultricies et.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="articleDiv">
                <Image className="articleImage" src={lockdown} />
                <p className="articleTitle">Article Title</p>
                <p className="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus massa, volutpat non magna nec, vestibulum hendrerit eros. Quisque ac dui porttitor, lobortis tellus quis, maximus leo. Fusce ut quam dictum diam imperdiet scelerisque. Sed molestie molestie tortor eget rhoncus. Donec congue lobortis nisi, vitae ultrices nisl ultricies et.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="articleDiv">
                <Image className="articleImage" src={code} />
                <p className="articleTitle">Article Title</p>
                <p className="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus massa, volutpat non magna nec, vestibulum hendrerit eros. Quisque ac dui porttitor, lobortis tellus quis, maximus leo. Fusce ut quam dictum diam imperdiet scelerisque. Sed molestie molestie tortor eget rhoncus. Donec congue lobortis nisi, vitae ultrices nisl ultricies et.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="articleDiv">
                <Image className="articleImage" src={mask} />
                <p className="articleTitle">Article Title</p>
                <p className="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus massa, volutpat non magna nec, vestibulum hendrerit eros. Quisque ac dui porttitor, lobortis tellus quis, maximus leo. Fusce ut quam dictum diam imperdiet scelerisque. Sed molestie molestie tortor eget rhoncus. Donec congue lobortis nisi, vitae ultrices nisl ultricies et.
                </p>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}