import React from "react";
import { useRoutes } from "hookrouter";
import { Store, defaultStore } from "./interfaces";
import { Provider } from "./store";
import {Background} from "./components";
import Home from "./routes/Home";
import Game from "./routes/Game";


const App: React.FC = () => {
  const routes = useRoutes({
    "/": () => <Home />,
    "/game": () => <Game />
  });
  const [state, dispatch] = React.useState<Store>(defaultStore);

  return (
    <React.Fragment >
      <Background />
      <Provider state={state} dispatch={dispatch}>
        {routes}
      </Provider>
    </React.Fragment>
  );
};
export default App;
