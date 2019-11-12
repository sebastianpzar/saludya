import React from 'react';
import {Link} from 'react-router-dom';

import '../css/card.css';

const Card = ( { content, children, layout }) => {
    switch(layout){
        case 1:  
            return(
                <div className="story-card horizontal">
                    <div className="story-card__content padding-right">
                        <h1>
                            {content.title}
                        </h1>
                        <p>
                            {content.text}
                        </p>
                        <Link to="/signup" className="ui large button"> Try it out </Link>
                    </div>
                    <img src={content.img} alt="" />
                </div>
            ); 
            break;
        case 2:  
            return(
                <div className="story-card horizontal">
                    <img src={content.img} alt="" />
                    <div className="story-card__content padding-left">
                        <h1>
                            {content.title}
                        </h1>
                        <p>
                            {content.text}
                        </p>
                        <Link to="/signup" className="ui large button"> Try it out </Link>
                    </div>
                </div>
            ); 
            break;
        case 3:  
            return(
                <div className="story-card">
                    <div className="story-card__content banner">
                        <h1 className="center-text">
                            {content.title}
                        </h1>
                        <p className="center-text">
                            {content.text}
                        </p>
                        <Link to="/signup" className="ui huge button"> Try it out </Link>
                    </div>
                </div>
            ); 
            break;
        default:
            return(
                <div className="story-card">
                    {children}
                </div>
            );
    }    
}

export default Card;