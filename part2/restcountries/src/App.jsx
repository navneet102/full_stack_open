import { useState, useEffect } from "react"
import axios from "axios"

import Details from "./Details"

function App() {
  const [ctryName, setCtryName] = useState('')

  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

  const [countries, setCountries] = useState([])
  const [matchedCntries, setMatchedCntries] = useState([])

  useEffect(() => {
    axios
      .get(`${baseUrl}/all`)
      .then((response) => {
        setCountries(response.data.map(country => country.name.common))
        // console.log(response)
      })
  }, [])

  const handleCtryChange = (event) => {
    const newCtryName = event.target.value 
    setCtryName(newCtryName)

    if(newCtryName === ""){
      setMatchedCntries([])
    }
    else{
      setMatchedCntries(countries.filter((countryName) => countryName.toLowerCase().startsWith(newCtryName.toLowerCase())))
    }
  }

  return (
    <>
      <form>
        find countries <input value={ctryName} style={{marginLeft: 5}} onChange={handleCtryChange} />
      </form> 
      <Details matchedCntries={matchedCntries}/>
    </>
  )
}

export default App