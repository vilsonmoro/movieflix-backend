import PrivateRoute from "core/components/Routes/PrivateRoute";
import Catalog from "pages/Catalog";
import Detail from "pages/Detail";
import Home from "pages/Home";


import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <PrivateRoute path="/catalog">
                <Catalog />
            </PrivateRoute>

            <PrivateRoute path="/movies/:movieId">
                <Detail />
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
);

export default Routes;