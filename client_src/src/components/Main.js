import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './Users';
import About from './About';
import InfoItem from './InfoItem';
import AddUser from './AddUser';
import EditUser from './EditUser';
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={ Users } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={ InfoItem } />
        </Switch>
    </main>
)

export default Main