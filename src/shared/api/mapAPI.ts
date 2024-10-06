import axios from 'axios'

const OPEN_WEATHER_MAP_API_KEY = process.env.WEATHER_MAP_API_KEY // Replace with your API key

// Function to fetch climate data using OpenWeatherMap API
export const fetchClimateData = async (
	lat: number,
	lon: number
): Promise<string> => {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather`,
			{
				params: {
					lat,
					lon,
					appid: OPEN_WEATHER_MAP_API_KEY,
				},
			}
		)

		return response.data.weather[0]?.description || 'Unknown climate'
	} catch (error) {
		console.error('Error fetching climate data:', error)
		throw new Error('Failed to fetch climate data')
	}
}

// Function to fetch soil quality data using SoilGrids API
export const fetchSoilData = async (
	lat: number,
	lon: number
): Promise<string> => {
	try {
		const response = await axios.get(
			`https://rest.isric.org/soilgrids/v2.0/properties/query`,
			{
				params: {
					lat,
					lon,
					depth: '0-5cm',
					property: 'phh2o', // Fetching pH value as an example of soil quality
				},
			}
		)

		return response?.data?.properties?.phh2o?.mean ?? 'Unknown soil quality'
	} catch (error) {
		console.error('Error fetching soil data:', error)
		throw new Error('Failed to fetch soil data')
	}
}
