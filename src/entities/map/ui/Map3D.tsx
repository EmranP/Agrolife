// import { Viewer, createWorldTerrainAsync } from 'cesium'
// import 'cesium/Build/Cesium/Widgets/widgets.css'
// import { FC, useEffect } from 'react'

// export const Map3D: FC = () => {
// 	useEffect(() => {
// 		const initializeViewer = async () => {
// 			const terrainProvider = await createWorldTerrainAsync()

// 			const viewer = new Viewer('cesiumContainer', {
// 				terrainProvider,
// 			})

// 			return () => {
// 				if (viewer) {
// 					viewer.destroy()
// 				}
// 			}
// 		}

// 		initializeViewer()
// 	}, [])
// 	return (
// 		<div
// 			id='cesiumContainer'
// 			style={{ width: '100%', height: '500px', marginBottom: 30 }}
// 		/>
// 	)
// }
