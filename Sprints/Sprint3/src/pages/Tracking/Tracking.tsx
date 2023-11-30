import React, { useState } from 'react';
import "./Tracking.css";
import { Link} from 'react-router-dom';

const Tracking: React.FC = () => {
    const [trackingId, setTrackingId] = useState('');
    const [isValidId, setIsValidId] = useState(true);

    const validateTrackingId = (id: string) => {
        if (id == '1234567890'){
            return id.length === 10; // Adjust this condition based on your requirements
        }
        return false;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.value;
        setTrackingId(id);
        setIsValidId(validateTrackingId(id));
    };


    return (
        <div className='Review-R'>
            <div className="background-top-R"></div>
            <div className="background-bottom-R"></div>
            <div className='title-main-R'>Tracking</div>
            <div className='Rectangle-R'>
                <div className='contain-1-R'>
                    <div className='c1-R'>
                        <div className='name-R'>
                            <div className='txt-R'>Tracking ID</div>
                            <input className='input-R' type="text" name="name" value={trackingId} onChange={handleInputChange} placeholder='1234567890' />
                            <button className='tracking-button-R' type="submit">Track</button>
                        </div>
                    </div>

                    <div className='c1-R c1x-R'>
                        <div className='c2-R'>
                            <div>
                                <div className='c3t-R'>
                                    Shipment Status
                                </div>
                                {isValidId && (
                                    <div className='c3t-R ft-R'>
                                        In Transit
                                    </div>
                                )}
                            </div>
                            <div className='c3x-R'>
                                <div className='c3-R'>
                                    <div className='c3t-R'>
                                        Scheduled Delivery
                                    </div>
                                    {isValidId && (
                                        <div className='c3t-R ft-R'>
                                            Monday
                                        </div>
                                    )}

                                    {isValidId && (
                                        <div className='c3t-R ft-R'>
                                            01 / 21 / 2023
                                        </div>
                                    )}
                                </div>
                                <div className='c3-R'>
                                    <div className='c3t-R'>
                                        Estimated time
                                    </div>
                                    {isValidId && (
                                        <div className='c3t-R ft-R'>
                                            By End of the Day
                                        </div>
                                    )}
                                </div>
                            </div>  
                        </div>
                        <div className='c2-R'>
                            <div className='c3-R'>
                                    <div className='c3t-R'>
                                        Scheduled Delivery
                                    </div>
                                    <div className='c3t-R ft-R'>
                                        Tracking ID : {isValidId && ('1234567890')}
                                    </div>
                                    <div className='c3t-R ft-R'>
                                        Ship to : {isValidId && ('Montreal, QC, Canada')}
                                    </div>
                                    <div className='c3t-R ft-R'>
                                        Service Type : {isValidId && ('Expedited - Custom')}
                                    </div>
                                    <div className='c3t-R ft-R'>
                                        Weight : {isValidId && ('5 lbs')}
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='c1-R'>
                        <div className='name-x-R'>
                            <div className='txt-R'>Shipment Progress</div>
                            <div className="c4-R">
                                <div className='ft-R'>
                                    Status
                                </div>
                                <div className='ft-R'>
                                    Time
                                </div>
                                <div className='ft-R'>
                                    Location
                                </div>
                            </div>
                            {isValidId && (
                            <div className='c6-R'>
                                <div className='c5-R'>
                                    <div className='ft-R'>
                                        In Transit
                                    </div>
                                    <div className='ft-R'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft-R'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5-R'>
                                    <div className='ft-R'>
                                        In Transit
                                    </div>
                                    <div className='ft-R'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft-R'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5-R'>
                                    <div className='ft-R'>
                                        In Transit
                                    </div>
                                    <div className='ft-R'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft-R'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5-R'>
                                    <div className='ft-R'>
                                        In Transit
                                    </div>
                                    <div className='ft-R'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft-R'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5-R'>
                                    <div className='ft-R'>
                                        In Transit
                                    </div>
                                    <div className='ft-R'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft-R'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>

                </div>


                <div className='contain-2-R'>
                    <div className='title-R' >
                        <div>
                            FAQs
                        </div>
                        <div>
                            My tracking information hasn’t been updated yet. What should I do?
                        </div>
                        <div className='ft-R dt-R'>
                            It's normal for tracking information to have delays. Wait for a day or two and check again. If the issue persists, contact the shipping carrier or the company you purchased from for assistance.
                        </div>
                        <div>
                            Do I need to be present to receive the delivery?
                        </div>
                        <div className='ft-R dt-R'>
                            It depends on the carrier and the delivery method. Some packages require a signature, while others may be left at the doorstep. Check the carrier's policy or tracking information for details.
                        </div>
                        <div>
                            My package is delayed. What can I do?
                        </div>
                        <div className='ft-R dt-R'>
                        Delays can happen due to various reasons such as weather, high demand, or logistical issues. Check the tracking information for updates and contact the carrier for more information.
                        </div>
                    </div>
                    <div className='c7-R'>
                        Need Help?
                        <Link to="/support">
                        <button type="button" className='tracking-button'>Contact support</button>
                        </Link>
                    </div>
                    <div className='c7-R'>
                        Opinion?
                        <Link to="/review">
                            <button type="button" className='tracking-button'>Leave review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracking;
