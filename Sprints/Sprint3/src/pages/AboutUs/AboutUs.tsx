import React, { useState, useRef } from 'react';
import "./AboutUs.css";
import companyLogo from './Company logo.png';

interface ReviewEntry {
    name: string;
    rating: number;
    isAnonymous: boolean;
    reviewTitle: string;
    orderNumber: string;
    review: string; // Changed to 'review' for clarity
    answers: {
        question1: string;
        question2: string;
        question3: string;
    };
}

const AboutUs: React.FC = () => {
    const [reviewData, setReviewData] = useState<ReviewEntry>({
        name: '',
        rating: 0,
        isAnonymous: false,
        reviewTitle: '',
        orderNumber: '123456', // Assuming it's set already
        review: '', // Changed to 'review'
        answers: {
            question1: '',
            question2: '',
            question3: ''
        }
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setReviewData({ ...reviewData, [name]: checked });
        } else if (name in reviewData.answers) {
            setReviewData({
                ...reviewData,
                answers: { ...reviewData.answers, [name]: value }
            });
        } else {
            setReviewData({ ...reviewData, [name]: value });
        }
    };

    const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setReviewData({ ...reviewData, review: value });
    };

    const handleRatingChange = (newRating: number) => {
        setReviewData({ ...reviewData, rating: newRating });
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileButtonClick = () => {
        fileInputRef.current?.click();
    };

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} onClick={() => handleRatingChange(i)} style={{ cursor: 'pointer', color: i <= reviewData.rating ? 'gold' : 'grey' }}>
                    {i <= reviewData.rating ? '★' : '☆'}
                </span>
            );
        }
        return stars;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Process form data here
        console.log(reviewData);
    };

    return (
        <div className='Review-T'>
            <div className="background-top-T"></div>
            <div className="background-bottom-T"></div>
            <div className='title-main-T'>About Us</div>
            <div className='Rectangle-T'>
                <div className='contain-1-T'>

                    <div>
                        <h1>About UPYES</h1>

                        <p>
                            Welcome to UPYES, a cutting-edge logistics company revolutionizing the way goods are delivered
                            across the globe. At UPYES, we take pride in our commitment to excellence, efficiency, and
                            reliability, offering unparalleled logistics solutions tailored to meet the diverse needs of our
                            clients.
                        </p>

                        <p>
                            Founded with a vision to redefine the logistics industry, UPYES leverages state-of-the-art
                            technology and a dedicated team of professionals to ensure seamless and timely delivery of
                            packages. Our services are designed to provide businesses and individuals with a reliable
                            partner for their shipping needs, making UPYES the go-to choice for logistics solutions.
                        </p>

                        <h2>Our Mission</h2>

                        <p>
                            At the core of UPYES is our unwavering mission to simplify logistics, streamline supply chains,
                            and empower businesses to reach new heights. We strive to create a global network that connects
                            businesses with their customers, fostering growth, and making the world a more connected place.
                        </p>

                        <h2>What Sets Us Apart</h2>

                        <p>
                            UPYES stands out from the crowd through a combination of cutting-edge technology, a commitment
                            to sustainability, and a customer-centric approach. Our advanced tracking systems, efficient
                            route optimization, and robust security measures ensure that every package is handled with the
                            utmost care and delivered promptly.
                        </p>

                        <p>
                            Sustainability is at the heart of our operations. We are dedicated to minimizing our
                            environmental footprint by investing in eco-friendly practices and exploring innovative
                            solutions for greener logistics. UPYES is not just a logistics company; we are partners in
                            building a sustainable future.
                        </p>

                        <h2>Our Team</h2>

                        <p>
                            The success of UPYES wouldn't be possible without our talented and dedicated team. From
                            logistics experts to technology innovators, our team is united by a common goal: to provide
                            exceptional service and exceed customer expectations. We believe in fostering a collaborative
                            and inclusive work environment that encourages creativity and continuous improvement.
                        </p>

                        <h2>Join the UPYES Community</h2>

                        <p>
                            Whether you are a business looking for reliable shipping solutions or an individual in need of
                            efficient package delivery, UPYES is here for you. Join the UPYES community and experience a
                            new era of logistics where reliability meets innovation.
                        </p>

                        <p>
                            Thank you for choosing UPYES as your trusted logistics partner. We look forward to serving you
                            and building a future of seamless, sustainable, and successful deliveries.
                        </p>
                    </div>


                    <div>

                    </div>
                    <div className='contain-3-T'>
                        <img src={companyLogo}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
