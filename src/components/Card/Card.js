import React from 'react';
import './Card.scss'

const Card = (props) => {
    return (
        <div className='card' data-testid='card-form'>
            <div className='card-1'><strong>Id: </strong><span>{props.data.id}</span></div>
            <div className='card-1'><strong>Name: </strong><span>{props.data.name}</span></div>
            <div className='card-1'><strong>UserName: </strong><span>{props.data.username}</span></div>
            <div className='card-1'><strong>Email: </strong><span>{props.data.email}</span></div>
            <div className='card-1'><strong>Phone: </strong><span>{props.data.phone}</span></div>
            <div className='card-1'><strong>Address: </strong><span>{props.data.address.city}</span></div>
            <div className='card-1'><strong>Website: </strong><span>{props.data.website}</span></div>
            <div className='card-1'><strong>Company: </strong><span>{props.data.company.name}</span></div>
        </div>
    )
}

export default Card