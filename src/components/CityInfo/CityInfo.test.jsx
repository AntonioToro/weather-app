import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'


test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Madrid"
    const country = "España"
    // Render: renderiza el componnte y retorna una seria de funciones de utilidad
    // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    // Vamos a analizar su resultado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    // Assert
    // findAllByRole nos va a buscar (en este caso) todos los componentes que sean
    // "heading" => h1 h2 h3 ... etc.
    // El resultado es un array de componentes (cityAndCountryComponent)
    const cityAndCountryComponent = await findAllByRole("heading")

    // ¿Cuando el test va a ser correcto?
    // Definicion:
    // Cuando en el primer elemento (heading) se enecuentre la ciudad "Madrid"
    // y cuando en el seegundo elemento se encuentre el pais "España"

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)

    // Si estas condiciones se cumplen (expect), el test esta "ok"
})