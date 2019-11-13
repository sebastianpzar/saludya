import React from 'react';

const contentArray = 
[
    {id: 0, step: 1, title: "Choose your plan.", btnText: "SEE THE PLANS", btnPath: "/signup/plans", body: <div><i className="fas fa-check" /><p>No commitments, cancel anytime.</p><i className="fas fa-check" /><p>Everything on Netflix for one low price.</p><i className="fas fa-check" /><p>Unlimited viewing on all your devices.</p></div>},
    {id: 1, step: 2, title: "Create your account.", btnText: "CONTINUE", btnPath: "/signup/regForm", body: <p>Netflix is personalized for you. Use your email and create a password to watch Netflix on any device at any time.</p>},
    {id: 2, step: 3, title: "Set up your payment.", btnText: "CREDIT OR DEBIT CARD", btnPath: "/signup/payForm", body: <p>Your membership starts as soon as you set up payment. <br/><br/>No commitments. <br/>Cancel online at anytime.</p>}
];


export default (state = contentArray, action) => {
    switch(action.type){
        case 'ADD_STEP_CONTENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

