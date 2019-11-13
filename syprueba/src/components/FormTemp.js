import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import '../css/formtemp.css';

const FormTemp = ({content, children}) => {

    return(
        <div className="ui container">
            <div className="formtemp">
                <h5>STEP { content.step } OF 3</h5>
                <h1> { content.title } </h1>
                

                {children}
                
                <p>HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.</p>
            </div>
        </div>
    );
    
}

const mapStetToProps = (state, ownProps) => {
    return({
        content: state.stepsContent[ownProps.stepid]
    });
}

export default connect(mapStetToProps)(FormTemp);