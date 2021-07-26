import React from 'react'
import { Card, Container, Row, Col , Image} from 'react-bootstrap'
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return ("Loading...")
    }
    return (
        <Container>
            <Row>
                <Col>
                    <p className="h1">Global Rate</p>
                </Col>
            </Row>
            <Row className="p-2 gap-2">
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title className="fw-medium text-primary">Infected</Card.Title>
                            <Card.Subtitle className="mb-2 small fw-normal text-muted">Total COVID-19 infected people</Card.Subtitle>
                            <Card.Text className="display-3">
                                <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted small">{new Date(lastUpdate).toDateString()}</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title className="fw-medium text-success">Recovered</Card.Title>
                            <Card.Subtitle className="mb-2 fw-normal small text-muted">Total recoveries from COVID-19</Card.Subtitle>
                            <Card.Text className="display-3">
                                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted small">{new Date(lastUpdate).toDateString()}</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title className="fw-medium text-danger">Deaths</Card.Title>
                            <Card.Subtitle className="mb-2 fw-normal small text-muted">Total deaths from COVID-19</Card.Subtitle>
                            <Card.Text className="display-3">
                                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted small">{new Date(lastUpdate).toDateString()}</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cards;