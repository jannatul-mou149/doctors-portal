import React from 'react';

const InfoCard = ({ img, cardTitle, cardBody, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-8'><img src={img} /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardBody}</p>
            </div>
        </div>
    );
};

export default InfoCard;