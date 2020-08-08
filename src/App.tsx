import React from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useRoutes } from "hookrouter";
import { Store, defaultStore } from "./interfaces";
import { Provider } from "./store";
import Background from "./components/Background";
import Home from "./routes/Home";
import Game from "./routes/Game";
const routes = {
  "/": () => <Home />,
  "/game": () => <Game />
};

const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  const [state, dispatch] = React.useState<Store>(defaultStore);

  return (
    <React.Fragment>
      <Background />

      <Provider state={state} dispatch={dispatch}>
        {routeResult}
      </Provider>
    </React.Fragment>
  );
};
export default App;
