import React from 'react';

import Card from './Card';
import { connect } from 'react-redux';

let i = 2;

const Landing = (props) => {
    const renderCards = props.content.map((card) => {
            if (i===2){
                i = 1;
            } else {
                i = 2;
            }

            return(
                <Card key={card.id} content={card} layout={i} />
            );
        });

        return(
            <div className="">
                <Card layout={3} content={{title: "Unlimited movies, TV shows, and more.", text: "Watch anywhere. Cancel anytime."}}/>
                {renderCards}
            </div>
        );
}
const mapStateToProps = (state) => {
    return({
        content: state.landingContent
    });
}

export default connect(mapStateToProps)(Landing);