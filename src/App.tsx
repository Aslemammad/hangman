import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from './interfaces';
import { Provider } from './store';
import Background from './components/Background';
import Home from './routes/Home';

const App: React.FC = () => {
	const [
		state,
		dispatch
	] = React.useState<Store | undefined>(undefined);
	return (
		<React.Fragment>
			<Background />
			<Provider state={state} dispatch={dispatch}>
				<Router>
					<Route path='/' exact component={Home} />
					<Route path='/game' exact />
				</Router>
			</Provider>
		</React.Fragment>
	);
};
export default App;
