import React from 'react';

export default function FormTitle(props) {
    const { className, text, input, type, placeholder } = props;
    return (
        <h1 className={`${className} form-title`} type={type} placeholder={placeholder} {...input}>{ text }</h1>
    )
}