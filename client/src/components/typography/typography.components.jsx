import styled, { css } from 'styled-components'
import { device } from '../../styles/css/utils.styles'
import colors from '../../styles/colors'

const propsOptions = {
	shared: {
		color: {
			red: css`
				color: ${colors.red};
			`,
			dark: css`
				color: ${colors.dark};
			`,
			black: css`
				color: ${colors.black};
			`,
		},
	},

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
	},
}

const colorOption = ({ fontColor }) =>
	fontColor === 'red' || fontColor === 'dark' || fontColor === 'black'
		? propsOptions.shared.color[fontColor]
		: ''

export const MainP = styled.p`
	font-family: var(--fontMain);
	font-weight: 400;

	${({ size }) =>
		size === 's' ? propsOptions.MainP.size.s : propsOptions.MainP.size.m}

	${colorOption}
`

export const MainH1 = styled.h1`
	font-family: var(--fontHeading);
	font-size: 5rem;
	font-weight: 700;

	${device.tabletLand} {
		font-size: 3.5rem;
	}

	${colorOption}
`

export const tycomp = {
	MainP,
	MainH1,
}

export default tycomp
