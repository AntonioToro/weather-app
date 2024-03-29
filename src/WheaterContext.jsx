import React, { useReducer, useContext } from 'react'

const WheaterStateContext = React.createContext()

const WeatherDispatchContext = React.createContext()


const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_WEATHER':
            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return { ...state,  allWeather: newAllWeather }
        
        case 'SET_CHART_DATA':
            const chartDataCity = action.payload 
            const newAllChartData = { ...state.allChartData, ...chartDataCity }
            return { ...state, allChartData: newAllChartData }
        
        case 'SET_FORECAST_ITEM_LIST':
            const forecastItemListCity = action.payload 
            const newAllForecastItemList = { ...state.allForecastItemList, ...forecastItemListCity }
            return { ...state, allForecastItemList: newAllForecastItemList }
    
        default:
            return state
    }
}


const WeatherContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WheaterStateContext.Provider value={state}>
                { children }
            </WheaterStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

const useWeatherDispatchContext = () => {
    const dispatch = useContext(WeatherDispatchContext)

    if (!dispatch) {
        throw Error("Must set dispatch provider")
    }

    return dispatch
}

const useWheaterStateContext = () => {
    const state = useContext(WheaterStateContext)

    if (!state) {
        throw Error("Must set state provider")
    }

    return state
}

export { 
    WeatherContext, 
    useWeatherDispatchContext, 
    useWheaterStateContext 
}