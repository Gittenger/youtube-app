import React, { useState } from 'react'
import axios from 'axios'

import { Container, MainGrid } from './Display.styles'
import { tycomp } from '../typography/typography.components'

import PlaylistInfo from '../PlaylistInfo/PlaylistInfo.component'

const { MainP } = tycomp

const Display = () => {
	const [data, setData] = useState([''])
	const [isLoading, setIsLoading] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleClick = () => {
		setIsLoading(true)
		setIsLoaded(false)
		setData(['loading'])
		axios.get('http://localhost:7000/api/').then(res => {
			const youtubeData = res.data.data
			setData(youtubeData)
			setIsLoading(false)
			setIsLoaded(true)
		})
	}

	const DataMap = () => (
		<>
			{data.map((item, i) => (
				<PlaylistInfo key={i} {...item} />
			))}
		</>
	)

	return (
		<Container>
			<MainP>YOUTUBE CONTENT HERE</MainP>
			<MainP fontColor="dark">
				{isLoading ? 'LOADING' : isLoaded ? '' : 'WAITING'}
			</MainP>
			<MainGrid>{isLoaded ? <DataMap /> : ''}</MainGrid>
			<button onClick={handleClick}>CLICK</button>
		</Container>
	)
}

export default Display
