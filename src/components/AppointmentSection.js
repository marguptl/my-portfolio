import React from 'react';
import '../style/AppointmentSection.css';

const AppointmentSection = () => {
  return (
    <section className="appointment-section">
      <div className="appointment-content">
        <div className="image">
          <img src="/path-to-image-dog" alt="Pet" />
        </div>
        <div className="image">
          <img src="/path-to-image-dog2" alt="Pet" />
        </div>
      </div>
      <button className="appointment-btn">Book Appointment</button>
    </section>
  );
};

export default AppointmentSection;
