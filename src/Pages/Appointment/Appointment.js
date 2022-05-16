import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvaiableAppointments from './AvaiableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='mb-40'>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvaiableAppointments date={date} />
        </div>
    );
};

export default Appointment;