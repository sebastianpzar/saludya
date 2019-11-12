import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Step from './Step';
import PlansTable from './PlansTable';

const App = () => {

    return(
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={Landing} />
                <Route path="/signup" exact render={(props) => <Step {...props} stepid={'0'} /> } />
                <Route path="/signup/plans" component={PlansTable}/>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;