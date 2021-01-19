import React from 'react'

import {
	Container,
	PlaylistTitle,
	LengthText,
	Thumb,
} from './PlaylistInfo.styles'

const PlaylistInfo = ({ title, length, image, id }) => (
	<Container
		to={{
			pathname: '/playlist/my-playlist-name',
			state: {
				url: `https://www.youtube.com/playlist?list=${id}`,
				title,
				length,
				image,
			},
		}}
	>
		<PlaylistTitle fontColor="black">{title}</PlaylistTitle>
		<LengthText size="s" fontColor="red">
			Playlist length: {length}
		</LengthText>
		<Thumb src={image} alt="" />
	</Container>
)

export default PlaylistInfo
