import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Route1 from './route1'

const Routes = (
    <Switch>
        <Route exact path="/">
            <Redirect to="/route1" />
        </Route>
        <Route exact path="/route1" component={Route1} />
    </Switch>
)

export default Routes;