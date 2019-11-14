import React from 'react';
import { connect } from 'react-redux';

import '../css/confirmation.css';

class Confirmation extends React.Component{
    render(){
        return(
            <div className="ui container confirmation">
                <h1>Confirmation</h1>
                <p>Check dev tools for redux store values</p>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return({
        regForm: state.form.regForm,
        payForm: state.form.payForm,
        plan: state.plan
    });
}

export default connect(mapStateToProps)(Confirmation);