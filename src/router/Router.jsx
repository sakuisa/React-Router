import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exactを入れることで完全一致。入れないと全てのpathがHomeになる */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* render関数はデフォルトpropsを受け取っている。 */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/Page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
