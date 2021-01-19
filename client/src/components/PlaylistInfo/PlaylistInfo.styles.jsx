import styled from 'styled-components'

import { MainP, MainH1 } from '../typography/typography.components.js'

export const Container = styled.div`
	${({ theme: { css } }) => css.flexCenterCol}
	align-items: flex-start;
`

export const PlaylistTitle = styled(MainH1)`
	text-transform: uppercase;
`

export const LengthText = styled(MainP)``
