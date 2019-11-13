import React from 'react';

import { Field, reduxForm } from 'redux-form';
import history from './history';

class RegForm extends React.Component {

    renderError({touched, error}){
        if(touched && error){
            return(
                <div style={{color: 'red'}}>{error}</div>
            );
        }
    }

    renderInput = ({meta, input, label}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
        history.push('/signup/payment');
    }

    render(){
        //console.log(this.props);
        return(
            <form className="ui large form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="nombre" component={this.renderInput} label="Nombre"/>
                <Field name="apellido" component={this.renderInput} label="Apellido"/>
                <Field name="email" component={this.renderInput} label="Email"/>
                <Field name="celular" component={this.renderInput} label="Celular"/>
                <Field name="cedula" component={this.renderInput} label="Cedula"/>
                <Field name="ciudad" component={this.renderInput} label="Ciudad"/>
                <Field name="direccion" component={this.renderInput} label="Direccion"/>
                <Field name="postal" component={this.renderInput} label="Codigo Postal"/>
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
    if(!formValues.email){
        errors.email = 'You must enter a email';
    }
    if(!formValues.celular){
        errors.celular = 'You must enter a celular';
    }
    if(!formValues.cedula){
        errors.cedula = 'You must enter a cedula';
    }
    if(!formValues.ciudad){
        errors.ciudad = 'You must enter a ciudad';
    }
    if(!formValues.direccion){
        errors.direccion = 'You must enter a direccion';
    }
    if(!formValues.postal){
        errors.postal = 'You must enter a postal';
    }

    return errors;
}

export default reduxForm({
    form: 'regForm',
    validate
})(RegForm);