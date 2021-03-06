import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from '../components/AppFrame'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"Sábado" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"Domingo" },
    { hour: 14, state:"rain", temperature:17, weekDay:"Lunes" },
    { hour: 10, state:"rain", temperature:17, weekDay:"Martes" },
]

const CityPage = props => {
    const city = "Madrid"
    const country = "España"
    const state = "clear"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container justifyContent="space-around" direction="column" spacing={2}>
                <Grid item container xs={12} justifyContent="center" alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container xs={12} justifyContent="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} wind={wind}/>
                </Grid>
                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
