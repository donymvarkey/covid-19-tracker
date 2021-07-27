import React from 'react'
import { Container, Table } from 'react-bootstrap'

const IndividualStates = (data) => {
    if(!data.data.status) {
        return('Loading...')
    }
    const tableItems = data.data.data.map((item) => {
        return(
            <tbody>
                <tr>
                    <td>{item.provinceState}</td>
                    <td>{item.active}</td>
                    <td>{item.confirmed}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                </tr>
            </tbody>
        )
    })
    return (
        <Container className="p-4 gap-5">
            <Table className="table caption-top" bordered responsive>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Active Cases</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                {tableItems}
            </Table>

        </Container>
    )
}

export default IndividualStates