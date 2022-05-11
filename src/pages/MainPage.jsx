import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'

const cities = [
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Barcelona", country: "España", countryCode: "ES"},
    {city: "Toledo", country: "España", countryCode: "ES"},
    {city: "Zafra", country: "España", countryCode: "ES"},
]

const MainPage = props => {
    const history = useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programación
        history.push("/city")
    }

    return (
        <AppFrame>
           <Paper elevation={3}>
            <CityList 
                    cities={cities} 
                    onClickCity={onClickHandler} />
           </Paper>
        </AppFrame>
    )
}

export default MainPage
