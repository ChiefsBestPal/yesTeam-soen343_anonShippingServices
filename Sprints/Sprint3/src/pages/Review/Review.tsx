import React, { useState, useRef } from 'react';
import "./Review.css";
interface ReviewProps {
    review: ReviewEntry;
}
interface ReviewEntry {
    // reviewObj : {
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
    // }
}
interface ReviewsListProps {
    reviews: Array<ReviewEntry>;
}
// new
const Review: React.FC<ReviewProps> = ({ review }) => {
    const { name, rating, isAnonymous, reviewTitle, orderNumber, review: reviewText, answers } = review;

    return (

        <div className="review">
            <pre>{"\n"}</pre>
            <div className="review-header">
                <h3 style={{textDecoration : 'underline'}}> {isAnonymous ? 'Anonymous' : name}</h3>
                <span>Order #{orderNumber}</span>
                <div className="rating">{`Rating: ${rating}/5 stars`}</div>
            </div>
            <h4>{reviewTitle}</h4>
            <p>{reviewText}</p>
            <div className="answers-section">
                <span>Answer 1: {answers.question1} {" || \t"}</span>
                <span>Answer 2: {answers.question2} {" || \t"}</span>
                <span>Answer 3: {answers.question3} {"\t"}</span>
            </div>
        </div>
    );
};
interface ReviewsListProps {
    reviews: ReviewEntry[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
    return (
        <div className="reviews-list">
            <h2>Customer Reviews</h2>
            {reviews.map((review, index) => (
                <Review key={index} review={review} />
            ))}
        </div>
    );
};
const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<ReviewEntry[]>([
        {
            name: 'John Doe',
            rating: 4,
            isAnonymous: false,
            reviewTitle: 'Great Product!',
            orderNumber: '123456',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: {
                question1: 'Yes',
                question2: 'No',
                question3: 'Maybe',
            },
        },
        // Add more reviews as needed
    ]);

    const [reviewData, setReviewData] = useState<ReviewEntry>({
        name: '',
        rating: 0,
        isAnonymous: false,
        reviewTitle: '',
        orderNumber: '', // Assuming it's set already
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

    const handleSubmit = () => { //event: React.FormEvent<HTMLFormElement>
        //event.preventDefault();
        // Process form data here
        let shallowReviewData = Object.assign({}, reviewData);
        shallowReviewData.orderNumber = "" + Math.floor(Math.random() * 999999);
        console.log(shallowReviewData);
        setReviews([...reviews, shallowReviewData]);
    };

    return (
        <div className='Review-o'>
            <div className="background-top-o"></div>
            <div className="background-bottom-o"></div>
            <div className='title-main'>Submit Your Review</div>
            <div className='Rectangle-o'>
                <div className='contain-1-o'>
                    <div className='name-anon-o c1-o'>
                        <div className='name-o'>
                            <div>Name:</div>
                            <input className='input-o' type="text" name="name" value={reviewData.name} onChange={handleInputChange} disabled={reviewData.isAnonymous} />
                        </div>
                        <div className='name-o'>
                            Anonymous:
                            <input className='input-check-o' type="checkbox" name="isAnonymous" checked={reviewData.isAnonymous} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className='rating-review-o c1-o'>
                        <div className='name-o'>
                            Rating:
                        </div>
                        <div className='star-o'>
                            {renderStars()}
                        </div>
                    </div>

                    <div className='title-o c1-o'>
                        <div className='name-o'>
                            Review Title:
                        </div>
                        <input className='input-o review-title-o' type="text" name="reviewTitle" value={reviewData.reviewTitle} onChange={handleInputChange} />
                    </div>
                </div>


                <div className='contain-2-o'>
                    <div className='title-o' >
                        <div className='name-o'>
                            Order Number (Auto generated):
                        </div>
                        <input className='input-o' type="text" name="reviewTitle" value={reviewData.orderNumber} onChange={handleInputChange} />
                    </div>
                    <div className='title-o'>
                        <div className='name-o'>
                            Did your order arrive on time?   
                        </div>
                        <input className='input-o' type="radio" name="question1" value="Yes" checked={reviewData.answers.question1 === 'Yes'} onChange={handleInputChange} /> Yes
                        <input className='input-o' type="radio" name="question1" value="No" checked={reviewData.answers.question1 === 'No'} onChange={handleInputChange} /> No
                    </div>
                    <div className='title-o'>
                        <div className='name-o'>
                            Was your order complete and undamaged?
                        </div>
                        <input className='input-o' type="radio" name="question2" value="Yes" checked={reviewData.answers.question2 === 'Yes'} onChange={handleInputChange} /> Yes
                        <input className='input-o' type="radio" name="question2" value="No" checked={reviewData.answers.question2 === 'No'} onChange={handleInputChange} /> No
                    </div >
                    <div className='title-o'>
                        <div className='name-o'>
                            Were you satisfied with the packaging?
                        </div>
                        <input className='input-o' type="radio" name="question3" value="Yes" checked={reviewData.answers.question3 === 'Yes'} onChange={handleInputChange} /> Yes
                        <input className='input-o' type="radio" name="question3" value="No" checked={reviewData.answers.question3 === 'No'} onChange={handleInputChange} /> No
                    </div>
                </div>
                <div className='contain-3-o'>
                        <div>Review:</div>
                        <textarea 
                        className='input-o comment-box-o' 
                        name="review" 
                        value={reviewData.review} 
                        onChange={handleReviewChange} 
                        />
                </div>
            </div>
            <div className='buttons-o'>
                <button type="button" className='tracking-button-o' onClick={handleFileButtonClick}>
                        Attach File
                </button>
                <input 
                    type="file" 
                    name="file" 
                    onChange={handleInputChange} 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                />
                <button className='tracking-button-o' type="button" onClick={handleSubmit}>Submit Review</button>

                
            </div>
            <ReviewsList reviews={reviews} />
        </div>
    );
};

export default Reviews;
