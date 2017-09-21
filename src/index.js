import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';
import "./App.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StorePicker}/>
                <Route path='/store/:storeId' component={App}/>

                {/* No Match  */}
                <Route component = {NotFound}/>
            </Switch>
        </BrowserRouter>
    )
    
}

render(<Root />, document.getElementById('root'));
