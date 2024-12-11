import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Weather {
    visibility: number;
    id: number;
    name: string;
    dt: number;
    updatedAt: number;
    coord: {
        lat: number;
        lon: number;
        p0: number;
    };
    main: {
        pressure: number;
        humidity: number;
        feels_like: number;
        temp: number;
    };
    weather: {
        icon: string;
        description: string;
    }[];
    wind: {
        speed: number;
    };
    sys: {
        sunset: number;
        sunrise: number;
        country: string;
    };
}

interface CityState {
    cityList: Weather[];
}

const loadFromLocalStorage = (): Weather[] => {
    try {
        const data = localStorage.getItem('cityList');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Failed to load city list from LocalStorage:', error);
        return [];
    }
};

const saveToLocalStorage = (cityList: Weather[]) => {
    try {
        localStorage.setItem('cityList', JSON.stringify(cityList));
    } catch (error) {
        console.error('Failed to save city list to LocalStorage:', error);
    }
};

const initialState: CityState = {
    cityList: loadFromLocalStorage(),
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCityWeather: (state, action: PayloadAction<Weather & { name: string }>) => {
            const newCity = action.payload;

            const existingCity = state.cityList.find(
                (city) => city.id === newCity.id
            );

            if (!existingCity) {
                state.cityList.push(newCity);
                saveToLocalStorage(state.cityList);
            }
        },
        updateCityWeather: (state, action: PayloadAction<Weather>) => {
            const updatedCity = {
                ...action.payload,
                updatedAt: Date.now() / 1000,
            };

            const cityIndex = state.cityList.findIndex(
                (city) => city.id === updatedCity.id
            );

            if (cityIndex !== -1) {
                state.cityList[cityIndex] = updatedCity;
                saveToLocalStorage(state.cityList);
            }
        },
        removeCityWeather: (state, action: PayloadAction<number>) => {
            state.cityList = state.cityList.filter(
                (city) => city.id !== action.payload
            );
            saveToLocalStorage(state.cityList);
        },
    },
});

export const { addCityWeather, updateCityWeather, removeCityWeather } = citySlice.actions;

export default citySlice.reducer;
