import styled, { css } from 'styled-components'
import { device } from '../../styles/css/utils.styles'
import colors from '../../styles/colors'

const typeOptions = {
	MainP: {
		size: {
			s: css`
				font-size: 2.5rem;

				${device.tabletLand} {
					font-size: 2rem;
				}
			`,
			m: css`
				font-size: 3.5rem;

				${device.tabletLand} {
					font-size: 2.5rem;
				}
			`,
		},
		color: {
			red: css`
				color: ${colors.red};
			`,
			dark: css`
				color: ${colors.dark};
			`,
		},
	},
}

export const MainP = styled.p`
	font-family: var(--fontMain);
	font-weight: 400;

	${({ size }) =>
		size === 's' ? typeOptions.MainP.size.s : typeOptions.MainP.size.m}

	${({ fontColor }) =>
		fontColor === 'red'
			? typeOptions.MainP.color.red
			: fontColor === 'dark'
			? typeOptions.MainP.color.dark
			: ''}
`

export const MainH1 = styled.h1`
	font-family: var(--fontHeading);
	font-size: 5rem;
	font-weight: 700;

	${device.tabletLand} {
		font-size: 3.5rem;
	}
`

export const tycomp = {
	MainP,
	MainH1,
}

export default tycomp
