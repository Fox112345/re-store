import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import { Home, Card } from '../pages'
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={120}/>
            <Switch>
                <Route
                    path='/'
                    component={Home}
                    exact />
                <Route path='/card'
                       component={Card}/>
            </Switch>
        </main>
    )
};

export default App