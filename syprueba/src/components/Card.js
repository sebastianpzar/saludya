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

    // const className = (layout) => {
    //     console.log(layout);
    //     if(layout === 1) return 'layout-one story-card horizontal';
    //     if(layout === 2) return 'layout-two story-card horizontal';
    //     if(layout === 3) return 'layout-three story-card';
    //     return 'story-card';
    // }

    if (content.layout  === 1 || content.layout  === 2 || content.layout  === 3){
        console.log(content.layout);
        //console.log(className(content.layout));
        return(
            <div className={className}>
                <div className="story-card__content">
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
    }

    return(
        <div className="story-card">
            {children}
        </div>
    );
    

    // switch(content.layout){
    //     case 1:  
    //         return(
    //             <div className="story-card horizontal">
    //                 <div className="story-card__content padding-right">
    //                     <h1>
    //                         {content.title}
    //                     </h1>
    //                     <p>
    //                         {content.text}
    //                     </p>
    //                     <Link to="/signup" className="ui large button"> Try it out </Link>
    //                 </div>
    //                 <img src={content.img} alt="" />
    //             </div>
    //         ); 
    //         break;
    //     case 2:  
    //         return(
    //             <div className="story-card horizontal">
    //                 <img src={content.img} alt="" />
    //                 <div className="story-card__content padding-left">
    //                     <h1>
    //                         {content.title}
    //                     </h1>
    //                     <p>
    //                         {content.text}
    //                     </p>
    //                     <Link to="/signup" className="ui large button"> Try it out </Link>
    //                 </div>
    //             </div>
    //         ); 
    //         break;
    //     case 3:  
    //         return(
    //             <div className="story-card">
    //                 <div className="story-card__content banner">
    //                     <h1 className="center-text">
    //                         {content.title}
    //                     </h1>
    //                     <p className="center-text">
    //                         {content.text}
    //                     </p>
    //                     <Link to="/signup" className="ui huge button"> Try it out </Link>
    //                 </div>
    //             </div>
    //         ); 
    //         break;
    //     default:
    //         return(
    //             <div className="story-card">
    //                 {children}
    //             </div>
    //         );
    // }    
}

export default Card;