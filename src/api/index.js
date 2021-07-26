import axios from 'axios'

const url = 'https://covid19.mathdro.id/api/'

export const fetchData = async () => {
    try {
        var { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        const modifiedData = {
            confirmed,
            recovered, 
            deaths, 
            lastUpdate
        }
        return modifiedData;
    } catch (error) {
        return error
    }
}

export const fetchCasesIndia = async () => {
    try {
        var { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(`${url}countries/india`);

        const modifiedData = {
            confirmed,
            recovered, 
            deaths, 
            lastUpdate
        }
        return modifiedData;
    } catch (error) {
        return error
    }
}

export const fetchIndividualStatesCases = async () => {
    try {
        var response = await axios.get(`${url}countries/india/confirmed`)
        console.log(response)
        // return(
        //     data.map(({provinceState, confirmed, recovered, deaths, active, lastUpdate}) => ({provinceState, confirmed, recovered, deaths, active, lastUpdate}))
        // )
        return(response);
    } catch (error) {
        return error
    }
}
