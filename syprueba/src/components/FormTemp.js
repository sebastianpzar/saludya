import React from 'react';
import { Link } from 'react-router-dom';

import '../css/formtemp.css';

const FormTemp = (props) => {

    return(
        <div className="ui container">
            <div className="formtemp">
                <h5>STEP 2 OF 3</h5>
                <h1>Sign up to start your membership</h1>
                <p>Just two more steps and you're done! We hate paperwork, too.</p>

                {props.children}
                
                <p>HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.</p>
            </div>
        </div>
    );
    
}

export default FormTemp;