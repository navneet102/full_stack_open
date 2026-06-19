import { useState } from "react"
import getIndividual from "./CommService"

const Individual = (props) => {
    const country = props.country
    const [countryDetails, setCountryDetails] = useState(null)

    getIndividual(country)
    .then((response) => {
        setCountryDetails(response.data)
    })

    return (
        <>
        </>
    )
}

export default Individual