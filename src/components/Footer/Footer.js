import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <Navbar className="p-2" expand="lg" variant="light" bg="white">
                <p className=" text-dark text-end ">
                    Credits: <a className="text-decoration-none text-primary" rel="noreferrer" href="https://github.com/mathdroid/covid-19-api" target="_blank">mathdroid/covid-19-api</a>
                </p>
            </Navbar>
        </Container>
    )
}

export default Footer;