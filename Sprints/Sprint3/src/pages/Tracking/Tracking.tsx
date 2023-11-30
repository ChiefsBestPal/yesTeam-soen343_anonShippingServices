import React, { useState } from 'react';
import "./Tracking.css";

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
        <div className='Review'>
            <div className="background-top"></div>
            <div className="background-bottom"></div>
            <div className='title-main'>Tracking</div>
            <div className='Rectangle'>
                <div className='contain-1'>
                    <div className='c1'>
                        <div className='name'>
                            <div className='txt'>Tracking ID</div>
                            <input className='input' type="text" name="name" value={trackingId} onChange={handleInputChange} placeholder='1234567890' />
                            <button className='tracking-button' type="submit">Track</button>
                        </div>
                    </div>

                    <div className='c1 c1x'>
                        <div className='c2'>
                            <div>
                                <div className='c3t'>
                                    Shipment Status
                                </div>
                                {isValidId && (
                                    <div className='c3t ft'>
                                        In Transit
                                    </div>
                                )}
                            </div>
                            <div className='c3x'>
                                <div className='c3'>
                                    <div className='c3t'>
                                        Scheduled Delivery
                                    </div>
                                    {isValidId && (
                                        <div className='c3t ft'>
                                            Monday
                                        </div>
                                    )}

                                    {isValidId && (
                                        <div className='c3t ft'>
                                            01 / 21 / 2023
                                        </div>
                                    )}
                                </div>
                                <div className='c3'>
                                    <div className='c3t'>
                                        Estimated time
                                    </div>
                                    {isValidId && (
                                        <div className='c3t ft'>
                                            By End of the Day
                                        </div>
                                    )}
                                </div>
                            </div>  
                        </div>
                        <div className='c2'>
                            <div className='c3'>
                                    <div className='c3t'>
                                        Scheduled Delivery
                                    </div>
                                    <div className='c3t ft'>
                                        Tracking ID : {isValidId && ('1234567890')}
                                    </div>
                                    <div className='c3t ft'>
                                        Ship to : {isValidId && ('Montreal, QC, Canada')}
                                    </div>
                                    <div className='c3t ft'>
                                        Service Type : {isValidId && ('Expedited - Custom')}
                                    </div>
                                    <div className='c3t ft'>
                                        Weight : {isValidId && ('5 lbs')}
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='c1'>
                        <div className='name-x'>
                            <div className='txt'>Shipment Progress</div>
                            <div className="c4">
                                <div className='ft'>
                                    Status
                                </div>
                                <div className='ft'>
                                    Time
                                </div>
                                <div className='ft'>
                                    Location
                                </div>
                            </div>
                            {isValidId && (
                            <div className='c6'>
                                <div className='c5'>
                                    <div className='ft'>
                                        In Transit
                                    </div>
                                    <div className='ft'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5'>
                                    <div className='ft'>
                                        In Transit
                                    </div>
                                    <div className='ft'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5'>
                                    <div className='ft'>
                                        In Transit
                                    </div>
                                    <div className='ft'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5'>
                                    <div className='ft'>
                                        In Transit
                                    </div>
                                    <div className='ft'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                                <div className='c5'>
                                    <div className='ft'>
                                        In Transit
                                    </div>
                                    <div className='ft'>
                                        <div>
                                            01/21/2023
                                        </div>
                                        <div>
                                            5:20 A.M.
                                        </div>
                                    </div >
                                    <div className='ft'>
                                        <div>Montreal,</div>
                                        <div>QC,</div>
                                        <div>Canada</div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>

                </div>


                <div className='contain-2'>
                    <div className='title' >
                        <div>
                            FAQs
                        </div>
                        <div>
                            My tracking information hasn’t been updated yet. What should I do?
                        </div>
                        <div className='ft dt'>
                            It's normal for tracking information to have delays. Wait for a day or two and check again. If the issue persists, contact the shipping carrier or the company you purchased from for assistance.
                        </div>
                        <div>
                            Do I need to be present to receive the delivery?
                        </div>
                        <div className='ft dt'>
                            It depends on the carrier and the delivery method. Some packages require a signature, while others may be left at the doorstep. Check the carrier's policy or tracking information for details.
                        </div>
                        <div>
                            My package is delayed. What can I do?
                        </div>
                        <div className='ft dt'>
                        Delays can happen due to various reasons such as weather, high demand, or logistical issues. Check the tracking information for updates and contact the carrier for more information.
                        </div>
                    </div>
                    <div className='c7'>
                        Get Support
                        <button className='tracking-button' type="submit">Submit Review</button>
                    </div>
                    <div className='c7'>
                        Give Review
                        <button className='tracking-button' type="submit">Submit Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracking;
