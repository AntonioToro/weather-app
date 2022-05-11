import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import CityList from './CityList'

const cities = [
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Barcelona", country: "España", countryCode: "ES"},
    {city: "Toledo", country: "España", countryCode: "ES"},
    {city: "Zafra", country: "España", countryCode: "ES"},
]

test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} />)

    const cityListComponent = await findAllByRole("button")

    expect(cityListComponent).toHaveLength(4)
})

test("CityList click on item", async () => {
    // simulamos la accion click sobre un item
    // usamos una función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    // Vamos a simular la accion con fireEvent (parte de la libreria testing-library)
    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})