import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Step from './Step';
import PlansTable from './PlansTable';
import FormTemp from './FormTemp';
import RegForm from './RegForm';
import PayForm from './PayForm';
import Confirmation from './Confirmation';

const App = () => {

    return(
        <Router history={history}>
            <div>
                <Header />
                <Route path="/" exact component={Landing} />
                <Route path="/signup" exact render={(props) => <Step {...props} stepid={'0'} /> } />
                <Route path="/signup/plans" component={PlansTable}/>
                <Route path="/signup/registration" exact render={(props) => <Step {...props} stepid={'1'} /> } />
                <Route path="/signup/regform" exact render={(props) => <FormTemp {...props} stepid={'1'} > <RegForm />  </FormTemp>} />
                <Route path="/signup/payment" exact render={(props) => <Step {...props} stepid={'2'} /> } />
                <Route path="/signup/payForm" exact render={(props) => <FormTemp {...props} stepid={'2'} > <PayForm/>  </FormTemp>} />
                <Route path="/signup/confirmation" exact component={Confirmation} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;