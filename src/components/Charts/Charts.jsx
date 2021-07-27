import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap'

const Charts = ({data: {data, dataLocal}}) => {
    const doughnutChartGlobal = (
        data.confirmed ? (
            <Doughnut
                data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                    },
                ],
                }}
                options={{
                legend: { display: false },
                title: { display: true, text: 'India' },
                }}
            />
        ) : null
    );
    const doughnutChartLocal = (
        dataLocal.confirmed ? (
            <Doughnut
                data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [dataLocal.confirmed.value, dataLocal.recovered.value, dataLocal.deaths.value],
                    },
                ],
                }}
                options={{
                legend: { display: false },
                title: { display: true, text: 'India' },
                }}
            />
        ) : null
    );
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={4} md={6}>
                    <p className="text-center">Global Stats</p>
                    {doughnutChartGlobal}
                </Col>
                <Col sm={4} md={6}>
                    <p className="text-center">Local Stats (India)</p>
                    {doughnutChartLocal}
                </Col>
            </Row>
            
        </Container>
    )
}

export default Charts;