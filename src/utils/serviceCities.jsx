
const cities = [
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Barcelona", country: "España", countryCode: "ES"},
    {city: "Toledo", country: "España", countryCode: "ES"},
    {city: "Zafra", country: "España", countryCode: "ES"},
]

export const getCities = () => cities

export const getCountryNameByCountryCode = countryCode => (
    cities.filter(city => city.countryCode === countryCode)[0].country
)