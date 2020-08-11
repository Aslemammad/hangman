import React from 'react';
import { useRoutes } from 'hookrouter';
import Sound from 'react-sound';
import { Store, defaultStore } from './interfaces';
import { Provider } from './store';
import { Background } from './components';
import { Music } from './components/assets';
import Home from './routes/Home';
import Game from './routes/Game';

const App: React.FC = () => {
	const routes = useRoutes({
		'/': () => <Home />,
		'/game': () => <Game />
	});
	const [
		state,
		dispatch
	] = React.useState<Store>(defaultStore);
	return (
		<React.Fragment>
			<Background />
			<Provider state={state} dispatch={dispatch}>
				<Sound url={Music} playStatus={state.sound ? 'PLAYING' : 'PAUSED'} volume={40} />

				{routes}
			</Provider>
		</React.Fragment>
	);
};
export default App;
