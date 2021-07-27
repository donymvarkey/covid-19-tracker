import React from 'react'
import {Navbar, Row, Col, Image, Container} from 'react-bootstrap'

const NavBar = () => {
    return (
        <Container className="p-2">
            <Navbar.Brand>
                <Row>
                    <Col xs={12} md={6}>
                        <Image src="https://i.ibb.co/7QpKsCX/image.png" alt="covid-19" fluid/>
                    </Col>
                    <Col className="text-end p-3">
                        <a className="text-decoration-none" href="https://github.com/donymvarkey/covid-19-tracker.git">
                            <i className="bi-github h3 text-dark" role="img" aria-label="GitHub"></i>
                        </a>
                        
                    </Col>
                </Row>
            </Navbar.Brand>
        </Container>
    )
}

export default NavBar;