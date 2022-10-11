import { useEffect, useDebugValue } from 'react'
import axios from 'axios'
import 'moment/locale/es'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from '../utils/urls'
import getChartData from '../utils/transform/getChartData'
import getForecatItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'

const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {

    const { city, countryCode } = useParams()
    
    useDebugValue(`useCityPage ${city}`)
    
    useEffect(() => {
        const cityCode = getCityCode(city, countryCode)
        
        const getForecast = async () =>{
            const url = getForecastUrl({city, countryCode})

            try {
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)

                onSetChartData({ [cityCode]: dataAux})

                const forecastItemListAux = getForecatItemList(data)

                onSetForecastItemList({ [cityCode]: forecastItemListAux })
            } catch (error) {
                console.log(error)
            }
        }

        if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
            getForecast()
        }

    }, [ city, countryCode, onSetChartData, onSetForecastItemList, allChartData, allForecastItemList ])

    return [city, countryCode]
}

export default useCityPage