import GlobalStyles from './styles/global.styles'
import { Route } from 'react-router-dom'

import ComponentsIndex from './components/components.index.js'

const { Display, Playlist } = ComponentsIndex

function App() {
	return (
		<>
			<GlobalStyles />
			<Route exact path="/" component={Display} />
			<Route exact path="/playlist/:playlistName" component={Playlist} />
		</>
	)
}

export default App
