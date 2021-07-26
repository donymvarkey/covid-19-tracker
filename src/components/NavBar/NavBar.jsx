import React from 'react'
import {Navbar, Row, Col, Image} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div className="p-2">
            <Navbar.Brand>
                <Row>
                    <Col xs={12} md={6}>
                        <Image src="https://i.ibb.co/7QpKsCX/image.png" alt="covid-19" fluid/>
                        <p className="small text-muted ">Powered By: <a className="text-decoration-none text-primary" href="https://github.com/mathdroid/covid-19-api" target="_blank">mathdroid/covid-19-api</a></p>
                    </Col>
                    <Col className="text-end p-3">
                        <a className="text-decoration-none" href="https://github.com/donymvarkey/covid-19-tracker.git">
                            <i className="bi-github h3 text-dark" role="img" aria-label="GitHub"></i>
                        </a>
                        
                    </Col>
                </Row>
            </Navbar.Brand>
        </div>
    )
}

export default NavBar;