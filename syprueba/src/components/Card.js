import React from 'react';
import {Link} from 'react-router-dom';

import '../css/card.css';

const Card = ( { content, children }) => {

    var className = "story-card";
    switch(content.layout){
        case 1:
            className = "layout-one story-card horizontal";
            break;
        case 2:
            className = "layout-two story-card horizontal";
            break;
        case 3:
            className = "layout-three story-card";
            break;
        default:
            break;
    }


    if (content.layout  === 1 || content.layout  === 2 || content.layout  === 3){
        console.log(content.layout);
        //console.log(className(content.layout));
        return(
            <div className={className}>
                <div className="story-card__wrapper">
                    <div className="story-card__content">
                        <h1>
                            {content.title}
                        </h1>
                        <p>
                            {content.text}
                        </p>
                        <Link to="/signup" className="ui large button">PRUEBALO </Link>
                    </div>
                    <div className="color-overlay"></div>
                    <div className="img-container">
                        <img src={content.img} alt="" />  
                    </div>
                </div>
                
            </div>
        ); 
    }

    return(
        <div className="story-card">
            <div className="story-card__wrapper">
                {children}
            </div>
        </div>
    );
    

}

export default Card;