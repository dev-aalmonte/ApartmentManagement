import React from 'react';

export default function Icon({icon, className}) {
    return (
        <div className={className}>
            <i className={icon}></i>
        </div>
    )
}