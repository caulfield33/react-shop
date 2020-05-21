import React from 'react';
import {ConnectedRouter} from "connected-react-router";
import store, {history} from "./store";
import {Provider} from 'react-redux';
import LoadingComponent from "./components/LoadingComponent";
import {Route, Switch} from "react-router";
import NotFoundPage from "./containers/NotFoundPage";
import ProtectedRoute, {appRoutes} from "./components/ProtectedRoute";

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LoadingComponent/>
                <Switch>

                    {appRoutes.map(route => (
                        <ProtectedRoute
                            isPublic={route.isPublic}
                            allowedForLogged={route.allowedForLogged}
                            path={route.path}
                            requiredRoles={route.requiredRoles}
                            Component={route.component}
                            exact/>
                    ))}

                    <Route component={NotFoundPage}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
