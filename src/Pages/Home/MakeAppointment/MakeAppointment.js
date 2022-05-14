import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import MainButton from '../../Shared/MainButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden md:block lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold pb-5'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium non iste molestiae quia voluptatem numquam dolores nam delectus doloribus necessitatibus, voluptates eaque ipsum commodi doloremque nemo velit rerum accusamus vero mollitia! Eius saepe, vel dolorem voluptatem eum hic rerum?</p>
                <MainButton>Get Started</MainButton>
            </div>

        </section>
    );
};

export default MakeAppointment;