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
                <button onClick={() => {this.props.onClick ? this.props.onClick() : undefined}} className={`${small ? 'form-button-small': 'form-button'}__button ${danger ? 'form-button-small__danger': ''}`} type={type} {...input}>
                    {title}
                </button>
            </div>
        )
    }
}

export class FormImage extends Component{
    openFile = () => {
        const fileElement = document.getElementById('file');
        if(fileElement)
            fileElement.click();
    }

    handleSelectedImage = (e) => {
        var image = document.getElementById('newsletter-new-image');
        image.src = URL.createObjectURL(e.target.files[0]);
    }

    render() {
        const {className, title, input, type, imageUrl} = this.props;
        return (
            <div className={`${className} form-image`}>
                <label className='form-image__title'>{title}</label>
                <img id='newsletter-new-image' className='form-image__image' src={imageUrl}/>
                <input className='form-image__replace' type='button' value='Replace' onClick={() => {this.openFile()}}/>
                <input type={type} style={{display: 'none'}} {...input} id='file' name='file' accepts='iamge/w' value={undefined} onChange={(e) => {this.handleSelectedImage(e)}}/>
            </div>
        )
    }
}