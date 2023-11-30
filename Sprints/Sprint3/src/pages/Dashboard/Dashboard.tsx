import React, { useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faTruck, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';



const Dashboard: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = () => {
    console.log('Tracking number: ', trackingNumber);
    window.location.href = "/tracking";
  };

  return (
    <div className='whole-container'>
      <div className='tracking-container'>
        <div className="tracking-input-container">
          <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="     Tracking Number"
              className='track-input'
          />
          <button className='tracking-button' onClick={handleTrack}>Track</button>
        </div>
      </div>

      <div className='tracked-items-container'>
        <div className='tracked-items-empty-space'>
        </div>
        <div className='tracked-items'>
          <div className='item-history'>
          <div className='item-history-container'>History </div>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          </div>
          <div className='item'>
            <FontAwesomeIcon className='item-truck' icon={faTruckFast} />
            <div className='item-tracking-number'>
              JJ377777744494Y - Expected delivery today
            </div>
            <FontAwesomeIcon className='item-trash' icon={faTrash} />
          </div>
          <div className='item'>
            <FontAwesomeIcon className='item-truck' icon={faTruck} />
            <div className='item-tracking-number'>
              JJ377777744494Y - In sorting facility
            </div>
            <FontAwesomeIcon className='item-trash' icon={faTrash} />
          </div>
          <div className='item'>
            <FontAwesomeIcon className='item-truck' icon={faCheck} />
            <div className='item-tracking-number'>
              JJ377777744494Y - Delivered
            </div>
            <FontAwesomeIcon className='item-trash' icon={faTrash} />
          </div>
          <div className='item'>
            <FontAwesomeIcon className='item-truck' icon={faCheck} />
            <div className='item-tracking-number'>
              JJ377777744494Y - Delivered
            </div>
            <FontAwesomeIcon className='item-trash' icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
