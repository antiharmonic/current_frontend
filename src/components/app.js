import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

let api_url = "http://http://192.168.1.117:8091"

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
			</Router>
		</main>
	</div>
);

export default App;
