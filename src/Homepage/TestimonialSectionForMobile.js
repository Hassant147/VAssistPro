import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import './ReviewsForMobile.css'; // Ensure this path is correct

const reviews = [
    {
        title: 'I’m 13 and I’m rich.',
        body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
        author: 'RichieRich',
        rating: 5,
    },
    {
        title: 'Started an investment firm.',
        body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
        author: 'TheCountOfMonteChristo',
        rating: 5,
    },
    {
        title: 'It’s like a superpower.',
        body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
        author: 'ClarkKent',
        rating: 5,
    },
    {
        title: 'Quit my job.',
        body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
        author: 'GeorgeCostanza',
        rating: 5,
    },
    {
        title: 'Don’t download this app',
        body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
        author: 'JeffBezos',
        rating: 5,
    },
    {
        title: 'Don’t download this app',
        body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
        author: 'JeffBezos',
        rating: 5,
    },
];

function StarIcon({ filled }) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" className={filled ? 'star star-filled' : 'star'}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function StarRating({ rating }) {
    return (
        <div className="star-rating">
            {[...Array(5).keys()].map((index) => (
                <StarIcon key={index} filled={rating > index} />
            ))}
        </div>
    );
}

function Review({ title, body, author, rating, darkMode }) {
    return (
        <div className={`review ${darkMode ? 'dark' : ''}`}>
            <blockquote>
                <StarRating rating={rating} />
                <p className={`review-title ${darkMode ? 'dark' : ''}`}>{title}</p>
                <p className={`review-body ${darkMode ? 'dark' : ''}`}>{body}</p>
            </blockquote>
            <figcaption className={`review-author ${darkMode ? 'dark' : ''}`}>{author}</figcaption>
        </div>
    );
}

function ReviewGridSingleColumn({ darkMode }) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });

    return (
        <div ref={containerRef} className={`review-grid-single-column ${darkMode ? 'dark' : ''}`}>
            {isInView && reviews.map((review, index) => (
                <Review key={index} {...review} darkMode={darkMode} />
            ))}
        </div>
    );
}

export default function ReviewsForMobile({ darkMode }) {
    return (
        <>
            <section id="reviews-small" aria-labelledby="reviews-title" className={`section review-section-small ${darkMode ? 'dark' : ''}`}>
                <div className="container">
                    <h2 id="reviews-title" className={`section-title ${darkMode ? 'dark' : ''}`}>
                        Everyone is changing their life with Pocket.
                    </h2>
                    <p className={`section-subtitle ${darkMode ? 'dark' : ''}`}>
                        Thousands of people have doubled their net-worth in the last 30 days.
                    </p>
                    <ReviewGridSingleColumn darkMode={darkMode} />
                </div>
            </section>
        </>
    );
}

