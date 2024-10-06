// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { API_KEY_NASA } from '../../../shared/api/nasaAPI'

// const MARS_WEATHER_API = 'https://api.nasa.gov/insight_weather/'
// const MARS_PHOTO_API =
// 	'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'

// type MarsWeather = {
// 	sol: number
// 	temperature: number
// 	windSpeed: number
// 	pressure: number
// }

// type MarsPhoto = string

// const MarsMap: React.FC = () => {
// 	const [marsWeather, setMarsWeather] = useState<MarsWeather | null>(null)
// 	const [marsPhotos, setMarsPhotos] = useState<MarsPhoto[]>([])

// 	useEffect(() => {
// 		// Получение погодных данных с Марса
// 		const fetchMarsWeather = async () => {
// 			try {
// 				const response = await axios.get(MARS_WEATHER_API, {
// 					params: { api_key: API_KEY_NASA, feedtype: 'json', ver: '1.0' },
// 				})

// 				const sol = response.data.sol_keys[0]
// 				const solData = response.data[sol]

// 				setMarsWeather({
// 					sol,
// 					temperature: solData.AT.av,
// 					windSpeed: solData.HWS.av,
// 					pressure: solData.PRE.av,
// 				})
// 			} catch (error) {
// 				console.error('Ошибка при получении данных с Марса', error)
// 			}
// 		}

// 		fetchMarsWeather()

// 		// Инициализация Yandex карты для отображения карты Марса
// 		const ymaps = (window as any).ymaps
// 		ymaps.ready(() => {
// 			const map = new ymaps.Map('mars-map', {
// 				center: [4.5, 137.4], // Координаты условного центра Марса
// 				zoom: 3,
// 			})

// 			map.geoObjects.add(
// 				new ymaps.Placemark([4.5, 137.4], {
// 					balloonContent: 'Центр Марса',
// 				})
// 			)
// 		})
// 	}, [])

// 	// Получение фотографий с марсохода
// 	useEffect(() => {
// 		const fetchMarsPhotos = async () => {
// 			try {
// 				const response = await axios.get(MARS_PHOTO_API, {
// 					params: { sol: 1000, api_key: API_KEY_NASA },
// 				})

// 				setMarsPhotos(response.data.photos.map((photo: any) => photo.img_src))
// 			} catch (error) {
// 				console.error('Ошибка при получении фотографий с Марса', error)
// 			}
// 		}

// 		fetchMarsPhotos()
// 	}, [])

// 	return (
// 		<div>
// 			<h1>Карта Марса</h1>
// 			<div id='mars-map' style={{ width: '100%', height: '500px' }}></div>

// 			{/* Показ погодных данных с Марса */}
// 			{marsWeather && (
// 				<div>
// 					<h2>Погода на Марсе (Sol {marsWeather.sol})</h2>
// 					<p>Температура: {marsWeather.temperature} °C</p>
// 					<p>Скорость ветра: {marsWeather.windSpeed} м/с</p>
// 					<p>Давление: {marsWeather.pressure} Па</p>
// 				</div>
// 			)}

// 			{/* Показ фотографий с Марса */}
// 			<h2>Фотографии с Марса</h2>
// 			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
// 				{marsPhotos.map((photo, idx) => (
// 					<img
// 						key={idx}
// 						src={photo}
// 						alt='Mars'
// 						style={{ width: '200px', margin: '10px' }}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default MarsMap
