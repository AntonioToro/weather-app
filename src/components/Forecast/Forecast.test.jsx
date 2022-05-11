import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"Sábado" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"Domingo" },
    { hour: 14, state:"rain", temperature:17, weekDay:"Lunes" },
    { hour: 10, state:"rain", temperature:17, weekDay:"Martes" },
]

test('Forecast render ', async () => {
    // findAllByTestId nos va a permitir encontrar cada item con esa marca

    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})
