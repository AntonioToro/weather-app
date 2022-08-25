const appid = "fdb503f509462933235611828b891ff4"

export const getWeatherUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)