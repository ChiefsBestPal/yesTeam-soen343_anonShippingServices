import React, { useState } from 'react';
import "./Delivery.css";
import {Link} from "react-router-dom";
interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

interface ReceiverInfo {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

interface PackageInfo {
    length: string;
    width: string;
    height: string;
    weight: string;
}

const initialAddress: Address = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
};

const Delivery: React.FC = () => {
    const [pickupAddress, setPickupAddress] = useState<Address>(initialAddress);
    const [dropoffAddress, setDropoffAddress] = useState<Address>(initialAddress);
    const [receiverInfo, setReceiverInfo] = useState<ReceiverInfo>({ firstName: '', lastName: '', phone: '', email: '' });
    const [packageInfo, setPackageInfo] = useState<PackageInfo>({ length: '', width: '', height: '', weight: '' });
    const [packageType, setPackageType] = useState<string>('');
    const [specialInstructions, setSpecialInstructions] = useState<string>('');

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>, addressType: 'pickup' | 'dropoff') => {
        const { name, value } = event.target;
        const setAddress = addressType === 'pickup' ? setPickupAddress : setDropoffAddress;
        setAddress(prevAddress => ({ ...prevAddress, [name]: value }));
    };

    const handleReceiverInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setReceiverInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const handlePackageInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPackageInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const handlePackageTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPackageType(event.target.value);
    };

    const handleSpecialInstructionsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSpecialInstructions(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform validation and submission logic here
        console.log({
            pickupAddress,
            dropoffAddress,
            receiverInfo,
            packageInfo,
            packageType,
            specialInstructions,
        });
    };



    return (
        <div className='Review-Y'>
            <div className="background-top-Y"></div>
            <div className="background-bottom-Y"></div>
            <div className='title-main-Y'>Delivery Request</div>
            <div className='Rectangle-Y'>
                <div className='contain-1-Y'>
                    <div className='c1-Y'>
                        <div className='name-x-Y'>
                            <div className='txt-Y'>Pick-up Address</div>
                            <div className='d1-Y'>
                                <div className='ft-Y'>
                                    Address Line 1
                                </div>
                                <input className='input-Y' type="text" name="line1" value={pickupAddress.line1} onChange={(e) => handleAddressChange(e, 'pickup')} />
                                <div className='ft-Y'>
                                    Address Line 2 (Optional)
                                </div>
                                <input className='input-Y' type="text" name="line2" value={pickupAddress.line2} onChange={(e) => handleAddressChange(e, 'pickup')} />
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>City</div>
                                        <input className='input-Y' type="text" name="city" value={pickupAddress.city} onChange={(e) => handleAddressChange(e, 'pickup')} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'> State/Region</div>
                                        <input className='input-Y' type="text" name="state" value={pickupAddress.state} onChange={(e) => handleAddressChange(e, 'pickup')} />
                                    </div>
                                </div>
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>ZipCode</div>
                                        <input className='input-Y' type="text" name="zipCode" value={pickupAddress.zipCode} onChange={(e) => handleAddressChange(e, 'pickup')} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'> Country</div>
                                        <input className='input-Y' type="text" name="country" value={pickupAddress.country} onChange={(e) => handleAddressChange(e, 'pickup')} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='c1-Y'>
                        <div className='name-x-Y'>
                            <div className='txt-Y'>Drop-off Address</div>
                            <div className='d1-Y'>
                                <div className='ft-Y'>
                                    Address Line 1
                                </div>
                                <input className='input-Y' type="text" name="line1" value={dropoffAddress.line1} onChange={(e) => handleAddressChange(e, 'dropoff')} />
                                <div className='ft-Y'>
                                    Address Line 2 (Optional)
                                </div>
                                <input className='input-Y' type="text" name="line2" value={dropoffAddress.line2} onChange={(e) => handleAddressChange(e, 'dropoff')} />
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>City</div>
                                        <input className='input-Y' type="text" name="city" value={dropoffAddress.city} onChange={(e) => handleAddressChange(e, 'dropoff')} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'> State/Region</div>
                                        <input className='input-Y' type="text" name="state" value={dropoffAddress.state} onChange={(e) => handleAddressChange(e, 'dropoff')} />
                                    </div>
                                </div>
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>ZipCode</div>
                                        <input className='input-Y' type="text" name="zipCode" value={dropoffAddress.zipCode} onChange={(e) => handleAddressChange(e, 'dropoff')} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'> Country</div>
                                        <input className='input-Y' type="text" name="country" value={dropoffAddress.country} onChange={(e) => handleAddressChange(e, 'dropoff')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contain-2-Y'>
                    <div className='c1-Y'>
                        <div className='name-x-Y'>
                            <div className='txt-Y'>Receiver Information</div>
                            <div className='d1-Y'>
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>First Name</div>
                                        <input className='input-Y' type="text" name="firstName" value={receiverInfo.firstName} onChange={handleReceiverInfoChange} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'> Last name</div>
                                        <input className='input-Y' type="text" name="lastName" value={receiverInfo.lastName} onChange={handleReceiverInfoChange} />
                                    </div>
                                </div>
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>Phone Number</div>
                                        <input className='input-Y' type="text" name="phone" value={receiverInfo.phone} onChange={handleReceiverInfoChange} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>Email</div>
                                        <input className='input-Y' type="text" name="email" value={receiverInfo.email} onChange={handleReceiverInfoChange} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='c1-Y'>
                        <div className='name-x-Y'>
                            <div className='txt-Y'>Package Description</div>
                            <div className='d1-Y'>
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>Length (m)</div>
                                        <input className='input-Y' type="text" name="length" value={packageInfo.length} onChange={handlePackageInfoChange} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>Width (m)</div>
                                        <input className='input-Y' type="text" name="width" value={packageInfo.width} onChange={handlePackageInfoChange} />
                                    </div>
                                </div>
                                <div className='d2-Y'>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>Height (m)</div>
                                        <input className='input-Y' type="text" name="height" value={packageInfo.height} onChange={handlePackageInfoChange} />
                                    </div>
                                    <div className='d2x-Y'>
                                        <div className='ft-Y'>Weight (lb)</div>
                                        <input className='input-Y' type="text" name="weight" value={packageInfo.weight} onChange={handlePackageInfoChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='c1-Y'>
                        <div className='name-x-Y name-z-Y'>
                            <div>
                                <div className='txt-Y'>Package Description</div>
                                <div className='d1-Y d4-Y'>
                                    <div className='d3-Y d5-Y'>
                                        <label className='ft-Y'>
                                            <input className='d7-Y' type="radio" name="packageType" value="Expedited" />
                                            Expedited
                                        </label>
                                        <label className='ft-Y'>
                                            <input className='d7-Y' type="radio" name="packageType" value="Economy" />
                                            Economy
                                        </label>
                                        <label className='ft-Y'>
                                            <input className='d7-Y' type="radio" name="packageType" value="Balanced" />
                                            Balanced
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='d2-Y d3-Y d5-Y'>
                                <div>
                                    Special Instruction
                                </div>
                                <textarea className='input-Y d6-Y' name="specialInstructions" />
                            </div>
                        </div>
                    </div>


                    {/*<button className='tracking-button-Y' type="submit">Track</button>*/}
                    <Link to="/payment">
                        <button type="button" className='tracking-button-Y'>Proceed with Payment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
