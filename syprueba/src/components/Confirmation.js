import React from 'react';
import { connect } from 'react-redux';

import '../css/confirmation.css';

class Confirmation extends React.Component{
    render(){
        return(
            <div className="ui container confirmation">
                <h1>Redux store</h1>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return({
    
    });
}

export default connect(mapStateToProps)(Confirmation);