import React, { FormEvent, useState } from "react";
import "./Quote.css";

interface QuoteProps {}

export const Quote: React.FC<QuoteProps> = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        weight: "",
        length: "",
        width: "",
        height: "",
        specialRequest: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        setShowOptions(true);
        // Handle form submission logic here
    };

    return (

        <div className="quote">
            <div className="whole-container">
                <div className='space'></div>

                <div className="div-2">
                    <h2 className='title-main-X' style={{textAlign: "center",fontSize: "4em", color: "white"}}>Quotation Calculator</h2>
                    <div className="overlap">
                        <form className="package-info" onSubmit={handleSubmit}>
                            <div className="addresses">
                                <div className="text-wrapper-7">*Required Fields</div>
                                <div className="sender">
                                        <input
                                               className="overlap-group"
                                               type="text"
                                               id="from"
                                               name="from"
                                               value={formData.from}
                                               onChange={handleChange}
                                               placeholder="*From"
                                               required
                                               style={{ fontStyle: 'italic', paddingLeft: '10px' }}
                                        />
                                </div>
                                <div className="receiver">

                                        <input className="overlap-group"
                                            type="text"
                                            id="to"
                                            name="to"
                                            value={formData.to}
                                            onChange={handleChange}
                                            placeholder="*To"
                                            required
                                            style={{ fontStyle: 'italic', paddingLeft: '10px' }}
                                        />
                                </div>
                            </div>
                            <div className="dimensions">
                                <div className="text-wrapper-10">Package Information</div>
                                <div className="weight">
                                        <input
                                            className="div-wrapper"
                                            type="text"
                                            id="weight"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleChange}
                                            required
                                            placeholder="*Weight"
                                            style={{ fontStyle: 'italic', paddingLeft: '10px' }}
                                        />
                                </div>
                                <div className="length">
                                        <input
                                            className="div-wrapper"
                                            type="text"
                                            id="length"
                                            name="length"
                                            value={formData.length}
                                            onChange={handleChange}
                                            required
                                            placeholder="*Length"
                                            style={{ fontStyle: 'italic', paddingLeft: '10px' }}
                                        />
                                </div>
                                <div className="width">
                                        <input
                                            className="div-wrapper"
                                            type="text"
                                            id="width"
                                            name="width"
                                            value={formData.width}
                                            onChange={handleChange}
                                            required
                                            placeholder="*Width"
                                            style={{ fontStyle: 'italic', paddingLeft: '10px' }}
                                        />
                                </div>
                                <div className="height">
                                        <input
                                            className="div-wrapper"
                                            type="text"
                                            id="height"
                                            name="height"
                                            value={formData.height}
                                            onChange={handleChange}
                                            required
                                            placeholder="*Height"
                                            style={{ fontStyle: 'italic', paddingLeft: '10px' }}
                                        />
                                </div>
                            </div>
                            <div className="submit-button">
                                    <button type="submit" className="overlap-2 text-wrapper-15">
                                        Estimate this quote
                                    </button>
                            </div>
                            <div className="special-requests">
                                <div className="text-wrapper-10">Special Requests</div>
                                <div className="request">
                                        <textarea
                                            className="overlap-group-2"
                                            id="specialRequest"
                                            name="specialRequest"
                                            value={formData.specialRequest}
                                            onChange={handleChange}
                                            placeholder="Typer Here..."
                                            style={{ fontStyle: 'italic', paddingLeft: '10px', paddingTop: '10px' }}
                                        ></textarea>
                                </div>
                            </div>
                        </form>

                        {showOptions && (
                            <div className="quote-options">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-3">
                                        <div className="text-wrapper-17">Option 1 ...</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap-group-3">
                                        <div className="text-wrapper-17">Option 2 ...</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;




