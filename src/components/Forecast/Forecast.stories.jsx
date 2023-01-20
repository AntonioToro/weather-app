import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    componente: Forecast
}

const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"Sábado" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"Domingo" },
    { hour: 14, state:"rain", temperature:17, weekDay:"Lunes" },
    { hour: 10, state:"rain", temperature:17, weekDay:"Martes" },
]

export const ForecastExample = (args) => (<Forecast {...args} />)

ForecastExample.args = {forecastItemList: forecastItemList}