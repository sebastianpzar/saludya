import React from 'react';
import { Link } from 'react-router-dom';

import '../css/plan-table.css';

class PlansTable extends React.Component {
    state = {plans: [{name: "Basico Individual"}, 
                    {name: "Basico Familiar"}, 
                    {name: "Plus Individual"}, 
                    {name: "Plus Familiar"}],
            selectedPlan: 0,
            classes: ["","","",""]
            };
    
    onPlanSelect = (plan) => {
        console.log(plan);
        this.setState({selectedPlan: plan}, ()=>{console.log(this.state)});
        const newClasses = this.state.classes.map((el, index) => {return index === plan ? "selected" : ""});
        this.setState({classes: newClasses}, ()=>{console.log(this.state)});
    }


    render(){
        return(
            <div className="ui container">
                <h5>STEP 1 OF 3</h5>
                <h1>Choose the plan thats right for you</h1>
                <p>Downgrade or upgrade at any time</p>
                <table className="ui very basic center aligned table visible">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                <div className={"selectPlan " + this.state.classes[0]} onClick={() => this.onPlanSelect(0)}>
                                    <div className="ui button square">
                                        <div className="selectPlan__name">
                                            <h5>{this.state.plans[0].name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className={"selectPlan " + this.state.classes[1]} onClick={() => this.onPlanSelect(1)}>
                                    <div className="ui button square">
                                        <div className="selectPlan__name">
                                            <h5>{this.state.plans[1].name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className={"selectPlan " + this.state.classes[2]} onClick={() => this.onPlanSelect(2)}>
                                    <div className="ui button square">
                                        <div className="selectPlan__name">
                                            <h5>{this.state.plans[2].name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className={"selectPlan " + this.state.classes[3]} onClick={() => this.onPlanSelect(3)}>
                                    <div className="ui button square">
                                        <div className="selectPlan__name">
                                            <h5>{this.state.plans[3].name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="left aligned">Precio por mes</td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                        </tr>
                        <tr>
                            <td className="left aligned">Orientacion medica telefonica ilimitada</td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                        </tr>
                        <tr>
                            <td className="left aligned">Orientacion medica telefonica ilimitada</td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                        </tr>
                        <tr>
                            <td className="left aligned">Orientacion medica telefonica ilimitada</td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                        </tr>
                        <tr>
                            <td className="left aligned">Orientacion medica telefonica ilimitada</td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                            <td> X </td>
                        </tr>
                    </tbody>
                </table>
                <p>HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.</p>
                <Link to="/signup/registration" className="ui large button step-btn">Continue</Link>
            </div>
        );
    }
    
}

export default PlansTable;