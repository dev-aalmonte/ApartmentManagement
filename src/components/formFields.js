import React, { Component } from 'react';

export class FormInput extends Component{
    render() {
        const {className, title, input, type, placeholder} = this.props;
        return (
            <div  className={`${className} form-input`}>
                <label className='form-input__title'>{title}</label>
                <input className='form-input__input' placeholder={placeholder} type={type} {...input}/>
            </div>
        )
    }
}

export class FormTextArea extends Component{
    render() {
        const {className, title, input, type, placeholder} = this.props;
        return (
            <div  className={`${className} form-textarea`}>
                <label className='form-textarea__title'>{title}</label>
                <textarea className='form-textarea__input' placeholder={placeholder} type={type} {...input}>
                
                </textarea>
            </div>
        )
    }
}

export class FormButton extends Component{
    render() {
        const {className, title, input, type, small, danger} = this.props;
        return (
            <div className={`${className} ${small ? 'form-button-small': 'form-button'}`}>
                <button onClick={() => {this.props.onClick()}} className={`${small ? 'form-button-small': 'form-button'}__button ${danger ? 'form-button-small__danger': ''}`} type={type} {...input}>
                    {title}
                </button>
            </div>
        )
    }
}