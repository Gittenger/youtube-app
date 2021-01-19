import React from 'react'

import {} from './Playlist.styles'
import ComponentsIndex from '../components.index.js'

const Playlist = ({
	location: {
		state: { title, image, url, length },
	},
}) => {
	const {
		tycomp: { MainP, MainH1 },
	} = ComponentsIndex

	return (
		<div>
			<MainH1 fontColor="red">{title}</MainH1>
			<MainP fontColor="black">{length} video(s)</MainP>
			<MainP fontColor="dark" size="s">
				Link:
				<a href={url} target="_blank" rel="noreferrer" style={{ color: 'blue' }}>
					{url}
				</a>
			</MainP>
			<img src={image} alt="" />
		</div>
	)
}

export default Playlist
