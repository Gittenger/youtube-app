import React from 'react'

import {
	Container,
	PlaylistTitle,
	LengthText,
	Thumb,
} from './PlaylistInfo.styles'

const PlaylistInfo = ({ title, length, image }) => (
	<Container>
		<PlaylistTitle fontColor="black">{title}</PlaylistTitle>
		<LengthText size="s" fontColor="red">
			Playlist length: {length}
		</LengthText>
		<Thumb src={image} alt="" />
	</Container>
)

export default PlaylistInfo
