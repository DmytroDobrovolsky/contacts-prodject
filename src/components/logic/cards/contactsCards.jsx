import React from 'react';
import './contactsCards.css';



export const ContactCard = ({ data }) => {
    return (
        <div className='numbers'>
            <h3 className='h3'>{data.firstName}</h3>
            <h3 className='h3'>{data.lastName}</h3>
            <p className='p1'>{data.phone}</p>
            <p className='space'></p>
            <p className='p2'>{data.gender}</p>
        </div>
    )
}