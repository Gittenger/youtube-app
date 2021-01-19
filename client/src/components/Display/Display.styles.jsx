import styled from 'styled-components'

export const Container = styled.div`
	${({ theme: { styles } }) => styles.flexCenterCol};
`

export const MainGrid = styled.div`
	display: grid;
	width: 90vw;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-template-rows: repeat(auto-fill, 1fr);
	grid-gap: 2rem;
`
