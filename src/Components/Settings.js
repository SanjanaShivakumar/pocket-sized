import React from 'react';
import { ListGroup, Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Styles/Settings.css'

export default function Settings() {

    return(
        <Container fluid className="containerSettings">

            <Navbar>
                <a href="/">
                <FontAwesomeIcon size="lg" icon={faArrowLeft} className="backArrow" />
                </a>           
            </Navbar>
            
            <ListGroup variant="flush">
                <ListGroup.Item className="listItems">
                    Notifcations
                </ListGroup.Item>
                <ListGroup.Item className="listItems">
                    Invite your friends
                </ListGroup.Item>
                <ListGroup.Item className="listItems">
                    Privacy Policy
                </ListGroup.Item>
                <ListGroup.Item className="listItems">
                    Terms and Conditions
                </ListGroup.Item>
            </ListGroup>

            <div className="signOutDiv">
                <a href="/" className="signOutLink">Sign Out</a>
            </div>

        </Container>
    );
    
}