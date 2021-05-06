import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

import './Styles/Search.css'
import Navigation from './Navigation'

export default function Search() {

    return(
        <Container >

            <div>

            </div>

            <Row xs={12} sm={12} md={12} lg={12} className="searchBar">
                <input placeholder="Type something" className="searchInput"/>
                <Button variant="primary" className="searchButton">Search</Button>
            </Row>

            <Navigation />

        </Container>
    );
    
}