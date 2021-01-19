import styled from 'styled-components'

import { MainP, MainH1 } from '../typography/typography.components'

export const Container = styled.div`
	${({ theme: { styles } }) => styles.flexCenterCol}
	align-items: flex-start;
`

export const PlaylistTitle = styled(MainH1)`
	text-transform: uppercase;
`

export const LengthText = styled(MainP)``

export const Thumb = styled.img`
	width: 100%;
`
