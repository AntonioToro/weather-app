import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Madrid", country: "España"},
    {city: "Barcelona", country: "España"},
    {city: "Zafra", country: "España"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />