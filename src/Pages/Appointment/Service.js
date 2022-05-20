import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-10 ">
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold text-secondary text-center">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span>
                        :
                        <span className='text-red-400'>No Slot Avaiable</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price} </small></p>
                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>

        </div>
    );
};

export default Service;