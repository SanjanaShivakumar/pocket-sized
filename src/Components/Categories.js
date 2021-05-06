import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/Categories.css'

import Navigation from './Navigation';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';


import covid from './assets/categoryImages/covid.jpg';
import politics from './assets/categoryImages/politics.jpg';
import sports from './assets/categoryImages/sports.jpg';
import international from './assets/categoryImages/international.jpg';
import entertainment from './assets/categoryImages/entertainment.jpg'

class Categories extends Component {

    render() { 
        return ( 
            <Container class="containerCategories">

            <div className="brandName">
                <span className="pocketSized">Pocket-Sized</span>
                <FontAwesomeIcon className="mobileIcon" icon={faMobileAlt}/> 
            </div>

                    <Row class="container" className="categoriesRow">
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <img alt="" src={covid} className="covidCategory" />
                            <p className="categoryList">COVID-19</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt="" src={politics} className="categories" />
                            <p className="categoryList">Sports</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt="" src={sports} className="categories sports" />
                            <p className="categoryList">Coding</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt="" src={entertainment} className="categories" />
                            <p className="categoryList">Events</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt="" src={international} className="categories" />
                            <p className="categoryList">Events</p>
                        </Col>
                    </Row>
            
            <Navigation />

        </Container>
         );
    }
}
 
export default Categories;