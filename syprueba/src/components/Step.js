import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/step.css';


const Step = ( {content, stepid} ) => {
    //console.log(props);
    return(
        <div className="ui container step-padding">
            <div className="step-container">
                <div className="step-logo">
                    <span style={{fontSize: '3em', color: 'Tomato'}}>
                        <i className="far fa-check-circle"></i>
                    </span>
                </div>
                <div className="step-heading">
                    <h5>STEP { content.step } OF 3</h5>
                    <h1>{content.title}</h1>
                </div>
                <div className="step-body">
                    {content.body}
                </div>
                <Link to={content.btnPath} className="ui large button step-btn">{content.btnText}</Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        content: state.stepsContent[ownProps.stepid]
    });
}

export default connect(mapStateToProps)(Step);