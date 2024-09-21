import React from 'react';
import '../style/BookAppointment.css'; // Styles for this page
import Toy_dog from '../images/Toy-dog.gif';
import dog from '../images/dog.gif';

const BookAppointment = () => {
  return (
    <div className="book-appointment">
      {/* Book Appointment Button */}
      <div className="cta-button">
        <button className="book-btn">Book Appointment</button>
      </div>

      {/* Two Image Blocks */}
      <div className="image-blocks">
        <div className="image-section">
          <img src={Toy_dog} alt="Pet 1" className="image" />
          <h3>My Pet is the Best</h3>
          <p>
            Regular dog walks provide essential exercise and mental stimulation,
            ensuring your furry friend stays healthy and happy. Strengthen your
            bond and improve your dog's behavior with daily adventures.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="image-section">
          <img src={dog} alt="Pet 2" className="image" />
          <h3>Do you enjoy fun activities?</h3>
          <p>
            Enhance your pet walks with fun activities like fetch, hide and
            seek, and obstacle courses. Discover new routes, practice training,
            and capture memorable moments for a fulfilling experience with your
            furry friend.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
