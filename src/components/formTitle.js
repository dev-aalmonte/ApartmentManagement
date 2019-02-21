import React from 'react';

export default function FormTitle(props) {
    const { className, text } = props;
    return (
        <h1 className={`${className} form-title`}>{ text }</h1>
    )
}