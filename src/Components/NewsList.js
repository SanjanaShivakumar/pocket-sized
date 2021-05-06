import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import listOne from './assets/list/listOne.jpg'

import './Styles/NewsList.css'

export default function NewsList() {

    return(
        <Container fluid className="newsContainer">

            <p className="containerTitle">
              More Articles
            </p>

            <div class="card flex-row flex-wrap newsCard">
                <div class="card-header border-0">
                    <img src={listOne} alt="" className="cardImage" />
                </div>

                <div class="card-block px-3">
                    <h5 class="card-title cardTitle">COVID-19 Vaccine Trials Commence in India</h5>
                    <p class="card-text cardDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class="card flex-row flex-wrap newsCard">
                <div class="card-header border-0">
                    <img src={listOne} alt="" className="cardImage" />
                </div>

                <div class="card-block px-3">
                    <h5 class="card-title cardTitle">COVID-19 Vaccine Trials Commence in India</h5>
                    <p class="card-text cardDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class="card flex-row flex-wrap newsCard">
                <div class="card-header border-0">
                    <img src={listOne} alt="" className="cardImage" />
                </div>

                <div class="card-block px-3">
                    <h5 class="card-title cardTitle">COVID-19 Vaccine Trials Commence in India</h5>
                    <p class="card-text cardDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class="card flex-row flex-wrap newsCard">
                <div class="card-header border-0">
                    <img src={listOne} alt="" className="cardImage" />
                </div>

                <div class="card-block px-3">
                    <h5 class="card-title cardTitle">COVID-19 Vaccine Trials Commence in India</h5>
                    <p class="card-text cardDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

        </Container>
    );
    
}