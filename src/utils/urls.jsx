const appid = "b646ec2cf586bde7693454a318d0ecef"

export const getWeatherUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)