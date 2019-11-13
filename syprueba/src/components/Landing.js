import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';


const Landing = (props) => {
    console.log(props.content);

    const renderCards = props.content.map((card) => {
        return(
            <Card key={card.id} content={card} />
        );
    });

    return(
        <div className="">
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