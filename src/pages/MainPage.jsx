import React from 'react'
import { useNavigate } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import { getCities } from '../utils/serviceCities'

const MainPage = () => {
    const navigate = useNavigate() 

    const onClickHandler = React.useCallback((city, countryCode) => {
        // navigate permite alterar la URL por programación
        navigate(`/city/${countryCode}/${city}`)
    }, [navigate])

    return (
        <AppFrame>
           <Paper elevation={3}>
                <CityList 
                    cities={getCities()} 
                    onClickCity={onClickHandler} />
           </Paper>
        </AppFrame>
    )
}

export default MainPage
