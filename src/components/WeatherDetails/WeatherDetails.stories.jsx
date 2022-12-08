import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
    title: "WeatherDetails",
    component: WeatherDetails,
    argTypes: {
        humidity: { control: { type: "number"}},
        wind: { control: { type: "number"}},
    }
}

export const WeatherDetailsExample = (args) => <WeatherDetails {...args} />

WeatherDetailsExample.args = {humidity: 10, wind: 9}