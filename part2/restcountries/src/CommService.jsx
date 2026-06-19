import axios from "axios"

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

const getIndividual = (country) => {
    return (
        axios
            .get(`${baseUrl}/name/${country}`)
    )
}

export default getIndividual