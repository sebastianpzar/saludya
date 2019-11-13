import React from 'react';

import { Field, reduxForm } from 'redux-form';
import history from './history';


class PayForm extends React.Component {
    renderErrror({ error, touched }){
        if (touched && error){
            return(
                <div style={{color: 'red'}}>{error}</div>
            );
        }
    }


    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderErrror(meta)}
            </div>
        )
    }

    onSubmit(formValues){
        console.log(formValues);
        history.push('/signup/confirmation');
    }

    render(){
        return(
            <form className="ui large form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="nombre" component={this.renderInput} label="Nombre"/>
                    <Field name="apellido" component={this.renderInput}label="Apellido"/>
                    <Field name="cardnumber" component={this.renderInput} label="Numero de Tarjeta"/>
                    <Field name="expirationdate" component={this.renderInput} label="Fecha de Expiracion"/>
                    <Field name="securitycode" component={this.renderInput} label="Codigo de Seguridad"/>
                    <button className="ui large button">SUBMIT</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.nombre){
        errors.nombre = 'You must enter a nombre';
    }
    if(!formValues.apellido){
        errors.apellido = 'You must enter a apellido';
    }
    if(!formValues.cardnumber){
        errors.cardnumber = 'You must enter a cardnumber';
    }
    if(!formValues.expirationdate){
        errors.expirationdate = 'You must enter a expirationdate';
    }
    if(!formValues.securitycode){
        errors.securitycode = 'You must enter a securitycode';
    }

    return errors;
}

export default reduxForm({
    form: 'payForm',
    validate
})(PayForm);

