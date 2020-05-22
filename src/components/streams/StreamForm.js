import React from 'react';
import { Field, reduxForm } from 'redux-form';

//Code Reuse fro StreamCreate and StreamEdit



class StreamForm extends React.Component {
    //how to show the error message
    renderError ({ touched, error}) {
         if(touched && error) {
             return (
                 <div className="ui error message">
                     <div className ="header">{error}</div>
                 </div>
             )
         }
    }
 

     renderInput = ({ input, label, meta }) => {
         //to show the error message and make the title/description read.
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
         return (
             <div className = {className}>
                 <label>{label}</label>
             <input {...input} autoComplete = "off" />
                     {this.renderError(meta)}
             </div>
         )
     }

     onSubmit = (formValues) => {
         this.props.onSubmit(formValues);
     }

    render() {
        return (
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} 
                  className = "ui form error">
            <Field name = "title" component = {this.renderInput} label = "Enter Title" />
            <Field name = "description" component = {this.renderInput} label = "Enter Description" />
            <button className= "ui primary button">Submit</button>
            </form>
           
        )
    }
}


const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) {
        errors.title = 'You must put a title'
    }
    if (!formValues.description) {
        errors.description = 'You must put a description'
    }
    return errors;
}

export default reduxForm({
    form: 'StreamForm',
    validate
}) (StreamForm);

