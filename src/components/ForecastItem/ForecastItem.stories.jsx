import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem,
    argTypes: {
        hour: { control: { type: "number"}},
        state: {
            options: [
                "clouds",
                "clear",
                "rain",
                "snow",
                "drizzle",
                "thunderstorm"
            ],
            control: { type: 'radio' }
        },
        temperature: { control: { type: "number"}},
        weekDay: {
            options: [
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo"
            ],
            control: { type: 'radio' }
        }
    }
}

export const LunesSoleado = (args) => <ForecastItem {...args} />

LunesSoleado.args = {hour: 10, state: "clear", temperature: 23, weekDay:"Lunes"}