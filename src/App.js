import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import { Cards, Cases, IndividualStates, Navbar } from './components'
import { fetchData, fetchCasesIndia, fetchIndividualStatesCases } from './api'

export default class App extends Component {
    state = {
        data: {},
        dataLocal: {},
        dataIndividualStates: {}
    }

    async componentDidMount () {
        const data = await fetchData();
        const dataLocal = await fetchCasesIndia();
        const dataIndividualStates = await fetchIndividualStatesCases()

        this.setState({
            data: data,
            dataLocal: dataLocal,
            dataIndividualStates: dataIndividualStates
        })
    }

    render() {
        const {data} = this.state;
        const {dataLocal} = this.state;
        const {dataIndividualStates} = this.state;
        console.log(dataIndividualStates)
        return (
            <div>
                <Navbar />
                <Cards data={data}/>
                <Cases data={dataLocal}/>
                <IndividualStates data={dataIndividualStates}/>
            </div>
        )
    }
}
