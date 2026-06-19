import { useEffect, useState } from "react"

import getIndividual from "./CommService"

const Details = (props) => {
    const matchedCntries = props.matchedCntries
    const [countryDetails, setCountryDetails] = useState(null)

    const country = matchedCntries[0];

    useEffect(() => {
        if(matchedCntries.length===1){
            getIndividual(country.toLowerCase())
            .then((response) => {
                setCountryDetails(response.data)
                console.log(response.data)
            })
        }
    }, [country])               //Only array in useEffect


    if(matchedCntries.length>10) {
        return (
            <>
                Too many matches, specify another filter 
            </>
        )
    }
    else if(matchedCntries.length>1){
        return (
            <>
                {matchedCntries.map((country) => <div key={country}>{country}</div>)}
            </>
        )
    }
    else if(matchedCntries.length===1){
        return (
            <Individual country = {matchedCntries[0]} details = {countryDetails}/> 
        )
    }
}

const Individual = ({country, details}) => {
    if(!details) return <div>Loading...</div>

    const languageArray = details.languages ? Object.values(details.languages) : []
    return(
        <>
            <h2>{country}</h2>
            <div>Capital {details.capital[0]}</div>
            <div>Area {details.area}</div>
            <h2>Languages</h2>
            <ul>
                {languageArray.map((language) => (<li>{language}</li>))}
            </ul>
            <img src={`${details.flags.png}`}></img>
        </>
    )
}

export default Details