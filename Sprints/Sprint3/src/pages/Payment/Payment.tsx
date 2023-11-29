import React, {useState} from "react";
import "./Payment.css";
import line2 from './line-2.svg';
import line3 from './line-3.svg';
import line1 from './line-1.svg';

export const Payment = (): JSX.Element => {
    const [isRadioSelected, setIsRadioSelected] = useState(true);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const handleRequire = () => {
        const radioElement = document.getElementById("radioHead") as HTMLInputElement;

        if (radioElement) {
            setIsRadioSelected(radioElement.checked);
        }
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Display the confirmation div
        setConfirmationVisible(true);
    };

    const handleConfirm = () => {
        // Add your form submission logic here
        // For now, let's just hide the confirmation div
        setConfirmationVisible(false);
        alert("Form submitted!");
    };

    const handleCancel = () => {
        // Hide the confirmation div
        setConfirmationVisible(false);
    };

    return (
        <div className="payment-page">
            <div className="div-2">
                <div className="overlap">
                    <div className="payment-main">
                        <div className="overlap-group">
                            <div className="text-wrapper-7">Payment Page</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                                <div className="summary-section">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-8">Total</div>
                                        <div className="transaction-date">
                                            Transaction Date
                                            <br />
                                            Time
                                        </div>
                                        <div className="text-wrapper-9">Summary</div>
                                        <div className="subtotal-taxes">
                                            Subtotal
                                            <br />
                                            Taxes
                                        </div>
                                        <button type="submit" className="overlap-group-2">
                                            <div className="rectangle" />
                                            <div className="text-wrapper-10">Submit</div>
                                        </button>
                                        {isConfirmationVisible && (
                                            <div className="confirmation-popup">
                                                <div className="confirmation-content">
                                                    <p>Are you sure you want to submit?</p>
                                                    <button onClick={handleConfirm}>Yes</button>
                                                    <button onClick={handleCancel}>No</button>
                                                </div>
                                            </div>
                                        )}
                                        <img className="line" alt="Line" src={line2} />
                                        <img className="line-2" alt="Line" src={line3} />
                                        <div className="text-wrapper-11">Delivery ID: 1234567890</div>
                                    </div>
                                </div>
                                <div className="payment-option">
                                    <div className="overlap-3">
                                        <div className="text-wrapper-12">Payment Option</div>
                                            <div className="overlap-group-3">
                                                <div className="text-wrapper-13">First Name</div>
                                                <div className="text-wrapper-14">Last Name</div>
                                                <div className="text-wrapper-15">Card Number</div>
                                                <div className="text-wrapper-16">Expiration</div>
                                                <div className="text-wrapper-17">CVV</div>
                                                <div className="text-wrapper-18">Postal Code</div>
                                                <div className="text-wrapper-19">Email</div>
                                                <div className="text-wrapper-20">Credit / debit card</div>
                                                <div className="ellipse-wrapper">
                                                    <input type="radio" name="payoption" className="ellipse" onChange={handleRequire} id="radioHead" defaultChecked/>
                                                </div>
                                                <p className="p">Secure transfer using your bank account</p>
                                                <img className="line-3" alt="Line" src={line1} />
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-2" required={isRadioSelected}/>
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-3" required={isRadioSelected}/>
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-4" required={isRadioSelected}/>
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-5" required={isRadioSelected}/>
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-6" required={isRadioSelected}/>
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-7" required={isRadioSelected}/>
                                                <input type="text" style={{paddingLeft: '10px' }} className="rectangle-8" required={isRadioSelected}/>
                                            </div>
                                            <div className="overlap-4">
                                                <div className="text-wrapper-21">Paypal</div>
                                                <div className="div-wrapper">
                                                    <input type="radio" name="payoption" className="ellipse" onChange={handleRequire} />
                                                </div>
                                                <p className="text-wrapper-22">Secure online payment through the PayPal portal</p>
                                            </div>
                                    </div>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
