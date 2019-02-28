import React from 'react';

export default function Button({callback, text, icon, className}){
    if(icon){
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}></i>
            </a>
        )
    }
    return (
        <a onClick={callback} className={`${className} button`}>
            {text}
        </a>
    )

}