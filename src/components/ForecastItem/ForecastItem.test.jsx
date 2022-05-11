import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render ', async () => {
    const hour = 10
    const weekDay = "Lunes"
    const temperature = 23

    const { findByText } = render(<ForecastItem hour={hour} state="clear" temperature={temperature} weekDay={weekDay} />)

    const hourText = await findByText(hour)
    const weekDayText = await findByText(weekDay)
    const temperatureText = await findByText(/23/)

    expect(hourText).toHaveTextContent(hour)
    expect(weekDayText).toHaveTextContent(weekDay)
    expect(temperatureText).toHaveTextContent(`${temperature} °`)
})
