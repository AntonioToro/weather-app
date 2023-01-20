import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { render, waitFor, fireEvent, screen } from "@testing-library/react"
import CityList from './CityList'
import { WeatherContext } from '../../WheaterContext'

const urlCallWheater = new RegExp('https://api.openweathermap.org/data/2.5/weather')
const responseCallWheater = {
    main:{
        temp: 285.99,
        humidity: 56
    },
    wind: {
        speed: 4.63
    },
    weather:[
        {
            main: "Clouds"
        }
    ]
}

const cities = [
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Barcelona", country: "España", countryCode: "ES"},
    {city: "Toledo", country: "España", countryCode: "ES"},
    {city: "Zafra", country: "España", countryCode: "ES"},
]

// simulamos la accion click sobre un item
// usamos una función "mock"
const fnClickOnItem = jest.fn()
const mock = new MockAdapter(axios)

const renderCityList = () => (
    render(
        <WeatherContext>
            <CityList cities={cities} onClickCity={fnClickOnItem} />
        </WeatherContext>
    )
)
    
    describe('CityList Component Test', () => {

        afterEach(() => {
            mock.reset()
        })
        
        it("Component render", async () => {  
            mock.onGet(urlCallWheater).reply(200,responseCallWheater)
            const cityListComponent = renderCityList() 
            expect(cityListComponent).toBeDefined()

            await waitFor(() => {
                cities.forEach(({city}) => {
                    const cityListTitle = screen.getAllByText(new RegExp(city, "i"))
                    expect(cityListTitle).toHaveLength(1)
                })
                const temperature = screen.getAllByText('13')
                expect(temperature).toHaveLength(4)
            })
        })
        
    // TODO: Hacer casos de pruebas: cuando se hace click en el elemento y cuando falla la llamada.
    /*it("CityList click on item", async () => {
        await waitFor(() => {
            renderCityList()
            const items = screen.findAllByRole("button")
    
            // Vamos a simular la accion con fireEvent (parte de la libreria testing-library)
            fireEvent.click(items[0])
    
            expect(fnClickOnItem).toHaveBeenCalledTimes(1)
        })
    })*/
})


/* 
    test(, async () => {
    

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    

    

    
}) */