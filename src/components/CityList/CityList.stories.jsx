import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'
import { WeatherContext } from './../../WheaterContext'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Barcelona", country: "España", countryCode: "ES"},
    {city: "Zafra", country: "España", countryCode: "ES"},
]

export const CityListExample = (args) => <WeatherContext><CityList {...args} /></WeatherContext>

CityListExample.args = {cities:cities, onClickCity: action("Click en city")}