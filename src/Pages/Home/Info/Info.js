import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardBody="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" img={clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardBody="Brooklyn, NY 10036, United States" cardTitle="Visit Our Location" img={marker} bgClass="bg-accent"></InfoCard>
            <InfoCard cardBody="+000 123 456789" cardTitle="Contact Us Now" img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;