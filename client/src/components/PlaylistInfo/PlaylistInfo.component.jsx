import React from 'react'

import { Container, PlaylistTitle, LengthText } from './PlaylistInfo.styles'

const PlaylistInfo = ({ title, length, image }) => (
	<Container>
		<PlaylistTitle>{title}</PlaylistTitle>
		<LengthText size="s" fontColor="red">
			Playlist length: {length}
		</LengthText>
		<img src={image} alt="" />
	</Container>
)

export default PlaylistInfo
